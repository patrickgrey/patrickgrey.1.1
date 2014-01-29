---
layout: blog-post-layout
title:  "Jekyll, Google Analytics and Different Domains"
categories: Geekery Jekyll
---

The code below switches Google Analytic account based on the current domain. I wanted to do this to avoid having to change the code and recompile each time I wanted to upload to a backup site. This code has not been widely tested yet so do so before putting into a production site.

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

I have a Jekyll generated site. I build and upload it to my hosting (patrickgrey.co.uk). I also keep a backup on GitHub. Since it's there I thought, why not make it a GitHub Pages site as well? So I did (patrickgrey.github.io). This lets me test run updates on github before launching on the live website.

The problem was I wanted to use Google Analytics for each one to see who was poking their nose in ;-) The manual approach would have been to comment out one account UA id and uncomment the other, recompile the Jekyll site and upload/push. The code above means I can use the same code base for both sites. An edge case but it may come in handy.