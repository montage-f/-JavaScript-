/**
 * Created by MonTage_fz on 2020/2/28
 */
class List {
    constructor() {
        this.listSize = 0
        this.pos = 0
        // 初始化一个空数组来保存列表元素
        this.dataStore = []
    }
    
    // 清空列表中所有元素
    clear() {
        delete this.dataStore
        this.dataStore.length = 0
        this.listSize = this.pos = 0
    }
    
    // 返回列表的字符串形式
    toString() {
        return this.dataStore.join(',')
    }
    
    // 在现有元素后插入新元素
    /**
     *@param {number||string} element 插入的元素
     *@param {number||string} after 现有元素
     */
    insert(element, after) {
        const insertPos = this.find(after)
        if (insertPos !== -1) {
            this.dataStore.splice(insertPos + 1, 0, element)
            this.listSize++
            return true
        }
        return false
    }
    
    // 在列表的末尾添加新元素
    append(element) {
        // 在变量的后面，先赋值后在执行加法操作(i++);
        this.dataStore[this.listSize++] = element
    }
    
    // 查找元素位置
    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i
            }
        }
        return -1
    }
    
    // 从列表中删除元素
    remove(element) {
        const foundAt = this.find(element)
        if (foundAt !== -1) {
            // 移除一个数组元素
            this.dataStore.splice(foundAt, 1)
            // 将这个数组元素的个数减少一个
            this.listSize--
            return true // 表示删除成功
        }
        return false // 表示删除失败
    }
    
    // 将列表的当前位置设移动到第一个元素
    front() {
        this.pos = 0
    }
    
    // 将列表的当前位置设移动到最后一个元素
    end() {
        this.pos = this.listSize - 1
    }
    
    // 将当前位置前移一位
    prev() {
        this.pos--
        
    }
    
    // 将当前位置后移一位
    next() {
        if (this.pos < this.listSize) {
            this.pos++
        }
    }
    
    // 返回列表中元素的个数
    length() {
        return this.listSize
    }
    
    // 返回列表的当前位置
    currPos() {
        return this.pos
    }
    
    // 将当前位置移动到指定位置
    moveTo(position) {
        this.pos = position
    }
    
    // 返回当前位置的元素
    getElement() {
        return this.dataStore[this.pos]
    }
    
    // 判断给定值是否在列表中
    contains(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) return true
        }
        return false
    }
    
    // 判断后一位
    hasNext() {
        return this.pos < this.listSize
    }
    
    // 判断前一位
    hasPrev() {
        return this.pos > 0
    }
}

const list = new List()
list.append('小明')
list.append('小红')
list.append('小李')
list.append('小张')
console.log(list.getElement())
list.next()
console.log(list.getElement())
list.next()
console.log(list.getElement())
list.prev()
console.log(list.getElement())
