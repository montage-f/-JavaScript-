/**
 * Created by MonTage_fz on 2020/3/4
 */
class Node {
    constructor(element) {
        // 保存节点上的数据
        this.element = element
        // 用来保存指向下一个节点的链接
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    
    find(item) {
        let currNode = this.head
        while (currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }
    
    // 在一个已知节点后面插入元素时，先要找到“后面”的节点。
    insert(newElement, item) {
        const newNode = new Node(newElement)
        const current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }
    
    findPre(item) {
        let currNode = this.head
        while (currNode.next && currNode.next.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }
    
    // 从链表中删除节点时，需要先找到待删除节点前面的节点。
    remove(item) {
        const prevNode = this.findPre(item)
        if (prevNode.next) {
            // 这里跳过了待删除节点，让“前一个”节点指向了待删除节点的后一个节点。
            prevNode.next = prevNode.next.next
        }
    }
    
    display() {
        let currNode = this.head
        while (!(currNode.next == null)) {
            console.log(`${ currNode.next.element }`)
            currNode = currNode.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.insert('小方', 'head')
linkedList.insert('小李', '小方')
linkedList.insert('小刚', '小李')
linkedList.remove('小李')
linkedList.display()
