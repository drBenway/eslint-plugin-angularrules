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
eslintTester.addRuleTest("../../../src/lib/rules/factory.js", {
    valid: [
        "angular.module('myapp').factory('myfactory',myfactory);"
    ],
    invalid: [
        {
            code: "angular.module('myapp').factory('myfactory',myotherfactory);",
            errors: [{message: "factory myfactory should call a function with the same name, myotherfactory was used"}]
        }
    ]
});