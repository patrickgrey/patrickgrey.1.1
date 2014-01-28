---
layout: blog-post-layout
title:  "Case Study: PatrickGrey.co.uk"
categories: Case-Study websites
---

I built version 1.0 of this website (you are looking at v2.0) trying to follow the tidal wave of new best practices I had read about over the last couple of years. Once finished, I hated it!

When building v2.0, I tried to rectify many of the mistakes I think I made and I'm actually very happy with the result. I hope you are too!

<figure>
  <img src="/blog/img/2014/jan/2014-01-11-case-website-patrick-grey.jpg" alt="Screenshot of the PatrickGrey.co.uk website." style="max-width:255px;">
  <figcaption>Screenshot of the PatrickGrey.co.uk version 1.0.</figcaption>
</figure>

In v1.0 I focused too much on trying to get everything to fit in a mobile view without the need to scroll. This was a fundamental flaw. I also loved the idea of using animated SVG (I still do, it just makes sense) but I had to spend a lot of time trying to get it to work cross-browser.

Finally on v1.0, my approach wasn't structured enough. I was trying to take an overview and implement features to fit into that view. Instead, I should have taken a more task driven approach and focused on each feature at a time.

For v2.0 I took it all back to basics and built it up with very simple aims. The current approach is to add small features to enhance the site as I get time.

I will write some follow-up posts to this one going into more technical detail of how I achieved some aspects of the design.

### Needs Analysis

My main aim for the site is to help me get work. If a visitor asks, "What can this person do for me?", I want them to find the answer quickly.

For design and build, I had the following goals:

* I wanted a clean and clear design and layout.
* The site should be responsive
* I focused on performance. The site should load very quickly.
* It should be quick to build and easy to maintain.

### Design

I started by redesigning my logo. I wanted something to reflect my design approach; clean, balanced colour and a good use of white space. I used the colours in the logo to reflect each section of the site.

I reused the raindrop, which sounds better than drip ;-), motif throughout the rest of the design.

It is a 'Flat' design. This appeals to me as it increases the importance of white space and helps cut out design aspects that may impact browser performance (such as large drop shadows).

I tried to keep the text content as minimal as possible. This really focused my mind on what I wanted to say.

### Technical

The site was scaffolded and tested using  <a href="http://www.Yeoman.io" title="Open the Yeoman.io website in a new window." target="_blank">Yeoman.io</a>, an excellent set of workflow tools.

The pages are created with the <a href="http://jekyllrb.com/" title="Open the jekyllrb.com website in a new window." target="_blank">http://jekyllrb.com/</a> static site generator.

I used the <a href="https://github.com/robwierzbowski/generator-jekyllrb" title="Open the jgenerator-jekyllrb website in a new window." target="_blank">generator-jekyllrb</a> Yeoman generator to get started.



Styles were preprocessed using SASS. Icons and the logo are SVG with a PNG fallback for IE8.

