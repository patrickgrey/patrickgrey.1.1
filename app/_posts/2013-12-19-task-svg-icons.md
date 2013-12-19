---
layout: post
title:  "SVG icons from spritesheet with png fallback"
tags: icons svg
categories: task
---

# Create SVG icons using a spritesheet and with png fallback

## Task: I want to use icons for the lab section and the social media links on my site. A sprite sheet should be used to reduce network calls.

* I couldn't access the svg if it was a background image on the link or in an <img> tag.
* I didn't like the mass of markup that inline SVG would add to the page and the inability to cahce it. I may have to revisit this approach though...
* I therefore opted to use the &lt;object&gt; tag with a fallback png inside it.
    * [http://css-tricks.com/using-svg/](http://css-tricks.com/using-svg/ "CSS tricks article on SVG use.")
    * Unfortunately, the fallback doesn't show with IE8 - so I'm considering using the span mentioned below to show a png in the background.
    * This article was useful for getting svg to scale responsively: [http://soqr.fr/testsvg/embed-svg-liquid-layout-responsive-web-design.php](http://soqr.fr/testsvg/embed-svg-liquid-layout-responsive-web-design.php "soQR artivle on responsive svg images")
* There was a problem with Chrome that the link wasn't clickable so I had to add a span tag: [http://soqr.fr/testsvg/svg-link-with-object.php](http://soqr.fr/testsvg/svg-link-with-object.php "soQR.fr article about the need to use a span to make a link work")
* I still needed to get the IE8 logo working:
    * New style sheet just for IE8 and less, hidden by IE comments
    * The text on the span was hidden using [http://css-tricks.com/examples/ImageReplacement/](http://css-tricks.com/examples/ImageReplacement/ "css tricks article on replacing text with images") and replaced with the logo. IE8 will show a fixed width layout.
