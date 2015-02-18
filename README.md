# eslint-angular
Custom rules to enforce Angular best practices.

one file
========
By default every controller, directive, factory or service should be in a
separate file.The file should start with angular setters.

Declare without using variables, use setter syntax.
==================================================
[Read rule: Defenitions (aka Setters)](https://github.com/johnpapa/angularjs-styleguide#style-y021)

A basic example looks like this:
<pre><code>
angular
    .module('myapp')
    .controller('myCtrl',myCtrl);

function myCtrl(){
    ...
}
</code></pre>
The name of the controllers,directives,... should point to a named function that we define below.

Attach to vm
============
Assign the scope of the functions to "vm"

expl.
angular
    .module('myapp')
    .controller('myCtrl',myCtrl);

function(){
    var vm = this;
}