---
layout: blog-post-layout
title:  "My e-learning development set-up."
categories: e-learning geekery
---

I'm currently developing a lot of Adobe Edge Animate (EA) compositions for e-learning modules. They will ultimately be deployed to a Learning Content Management System (LCMS) but I need a way to quickly review content as I develop it. EA lets you preview in the browser but I like to see content in context so I need to be able to step through different pages and topics within a module. I also like to have live-reload as I code ;-)

This post outlines what I use and the steps I go through to set up a really nice workflow.

I use the [yeoman.io](http://yeoman.io) webapp generator to create a simple false module with navigation.

* Create a project folder and a module folder within that.
* Right click on module and open gitbash console at that location.
* Update webapp generator using {% highlight console %} npm install -g generator-webapp {% endhighlight %} (update doesn't always seem to work for me - must post issue on github).
* Scaffold the project using the generator: {% highlight console %} yo webapp {% endhighlight %}
* I don't need Bootstrap but select sass/compass and modernizr.
* Once the scaffolding is finished, I run it: {% highlight console %} grunt serve {% endhighlight %}
* In the app folder, I add a folder called "topics". Within this I have topic folders; "t1", "t2", etc.
* I add my custom index page that includes an iframe linking to pages in the topics folder and navigation buttons.
* Navigation is controlled via a simple JSON model in index.html
* Now I can add new pages and build the module in context with the benefits of live-reload as I go.
* Next I set the project up as a git repository so I have version control: {% highlight console %} git init {% endhighlight %} on the module folder.
* I create a repo on github or (more often with projects for clients) a private repo on bitbucket.
* Then add the remote repo to the local one, add the files, commit and push {% highlight console %} git remote add origin https://patrickgrey@bitbucket.org/patrickgrey/ians2014fam.git
git add -A
git commit -m "Scaffolding files created"
git push -u origin master {% endhighlight %}
* I customise the Gruntfile.js a little for my own needs e.g. the topics folder needs to be copied to distribution and I comment out HTML compression task as I like to be able to read the output.
* Finally, I open the module folder in Sublime Text and save it as a project. I add the project files to the .gitignore file.


I'd be happy to send anyone a copy of the navigation files, which you are free to use in any way you like. Just get in touch.