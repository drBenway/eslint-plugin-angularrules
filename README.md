# eslint-angular
Custom rules to enforce Angular best practices.


By default every controller, directive, factory or service should be in a
separate file.The file should start with angular setters. Don't assign angular to a variable.
A basic example looks like this:

angular
    .module('myapp')
    .controller('myCtrl',myCtrl);

function myCtrl(){
    ...
}

The name of the controllers,directives,... should point to a named function that we define below.