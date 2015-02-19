Controller
==========

syntax
------
Controllers should use named functions & setter syntax
[read more](https://github.com/johnpapa/angularjs-styleguide#style-y024)

example

angular
    .module('app')
    .controller('myCtrl',myCtrl);
function myCtrl(){

}

The controllers,directives,... should point to a named function that we define below.