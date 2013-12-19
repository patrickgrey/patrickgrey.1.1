---
layout: post
title:  "IE8 Testing"
tags: testing ie8
categories: workflow
---

# Workflow for testing websites in IE8

I was using IETester which was fine for a while but would crash with the slightest problem on the page. At least this let me know something was wrong but not much help in debugging.

In the end I decided to go for a Virtual Machine (VM). I went to [http://www.modern.ie/](http://www.modern.ie/ "A testing website for Internet Explorer") and tried the Hyper-V machine for windows 8.Then discovered that it won't install on my laptop for some reason. I next tried [VirtualBox](https://www.virtualbox.org "Oracle Virtual Machine") and it was successful. I had to install VirtualBox first and then run the Image exe provided by modern.ie but now I have a full IE8 running on XP (XP just for extra shit and giggles).