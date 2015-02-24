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
eslintTester.addRuleTest("../../../src/lib/rules/no-deferred-controller-logic.js", {
    valid: [{
        code: "angular.module('myapp').controller('mycontroller',mycontroller); function mycontroller(){x= 'a',y=2;}",
        args: [2, ["$http"]]
    }],

    invalid: [
        {
            code: "angular.module('myapp').controller('mycontroller',mycontroller);function mycontroller(){ var x = $http.get('myjson.json');}",
            errors: [{message: "this controller function uses a restricted dependency $http."}],
            args: [2, ["$http"]]

        }
    ]
});