---
layout: blog-post-layout
title:  "Using CasperJS in a Yeoman Workflow to Test for 404s on a Jekyll Site."
categories: geekery testing
---

I use the [Yeoman Jekyll Generator](https://github.com/robwierzbowski/generator-jekyllrb "The Yeoman Jekyll Generator GitHub page.") to livereload and build my personal site. I love the automation. I've been wanting to introduce testing to my workflow for some time and, for a front-end developer, [CasperJS](http://casperjs.org/) looked like a good fit. This post outlines the steps I took to integrate a test for broken links on my site into my Yeoman workflow.

I'd love to hear of any improvements or alternative approaches. All the source files for my personal site are on GitHub at [https://github.com/patrickgrey/patrickgrey.1.1](https://github.com/patrickgrey/patrickgrey.1.1) if you want to take a look.

First I installed [PhantomJS](http://phantomjs.org/download.html) (I'm on Windows to I downloaded the exe, saved it to C:\bin\phantomjs, then added that to my $PATH). Then I [installed CasperJS](http://docs.casperjs.org/en/latest/installation.html#installing-from-npm) using NPM.

Next I created a test folder ("test_casper") at the root of my project to keep testing separate from site generation. I split my test files into a logical set as suggested at [http://developer.helpscout.net/blog/functional-testing-casperjs/#toc_13](http://developer.helpscout.net/blog/functional-testing-casperjs/#toc_13) and created a simple test (like the one [here](http://docs.casperjs.org/en/latest/testing.html#browser-tests)) to check it was working. I ran this from the console.

The next challenge was to test the site locally as it was generated. To do this I installed [grunt-casper](https://github.com/iamchrismiller/grunt-casper) so that I could run casper as a task from my grunt file.

This is the task configuration:

{% highlight javascript %}

casper : {
    uiTest : {
        src: ['test_casper/test.js'],
        options : {
            test: true
        }
    }
}

{% endhighlight %}

and this is the task call I put in the watch configuration:

{% highlight javascript %}

casper: {
    files: [
        '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
        'test_casper/**/*.js'
    ],
    tasks: ['casper:uiTest']
}

{% endhighlight %}

Now, when I run "grunt serve" and then make a change to a watched file, the casperJS test is called each time. Running a test on each save is useful when developing my test but once the test is good, I'll comment it out and the next job is to run the test once the site is built for deployment.

The test itself checks all internal links (i.e. those on http://127.0.0.1:9000/) and has been useful for internal links I put in posts or navigation and have since changed. The test itself was based on the really useful script I found here: [http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs](http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs). You can see the adapted version at [https://github.com/patrickgrey/patrickgrey.1.1/blob/master/test_casper/checkForBrokenLinks.js](https://github.com/patrickgrey/patrickgrey.1.1/blob/master/test_casper/checkForBrokenLinks.js).

Once I get deployment tests up and running, the next step for me is to try and use a Continuous Integration platform like [https://www.codeship.io/](https://www.codeship.io/).

