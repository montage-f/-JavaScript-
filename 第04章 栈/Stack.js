/**
 * Created by MonTage_fz on 2020/2/29
 */
class Stack {
    constructor() {
        // 保存栈内元素
        this.dataStore = []
        // 记录栈顶位置
        this.top = 0
    }
    
    // 向栈内压入一个元素
    push(element) {
        this.dataStore[this.top++] = element
    }
    
    // 返回栈顶元素
    pop() {
        return this.dataStore[--this.top]
    }
    
    // 返回栈的第top-1个位置的元素
    peek() {
        return this.dataStore[this.top - 1]
    }
    
    // 返回栈内元素的个数
    length() {
        return this.top
    }
    
    // 清空一个栈
    clear() {
        this.top = 0
    }
}

module.exports = Stack
