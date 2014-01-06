---
layout: post
title:  "Create SVG icons using a spritesheet and with png fallback"
tags: icons svg
categories: task
excerpt: "<p>This is the excerpt!</p>"
---

## Task: I want to use icons for the lab section and the social media links on my site. A sprite sheet should be used to reduce network calls.

I was considering how to get scaled png fallbacks for svg to cope with retina screens. By scaled, I meant using the technique of creating highly optimised large images and then scaling them in half, which often helps  provide detail for retina screens it seems.

However, then I realised that non SVG supporting browsers are likely to be pretty old and non retina. Therefore, the effort is unlikely to be worth it!

No need to animate so can be background images. So, could we use :before/:after? Yes, works with IE8 too!

So, create a sprite sheet SVG(?) and in the IE8 css file, replace that with a png sprite....

For IE8 I created a fallback png worked. I also don't need to overwrite all the main css code for the :after psuedo element, only the background image url.

For the contact links I initially created the icons before the li element and then I could position the link absolutely to line them up vertically. However, I then realised I wanted the icons to be selectable too. Now I have created the icons using :before on the link element but positioning the text to the ion is now difficult.

Fixed with:

line-height: 3em;
vertical-align: top;

The above didn't work for IE8 though!!

I also tried absolute positioning, varying line heights and a mixture of vertical-align with no luck.

Then I thought about putting the icon as a background-image to the link, thinking I had become too fixated on the pseudo element solutions. However, this still left me with vertical positioning problems.

Then I added a span, which I wanted to avoid to keep my HTML clean. I used [http://css-tricks.com/centering-in-the-unknown/](http://css-tricks.com/centering-in-the-unknown/ "CSS tricks article on vertical centering using ghost elements") and that worked with IE8 as well. But I realised afterwards that the icon wasn't part of the link as I was creating the ghost element with the LI element:before. I finally used a span inside the link and got it working with IE8.

This seemed the same as using the before pseudo element. In fact it was, I had found the right combination!

The above is very poorly written but it is just meant to be a self-reminder not to go through that process again!

## Assets
[https://github.com/neilorangepeel/Free-Social-Icons](https://github.com/neilorangepeel/Free-Social-Icons)

## Research

[http://www.sitepoint.com/use-svg-image-sprites/](http://www.sitepoint.com/use-svg-image-sprites/)
