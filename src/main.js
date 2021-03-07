const testDiv = dom.find('#test>.red')[0]; // 获取对应的元素
console.log(testDiv);

dom.style(test, 'color', 'red')//设置 div.style.color
console.log(dom.style(test,'color'));
dom.style(test2,{border:'1px solid black',color:'blue'});

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

