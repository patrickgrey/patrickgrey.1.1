---
layout: blog-post-layout
title:  "Edge Animate Tip: Creating Triangles"
categories: edge-animate
---

I find triangles pretty useful during e-learning development, mainly to use as arrow heads. I generally like to avoid using images where possible in Edge Animate (EA) (for several reasons including download speeds, ease of maintenance and easier integration with Content Management Systems i.e. fewer separate files).

The neatest way to do this is to use pure CSS, as outlined here: [http://css-tricks.com/snippets/css/css-triangle/](http://css-tricks.com/snippets/css/css-triangle/).

However, I like to have a visual placeholder on the 'stage' when I'm developing complex animations in EA. This makes positioning objects on the stage easier and also helps with future maintenance where other developers can actually see what is going on.

To create a 'physical' triangle, I draw a square and then set the Transform SkewX to 27 degrees and Transform SkewY to -45 degrees. You may need to play with these values.

<figure>
  <img src="/blog/img/2014/feb/2014-02-03-edge-animate-triangles.png" alt="Screenshot of the skew settings in Edge Animate when creating a triangle." style="max-width:403px;">
  <figcaption>Screenshot of the skew settings in Edge Animate when creating a triangle.</figcaption>
</figure>

Now select Ctrl/Cmd+Y to turn it into a symbol. Double click to enter the symbol and set the Stage > Overflow setting to 'hidden'. Ensure the width and height settings aren't linked and then reduce the height of the symbol to half (e.g. the middle of the diamond). This effectively crops the diamond into a triangle.

<figure>
  <img src="/blog/img/2014/feb/2014-02-03-edge-animate-triangles-crop.png" alt="Screenshot of the symbol stage settings to 'crop' a diamond to a triangle." style="max-width:435px;">
  <figcaption>Screenshot of the symbol stage settings to 'crop' a diamond to a triangle.</figcaption>
</figure>

You should now have a triangle that is easy to change the properties of.