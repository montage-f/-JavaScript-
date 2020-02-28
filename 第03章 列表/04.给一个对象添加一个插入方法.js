/**
 * Created by MonTage_fz on 2020/2/28
 */
// 1. 增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执行插入操作。
// 这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它是指在字母表中出现的先后顺序。
// 2．增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作。

class List {
    
    constructor() {
        this.dataStore = []
    }
    
    /**
     *@param {string|number} info 要插入的内容
     */
    addMax(info) {
        let lock = false
        this.dataStore.forEach(item => {
            lock = item < info
        })
        if (lock || !this.dataStore.length) {
            this.dataStore.push(info)
        }
    }
    
    /**
     *@param {string|number} info 要插入的内容
     */
    addMin(info) {
        let lock = false
        this.dataStore.forEach(item => {
            lock = item > info
        })
        if (lock || !this.dataStore.length) {
            this.dataStore.push(info)
        }
    }
}

const list1 = new List()
list1.addMax(12)
list1.addMax(11)
list1.addMax(13)
list1.addMin(10)
console.log(list1.dataStore)
const list2 = new List()
list2.addMax('b')
list2.addMax('c')
list2.addMin('d')
list2.addMin('a')
console.log(list2.dataStore)
