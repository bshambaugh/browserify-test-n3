In the N3-test directory create the js file: browserify test3-prime.js -o bundled-t3-prime.js

In the browser directory run: index-old3.html

In the requests directory run: index.html

Unfortunately, N3 is not available to other scripts.

#--------------------------------- 

##Revision that works:

This seems to work thus far:

clone: [https://github.com/RubenVerborgh/N3.js](https://github.com/RubenVerborgh/N3.js)

Write some code that does this (save it to exportN3.js):

var N3 = require('./N3.js/N3.js');
exports.N3 = N3;

 Type this in the cli:

 browserify exportN3.js -s N3 -o bun2-exportN3.js

exportN3.js should be something that can be worked with

The two things to note are the exporting of the library, and the second is the generation of a Universal Module with the -s option 


