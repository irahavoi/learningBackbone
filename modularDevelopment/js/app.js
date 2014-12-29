// js/app.js

var app = app || {};
require(["test"], function(test) {
    //This function is called when js/test.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //test's dependencies have loaded, and the test argument will hold
    //the module value for "test".
});