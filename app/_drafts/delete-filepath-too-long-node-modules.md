---
layout: blog-post-layout
title:  "Deleting node_module folder in Windows"
categories: workflow
---

In Windows, there is a limit to the number of characters you can have in a filepath. Therefore, if you try and delete folders that are heavily nested, you get non specific errors and cannot delete. Lovely stuff.

The solution for me was to right-click said offending folder > goto "Share with" > and select "Stop sharing".

Next create an empty folder in your root directory e.g. D:/New folder

Then open command prompt with Admin rights.

Finally enter this command:

robocopy "D:\New folder" "D:\OffendingFolder" /s /mir