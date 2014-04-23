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
    Went to nodejs.org and pressed the big green INSTALL button
    I wanted to check that /usr/bin/ was in my path so I typed echo $PATH in terminal
    Next I wanted to see all hidden folders so I typed ﻿defaults write com.apple.finder AppleShowAllFiles TRUE and then "killall Finder"
    Finally I used preferences in terminal to get it looking a bit nicer
* Ruby
    I installed homebrew first as I'd seen that mentioned in many places: ﻿ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
    I had to create my .bash_profile file:
    ﻿
In your user folder, /Users/UserName.

1- Open terminal

2- Type
cd /Users/UserName

3- Create file
touch .bash_profile

4-Open file to edit
open .bash_profile

And pasted in the text above

Then I typed brew install ruby-build
I'm not sure if I have to build this...
Typed ruby --version and got 2.0.0p247

* Yeoman
    Got a EACCES error when first tried. Next tried with SUDO but then read I shouldn't do that.
    Followed up with "echo prefix = ~/.node >> ~/.npmrc"
    Getting lost now!

* Compass
    Done with NPM


