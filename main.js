// 创建一个节点
let div2 = dom.create('<span>create a div</span>')
console.log(div2)

// 获取标签或标签们
let div1 = dom.find('#div1')[0];
console.log(div1)

 // 在div1节点后面新增一个节点
 dom.after(div1, div2);

 // 在div1中插入节点
 dom.append(div1, dom.create('<span>This is div3</span>'));

 // 获取父节点
 console.log(dom.parent(div1))
 // body

 // 新增父节点
 let attr = dom.find('#attr')[0]
 dom.wrap(attr, dom.create('<div id="wrap"></div>'))

 // 删除节点
 console.log(dom.remove(div1));

 // 删除所有后代节点
 removedNodes = dom.empty(dom.find('#empty')[0]);
 console.log(removedNodes)

// 读写属性
dom.attr(dom.find('#attr')[0], 'attr', 'abc def')
console.log(dom.attr(dom.find('#attr')[0], 'attr'))

// 读写文本内容
dom.text(dom.find('#attr')[0], 'This is test text')
console.log(dom.text(dom.find('#attr')[0]))

// 读写html内容
dom.html(dom.find('#attr')[0], 'This is test html')
console.log(dom.html(dom.find('#attr')[0]))

// 添加class
dom.class.add(dom.find('#attr')[0], 'newClass')
dom.class.add(dom.find('#attr')[0], 'newClass2')

console.log(dom.find('#attr')[0].classList)

// 删除class
dom.class.remove(dom.find('#attr')[0], 'newClass')

// 添加事件监听
dom.on(dom.find('#attr')[0], 'click', ()=>{
    this.style.backgroundColor = 'red'
})

// 删除事件监听