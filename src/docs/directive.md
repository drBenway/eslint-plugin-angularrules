Directive
==========

syntax
------
Directives should use named functions & setter syntax
[read more](https://github.com/johnpapa/angularjs-styleguide#style-y024)

example

angular
    .module('app')
    .directive('myCtrl',myCtrl);
function myCtrl(){

}
The controllers,directives,... should point to a named function that we define below.