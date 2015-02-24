"use strict";

// --------------------------------
// requirements
//---------------------------------
var eslint = require("../../../node_modules/eslint/lib/eslint"),
    ESLintTester = require("../../../node_modules/eslint-tester/lib/eslint-tester");

// --------------------------------
// Tests
// --------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("../../../src/lib/rules/assign-scope-to-vm", {
    valid: [
        "angular.module('myApp).controller('myCtrl',myCtrl);"
    ],
    invalid: [
        {
            code: 'var x = angular.module("myApp");',
            errors: [{message: "You shouldnt assign Angular to variable x"}]
        },
        {
            code: 'var angular = angular.module("test");',
            errors: [{message: "You shouldnt assign Angular to variable angular"}]
        }
    ]
});