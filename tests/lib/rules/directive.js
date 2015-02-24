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
eslintTester.addRuleTest("../../../src/lib/rules/directive.js", {
    valid: [
        "angular.module('myapp').directive('mydirective',mydirective);"
    ],
    invalid: [
        {
            code: "angular.module('myapp').directive('mydirective',myotherdirective);",
            errors: [{message: "directive mydirective should call a function with the same name, myotherdirective was used"}]
        }
    ]
});