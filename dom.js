window.dom = {
    // 创建一个节点
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    // 在node节点后面新增一个节点
    after(node, node2) {
        node.after(node2)
    },
    // 在node元素前插入node2
    before(node, node2) {
        node.before(node2)
    },
    // 在parent元素中插入child
    append(parent, child) {
        parent.append(child)
    },
    // 新增父节点
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    // 获取标签或标签们
    find(selector) {
        return document.querySelectorAll(selector)
    },
    // 获取父节点
    parent(node) {
        return node.parentNode
    },
    // 删除节点
    remove(node) {
        node.remove();
        return node;
    },
    // 删除后代
    empty(parent) {
        let firstChildNode = parent.firstChild;
        console.log(firstChildNode)
        let removedNodes = [];
        while(firstChildNode) {
            console.log(firstChildNode)
            removedNodes.push(firstChildNode);
            dom.remove(firstChildNode);
            firstChildNode = parent.firstChild;
        }
        return removedNodes
    },
    // 读写属性
    attr(node, name, value) {
        if(arguments.length === 3) {
            node.setAttribute(name, value);
        } else if(arguments.length === 2) {
            node.getAttribute(name);
        }
    },
    // 读写文本内容
    text(node, content) {
        if (arguments.length == 2) {
            node.innerText = content
        } 
        return node.innerText
    },
    // 读写html内容
    html(node, content) {
        if (arguments.length == 2) {
            node.innerHTML = content
        } 
        return node.innerHTML
    },
    // 修改style
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if(arguments.length === 2) {
            if(typeof name === 'string') {
                return node.style[name]
            } else if(name instanceof Object) {
                const object = name
                for(let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        // 添加class
        add(node, name) {
            node.classList.add(name)
            return name
        },
        // 删除class
        remove(node, name) {
            node.classList.remove(name)
            return name
        }
    },
    // 添加事件监听
    on(node, event, fn) {
        node.addEventListener(event, function(){
            fn
        });
    },
    // 删除事件监听
    off(node, event, fn) {
        node.rmoveEventListener(event, fn);
    },
    // 获取父元素
    parent(node) {
        node.parentElement
    },
    // 获取子元素
    children(node) {
        node.children
    },
    // 获取兄弟姐妹元素
    siblings(node){
        node.parent.children
    },
    // 获取下一个同级元素
    next(node) {
        node.nextElementSibling
    },
    // 获取上一个同级元素
    previous(node) {
        node.previousElementSibling
    },
    // 遍历所有节点
    each(nodes, fn) {
        for (let i = 0; i < NodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    // 获取该节点的排名
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for(i = 0; i < list.length; i++) {
            if(list[i] === node) {
                break
            }
        }
        return i
    }
}