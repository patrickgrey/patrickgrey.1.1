---
layout: blog-post-layout
title:  "Edge Animate Tip: Keeping Objects on Top"
categories: Edge-Animate
---

I wanted to create a drag and drop interaction in Edge Animate (EA). I had the problem that when an object began dragging across the page, it would hide behind other objects.

This is because the other drag objects have a higher z-index. To fix it, do the following:

First, add a class to each drag object. Then add the following code

{% highlight javascript %}

// on Start Drag Code...

$('.drag-class').css('z-index', '100');

$(this).css('z-index', '9999');

{% endhighlight %}

Code explanation:

* On mouse down, use jQuery to send all objects matching the class you added to a lower z-index e.g. 100.
* Get the current object from the drag event handler you are using for your drag and drop and set the z-index of the current 'drag' to a higher z-index.
