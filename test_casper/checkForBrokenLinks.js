

exports.checkForBrokenLinksInit = function() {

    

    
    casper.test.begin('assertDoesntEqual() tests', 1, function(test) {


        // Set the start URL
        var startUrl = 'http://127.0.0.1:9000/';

        // URL variables
        var visitedUrls = [], pendingUrls = [], brokenUrls = [];

        var urlCount = 0;
        var max = 2000;

        /*function nextUrl(){
            if (pendingUrls.length > 0) {
                var nextUrl = pendingUrls.shift();
                //that.echo(that.colorizer.format('<- Popped ' + nextUrl + ' from the stack', { fg: 'blue' }));

                spider(that, nextUrl);
            }
            // check if valid, if is call spider, if not call self again
        }*/

        // Spider from the given URL
        function spider(url) {

            

            // Add the URL to the visited stack
            visitedUrls.push(url);

            // Open the URL
            casper.open(url).then(function() {

                var status = this.status().currentHTTPStatus;

                // console.log(url);
                

                if( status === 404 ) {
                    // console.log(status);
                    brokenUrls.push(url);
                }

                // Find links present on this page
                var links = this.evaluate(function() {
                    var links = [];
                    Array.prototype.forEach.call(__utils__.findAll('a'), function(e) {
                        links.push(e.getAttribute('href'));
                    });
                    // console.log(links);
                    return links;
                });

                // Add newly found URLs to the stack
                var baseUrl = this.getGlobal('location').origin;

                Array.prototype.forEach.call(links, function(link) {
                    var newUrl = pgCoUkUtils.absoluteUri(baseUrl, link);
                    if (pendingUrls.indexOf(newUrl) == -1 && visitedUrls.indexOf(newUrl) == -1) {
                        //casper.echo(casper.colorizer.format('-> Pushed ' + newUrl + ' onto the stack', { fg: 'magenta' }));
                        // console.log(newUrl.split("//")[1].split("/")[0]);

                        var isLocal = false;

                        var afterProtocol = newUrl.split("//")[1];
                        if (afterProtocol) {
                            var hrefDomain = afterProtocol.split("/")[0];
                            
                            if (hrefDomain.indexOf("127.0.0.1") !== -1) {
                                isLocal = true;
                            };
                        };

                        if(isLocal) {pendingUrls.push(newUrl);}
                    }
                });

                // If there are URLs to be processed
                if (pendingUrls.length > 0 && urlCount < max) {
                    urlCount++;
                    var nextUrl = pendingUrls.shift();
                    // console.log("Nexct url: "+nextUrl);
                    //this.echo(this.colorizer.format('<- Popped ' + nextUrl + ' from the stack', { fg: 'blue' }));
                    spider(nextUrl);
                }

                

            }); // End Open

        } // End Spider function

        // Start spidering
        casper.start(startUrl, function() {
            spider(startUrl);
        });

        casper.then(function() {
            
            
            
            test.assertEquals(brokenUrls.length, 0);
            
        });

        casper.run(function() {

            if (urlCount >= max) {
                casper.test.comment("max url count of "+ max.toString() +" exceeded!!!");
            };

            casper.test.comment("brokenUrls: "+brokenUrls.length);

            for (var i = brokenUrls.length - 1; i >= 0; i--) {
                casper.test.comment("404: "+brokenUrls[i]);
            };

            // Need to prettify output
            fs.write('test_casper/results.txt', brokenUrls); 

            test.done();
        });
    });
}