---
layout: blog-post-layout
title:  "Installing Yeoman on a Fresh Mac"
categories: workflow
---

First install dependencies:

* Git
    * Downloaded from ﻿http://git-scm.com/download/mac
    * first problem when double clicking Git pkg got error saying can't open as developer unidentified (not from apple store). Solution is to ctrl+click (right click as I am viewing on PC) and select Open. This gives option to run anyway.
    * Typed git in but got error message saying Developer Tools not installed (I thought this was just difficult on a PC!). I pressed the install button offered. Restarted terminal and we are good to go.
    * I would like to use Vim but looks like a fair bit of learning so that will be later. I want to modify the look of the terminal too.
    * Set up identity: ﻿http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup
    * "which git" tells me where git is installed: /usr/bin/git
    * use the below to set up keychain then next time you enter password, it's remembered.
    * ﻿﻿git config --global credential.helper osxkeychain
* Node
* Ruby
* Compass

