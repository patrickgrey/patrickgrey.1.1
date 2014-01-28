---
layout: blog-post-layout
title:  "Jekyll, Google Analytics and Different Domains"
categories: Geekery Jekyll
---

This is the code I will discuss below.

{% highlight javascript %}

(function(i,s,o,g,r,a,m){
    // ...usual GA code block...
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// My customisation
if( location.hostname.match( 'patrickgrey.github.io' ) ) {
  ga('create', 'UA-41706969-2', 'patrickgrey.github.io/');
}
else {
  ga('create', 'UA-41706969-1', 'patrickgrey.co.uk/');
}
// My customisation END

ga('send', 'pageview');

{% endhighlight %}

Basically it switches Google Analytics UA code based on the current domain of the page.

I had a problem and was about to take the wrong and very long path around it.

I have a Jekyll generated site. I build and upload it to my hosting. I also keep a backup on GitHub. Since it's there I thought, why not make it a GitHub Pages site as well. So I did. Now I have a mirror of the site: patrickgrey.github.io

The problem was I wanted to use Google Analytics for each one.