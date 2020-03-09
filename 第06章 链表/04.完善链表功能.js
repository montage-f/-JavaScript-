/**
 * Created by MonTage_fz on 2020/3/4
 */
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

const HEAD = 'head'

class LinkedList {
    constructor() {
        this.head = new Node(HEAD)
        this.index = 1
    }
    
    // 找到后一个元素
    find(element) {
        let cur = this.head
        while (cur.element !== element) {
            cur = cur.next
        }
        return cur
    }
    
    insert(newElement, oldElement) {
        const element = this.find(oldElement)
        const newNode = new Node(newElement)
        newNode.next = element.next
        element.next = newNode
    }
    
    // 找到上一个元素
    pFind(element) {
        let cur = this.head
        while (cur.next && cur.next.element !== element) {
            cur = cur.next
        }
        return cur
    }
    
    remove(element) {
        let item = this.pFind(element)
        if (item.next) {
            item.next = item.next.next
        }
    }
    
    // 向前移动
    advance(n) {
        this.index += n
    }
    
    // 向后移动
    back(n) {
        this.index -= n
    }
    
    // 展示当前元素
    show() {
        let step = 0
        let cur = this.head
        while (cur.next && step < this.index) {
            cur = cur.next
            step++
        }
        return cur.element
    }
    
    toArray() {
        const arr = []
        let cur = this.head
        while (cur.next) {
            cur = cur.next
            arr.push(cur.element)
        }
        return arr
    }
}

const linkedList = new LinkedList()
linkedList.insert('小1', HEAD)
linkedList.insert('小2', '小1')
linkedList.insert('小3', '小2')
linkedList.insert('小4', '小3')
linkedList.advance(2)
linkedList.back(1)
linkedList.remove('小3')
console.log(linkedList.show())
console.log(linkedList.toArray())
