"use strict";

//-------------------controller-------------------------//

angular
    .module("myApp")
    .controller("test", othertest);// name should be the same
function othertest($http) {
    $http.get(function (data) { // deferred controller logic
        return data;
    });
}
//-------------------directive--------------------------//
function myotherdir() {
    //...
}
angular
    .module("myOtherApp")
    .directive("mydir", myotherdir);// name should be the same

//------------------service ----------------------------//
function myotherservice() {
    //...
}
angular
    .module("myOtherApp")
    .service("myservice", myotherservice); // name should be the same

//-------------------factory ----------------------------//
function myotherfactory() {
    //...
}
angular
    .module("myOtherApp")
    .factory("myfactory", myotherfactory); // name should be the same
