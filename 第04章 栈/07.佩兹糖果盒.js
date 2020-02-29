/**
 * Created by MonTage_fz on 2020/2/29
 */
const Stack = require('./Stack')
const sugar = ['红', '黄', '白']
const getNum = (start, end) => Math.floor(Math.random() * (end - start) + start)
const allSugar = Array.from(new Array(100), () => sugar[getNum(0, 3)])

const SugarStack = new Stack()
for (let i = 0; i < allSugar.length; i++) {
    SugarStack.push(allSugar[i])
}
/**
 *@param {string} color 要拿出该颜色的糖
 *@param {object} sugarStack 所有的糖果
 */
const getSugarColor = (color, sugarStack) => {
    // 用于存储不许想要的颜色的糖
    const getStack = new Stack()
    // 存放剩余的糖果
    const setStack = new Stack()
    while (sugarStack.length() > 0) {
        if (sugarStack.peek() === color) {
            getStack.push(sugarStack.pop())
        } else {
            setStack.push(sugarStack.pop())
        }
    }
    while (setStack.length() > 0) {
        sugarStack.push(setStack.pop())
    }
    return sugarStack
}
console.log(getSugarColor('红', SugarStack))
