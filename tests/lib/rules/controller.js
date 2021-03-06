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
eslintTester.addRuleTest("../../../src/lib/rules/controller.js", {
    valid: [
        "angular.module('myapp').controller('mycontroller',mycontroller);"
    ],
    invalid: [
        {
            code: "angular.module('myapp').controller('mycontroller',myothercontroller);",
            errors: [{message: "controller mycontroller should call a function with the same name, myothercontroller was used"}]
        }
    ]
});