(function () {
    "use strict";

    module.exports = {
        rules: {
            "controller": require('./lib/rules/controller.js'),
            "directive": require('./lib/rules/directive.js'),
            "factory": require('./lib/rules/factory.js'),
            "service": require('./lib/rules/service.js'),
            "no-deferred-controller-logic": require('./lib/rules/no-deferred-controller-logic.js')
        },
        rulesConfig: {
            "controller": 2,
            "directive": 2,
            "factory": 2,
            "service": 2,
            "no-deferred-controller-logic": [2, ["$http"]]
        }
    };

})
();