module.exports = function(context){
    function report (node,name1){
        context.report (node, 'You should\'nt assign Angular to variable{{var}}',{
            var: name1
        });
    }
    return {
        'CallExpression':function(node){
            var init = node.init;
            if(init.hasOwnProperty('callee')){
                if(init.callee.hasOwnProperty('object')){
                    if(init.callee.object.name === "angular"){
                        report(node,node.id.name);
                    }
                }
            }
        }
    };
};
