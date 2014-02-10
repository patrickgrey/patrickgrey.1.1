// put your initial configuration here, and require() and run your tests here. Keep it as light as possible.

var utils = require('utils')
var pgCoUkUtils = require("./pgCoUkUtils");
var checkForBrokenLinks = require("./checkForBrokenLinks");

checkForBrokenLinks.sayHello();