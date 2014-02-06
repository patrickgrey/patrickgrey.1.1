---
layout: blog-post-layout
title:  "Understanding Node, NPM and Bower"
categories: Geekery
---
I started to become aware of command line tools when I started using <a href="http://Yeoman.io" target="_blank">Yeoman.io</a>. These tools are useful and are becoming more popular in the front-end development area. I decided I needed to understand what the different tools were in order to use them properly.

### Node.js
This has been at the root of the tools I have used. This article gave me a good insight into what it is and what it aims to do:
<a href="https://github.com/maxogden/art-of-node" target="_blank">https://github.com/maxogden/art-of-node</a>

<em>Takeaway:</em> Node is just a tool for managing I/O across file systems and networks. Think of as a server-side platform written in Javascript.

Node can be used to write programs that;

* use the protocols of the web (I’m guessing at this point this could be related to SOA - fast and simple - but Ruby seems more popular for that just now)
* read and write data to the filesystem and local processes/memory

It does this in an asynchronous way and uses an event model.

### NPM

I found this really useful for my understanding of NPM and Bower:
<a href="http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer">http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer</a>

<em>Takeaway:</em> NPM allows me to install, update and uninstall tools that help my workflow. These tools run in the console.

### Bower

Bower does the same, loading all sorts of components for the front end. The article didn’t give me much of an idea of the practical potential, I need to look about more for that. Note: I can see real benefits for this like loading icon sprites (social media) or html components but I have a concern about js and css files as it seems that I have to link to each one that is installed. For performance reasons, I prefer to minify and concatenate these files for performance. Maybe I’m wrong here but this was my initial impression.