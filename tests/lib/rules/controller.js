module.exports = function (context) {
    function report(node, name1, name2) {
        context.report(node, 'controller {{controller}} should call a function with the same name, {{functionname}} was used', {
            controller: name1,
            functionname: name2
        });
    }

    return {
        'CallExpression': function (node) {

            var callee = node.callee;
            if (callee.type === 'MemberExpression' && callee.property.name === 'controller') {
                var name1 = node.arguments[0].value;
                var name2 = node.arguments[1].name;
                if (name1 !== name2) {
                    report(node, name1, name2);
                }
            }
        }


    };
};
