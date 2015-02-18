"use strict";

// --------------------------------
// requirements
//---------------------------------
var eslint = require("eslint").linter,
    ESLintTester = require("eslint-tester");

// --------------------------------
// Tests
// --------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/assign-scope-to-vm", {
    valid: [
        "angular.module('myApp).controller('myCtrl',myCtrl);"
    ],
    invalid: [
        {
            code: "var x = angular.module('myApp');",
            errors: [{message: "You should\'nt assign Angular to variable x"}]
        },
        {
            code: "var angular = angular.module('test');",
            errors: [{message: "You should\'nt assign Angular to variable angular"}]
        }
    ]
});