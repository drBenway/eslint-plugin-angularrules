![Buildstatus](https://img.shields.io/badge/build-failed-red.png)

# eslint-angular
Custom set of rules to enforce Angular best practices.

Rules
========
You can find detailed information about all the rules in the docs folder.
Most of the rules are based on the guidelines by [@john_papa](https://github.com/johnpapa/angularjs-styleguide)


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
