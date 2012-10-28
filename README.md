#AMDust Build Example
##Overview
This is an example of a simple application using [`AMDust`](https://github.com/KenPowers/AMDust) and [`RequireJS`](http://requirejs.com). The primary purpose of this example project is to demonstrate how to use `RequireJS`'s [`r.js`](https://github.com/jrburke/r.js/) to build and optimize a project with [`dust`](http://akdubya.github.com/dustjs/) templates. While optimizing the templates will be compiled and automatically inserted into the final built script. What this means is that during development the compiler code will be downloaded to the client and the templates will be compiled client side, but after optimization no compiler code is downloaded and the templates are already compiled for the client to use.

##How To
First, install [`RequireJS`](http://requirejs.com):

    npm install -g requirejs

Next run the optimizer:

    r.js -o app.build.js

The optimized application will now be available in the `target` directory. You can try out the application by serving the `target` directory using one of the following two recommended methods:

Using [`nws`](https://github.com/KenPowers/nws):

    nws -d target

Using Python:

    cd target
    python -m SimpleHTTPServer

##About the `app.build.js` File
The main value to pay attention to is the `stubModules: ['dustc']`. What this means is that the code which compiles templates will not be included in the build, significantly reducing the download size. `dustc` includes code which will output the compiled templates into the final build.

##License
**The MIT License**

Copyright (c) 2012 Kenneth Powers <mail@kenpowers.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.