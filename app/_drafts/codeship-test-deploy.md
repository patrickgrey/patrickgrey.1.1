---
layout: blog-post-layout
title:  "Adding Continuous Integration with Codeship for Testing and Deployment."
categories: geekery javascript
---

I read an article on CSS tricks about Continuous Integration and Deployment. It covered BDD and TDD as a basis to check files before deployment. It was written by a Codeship employee so I looked into Codeship to see what it could do.

I started to find out about a workflow where you could deploy updates depending on whether the update passed the tests you had created.

This struck me as a super solid way to update my work.

I suspect this workflow could be slight overkill but I decided to try it when updating my website. There were two reasons for this:

1. I use github pages as a staging platform so I can check visually how new pages work. However, I may make a mistake that breaks links, images etc for new and old posts. Unless I manually check the whole site each time, I can't be sure.
2. It would help me learn the basics if I ever have to do it for clients in the future.

I'm going to break this down into uploading to github and passing tests and then automatic deploy to my hosting, if I can.



First of all I signed up for Codeship then I messagesd them directly to ask if my proposed workflow was viable. Alex Tacho got back to me quickly to confirm and encourage. He then sent, unprompted, several follow up emails with guidance. I can't thank him enough for that kind of service (and just plain solid niceness)!



I decided to try and integrate casper into my Yeoman workflow. First, I installed https://github.com/iamchrismiller/grunt-casper using npm install grunt-casper --save. This added grunt-casper to dependencies in package.json. I noticed that all other grunt items were in DEVdependencies. I read up on this and this is for dependencies which are only required for development, which testing is! 

Gruntfile - initconfig sets all options, they can vary with a colon e.g. jekyll:server & jekyll:dist. Then these are added to the tasks at the bottom:

// Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload', 
      'watch'
    ]);
  }); 

  Now use this to add task: https://github.com/iamchrismiller/grunt-casper

  Got it working! Task is in Watch so need to make a file save before anything is tested!



Grunt Casper:
    https://github.com/iamchrismiller/grunt-casper
    https://npmjs.org/package/generator-mo


Using CasperJS:
    http://blog.newrelic.com/2013/06/04/simpler-ui-testing-with-casperjs-2/
    http://www.youtube.com/watch?v=Kefil5tCL9o
    https://gist.github.com/n1k0/4509789
    http://vgaltes.com/index.php/2013/03/14/testing-with-casperjs-part-1/
    http://developer.helpscout.net/blog/functional-testing-casperjs/
    http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs

CI codeship:
    http://blog.codeship.io/2014/02/04/continuous-deployment-static-pages-amazon-s3.html
    http://blog.codeship.io/2014/01/28/the-new-codeship-documentation.html