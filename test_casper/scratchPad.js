// var casper = require('casper').create();

/*var casper = require('casper').create({
    verbose: false,
    logLevel: 'debug'
});*/


/*casper.test.begin('assertDoesntExist() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven"></div>');
        test.assertDoesntExist('.taxes');
    }).run(function() {
        test.done();
    });
});*/

/*casper.start('http://127.0.0.1:9000/index.html', function() {
    this.echo('index title: '+this.getTitle());
});*/

/*casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});*/

// casper.run();

/*casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

var thatEcho = this.echo;

var checked = [];
var currentLink = 0;
var fs = require('fs');
var upTo = ~~casper.cli.get('max-depth') || 1000;
// var url = casper.cli.get(0);
var url = 'http://127.0.0.1:9000/';
var baseUrl = url;
var links = [url];
var utils = require('utils');
var f = utils.format;
 
function absPath(url, base) {
    return new URI(url).resolve(new URI(base)).toString();
}
 
// Clean links
function cleanLinks(urls, base) {
    return utils.unique(urls).filter(function(url) {
        return url.indexOf(baseUrl) === 0 || !new RegExp('^(#|ftp|javascript|http)').test(url);
    }).map(function(url) {
        return absPath(url, base);
    }).filter(function(url) {
        return checked.indexOf(url) === -1;
    });
}
 
// Opens the page, perform tests and fetch next links
function crawl(link) {
    this.start().then(function() {
        this.echo(link, 'COMMENT');
        this.open(link);
        checked.push(link);
    });
    this.then(function() {
        if (this.currentHTTPStatus === 404) {
            this.warn(link + ' is missing (HTTP 404)');
        } else if (this.currentHTTPStatus === 500) {
            this.warn(link + ' is broken (HTTP 500)');
        } else {
            this.echo(link + f(' is okay (HTTP %s)', this.currentHTTPStatus));
        }
    });
    this.then(function() {
        var newLinks = searchLinks.call(this);
        links = links.concat(newLinks).filter(function(url) {
            return checked.indexOf(url) === -1;
        });
        this.echo(newLinks.length + " new links found on " + link);
    });
}
 
// Fetch all <a> elements from the page and return
// the ones which contains a href starting with 'http://'
function searchLinks() {
    return cleanLinks(this.evaluate(function _fetchInternalLinks() {
        return [].map.call(__utils__.findAll('a[href]'), function(node) {
            // Need to introduce check here to see if domain is 'http://127.0.0.1:9000' or 'http://patrickgrey.co.uk' or 'http://patrickgrey.github.io' or www...
            // var nodeHREF = node.getAttribute('href').toString();
            // thatEcho("hi");
            // var urlArray = nodeHREF.split("/");
            // this.echo("domain: "+urlArray[0]);

            return node.getAttribute('href');
        });
    }), this.getCurrentUrl());
}
 
// As long as it has a next link, and is under the maximum limit, will keep running
function check() {
    if (links[currentLink] && currentLink < upTo) {
        crawl.call(this, links[currentLink]);
        currentLink++;
        this.run(check);
    } else {
        this.echo("All done, " + checked.length + " links checked.");
        this.exit();
    }
}
 
if (!url) {
    casper.warn('No url passed, aborting.').exit();
}
 
casper.start('https://js-uri.googlecode.com/svn/trunk/lib/URI.js', function() {
    var scriptCode = this.getPageContent() + '; return URI;';
    window.URI = new Function(scriptCode)();
    if (typeof window.URI === "function") {
        this.echo('URI.js loaded');
    } else {
        this.warn('Could not setup URI.js').exit();
    }
});
 
casper.run(process);
 
function process() {
    casper.start().then(function() {
        this.echo("Starting");
    }).run(check);
}*/

// http://planzero.org/blog/2013/03/07/spidering_the_web_with_casperjs

// Set the start URL
var startUrl = 'http://spider.test/';

// URL variables
var visitedUrls = [], pendingUrls = [];

// Create instances
var casper = require('casper').create({ /*verbose: true, logLevel: 'debug'*/ });
var utils = require('utils')
var helpers = require('./helpers')

// Spider from the given URL
function spider(url) {

    // Add the URL to the visited stack
    visitedUrls.push(url);

    // Open the URL
    casper.open(url).then(function() {

        // Set the status style based on server status code
        var status = this.status().currentHTTPStatus;
        switch(status) {
            case 200: var statusStyle = { fg: 'green', bold: true }; break;
            case 404: var statusStyle = { fg: 'red', bold: true }; break;
             default: var statusStyle = { fg: 'magenta', bold: true }; break;
        }

        // Display the spidered URL and status
        this.echo(this.colorizer.format(status, statusStyle) + ' ' + url);

        // Find links present on this page
        var links = this.evaluate(function() {
            var links = [];
            Array.prototype.forEach.call(__utils__.findAll('a'), function(e) {
                links.push(e.getAttribute('href'));
            });
            return links;
        });

        // Add newly found URLs to the stack
        var baseUrl = this.getGlobal('location').origin;
        Array.prototype.forEach.call(links, function(link) {
            var newUrl = helpers.absoluteUri(baseUrl, link);
            if (pendingUrls.indexOf(newUrl) == -1 && visitedUrls.indexOf(newUrl) == -1) {
                //casper.echo(casper.colorizer.format('-> Pushed ' + newUrl + ' onto the stack', { fg: 'magenta' }));
                pendingUrls.push(newUrl);
            }
        });

        // If there are URLs to be processed
        if (pendingUrls.length > 0) {
            var nextUrl = pendingUrls.shift();
            //this.echo(this.colorizer.format('<- Popped ' + nextUrl + ' from the stack', { fg: 'blue' }));
            spider(nextUrl);
        }

    });

}

// Start spidering
casper.start(startUrl, function() {
    spider(startUrl);
});

// Start the run
casper.run();