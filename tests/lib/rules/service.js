/**
 * Created by westworld on 24/02/2015.
 */
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
eslintTester.addRuleTest("../../../src/lib/rules/service.js", {
    valid: [
        "angular.module('myapp').service('myservice',myservice);"
    ],
    invalid: [
        {
            code: "angular.module('myapp').service('myservice',myotherservice);",
            errors: [{message: "service myservice should call a function with the same name, myotherservice was used"}]
        }
    ]
});