/**
 * Created by MonTage_fz on 2020/3/4
 */
class Soldier {
    constructor(name) {
        this.name = name
        this.next = null
    }
}

const HEAD = 'head'

class List {
    constructor() {
        this.head = new Soldier(HEAD)
        this.head.next = this.head
    }
    
    find(name) {
        let cur = this.head
        while (cur.name !== name && cur.name !== HEAD) {
            cur = cur.next
        }
        return cur
    }
    
    insert(name, oldName) {
        const cur = this.find(oldName)
        const soldier = new Soldier(name)
        // 这一行代码用来使最后一个元素始终为null
        soldier.next = cur.next
        cur.next = soldier
    }
    
    // 向前走几步
    advance(n) {
        for (let i = 0; i < n; i++) {
            if (this.head.name === HEAD) {
                this.head = this.head.next
            }
        }
    }
    
    pFind(name) {
        let cur = this.head
        while (cur.next && cur.next.name !== name && cur.name !== HEAD) {
            cur = cur.next
        }
        return cur
    }
    
    remove(name) {
        const cur = this.pFind(name)
        cur.next = cur.next.next
    }
    
    toArray() {
        let cur = this.head
        const arr = []
        while (cur.next && cur.next.name !== HEAD) {
            cur = cur.next
            arr.push(cur.name)
        }
        return arr
    }
    
    
}

const list = new List()
list.insert(1, HEAD)
list.insert(2, 1)
list.insert(3, 2)
list.insert(4, 3)
console.log(list.toArray())
