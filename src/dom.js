window.dom={
    find(selector,scope){
       return (scope||document).querySelectorAll(selector);
    },
    style(node,name,value){
        if(arguments.length===3){
            //dom.style(div,'color','red')
            return node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name==='string'){
                //dom.style(div,'color') name是字符串
                return node.style[name]
            }else if(name instanceof Object){
                //dom.style(div,{color:'red'}) name是object实例
                const object=name
                for(let key in object){
                    node.style[key]=object[key]
                    }
                }
            }
    },
    each(nodeList,fn){
        let n;
        for(n=0;n<nodeList.length;n++){
            fn.call(null,nodeList[n])
        }
    }
};