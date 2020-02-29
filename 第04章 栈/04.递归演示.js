/**
 * Created by MonTage_fz on 2020/2/29
 */
const Stack = require('./Stack')
// 递归函数
const factorial = (n) => {
    if (n === 0) return 1
    return n * factorial(n - 1)
}
console.log(factorial(6))

// 使用栈来模拟递归
const fact = (n) => {
    const stace = new Stack()
    while (n > 0) {
        stace.push(n--)
    }
    let num = 1
    while (stace.length() > 0) {
        num *= stace.pop()
    }
    return num
}
console.log(fact(6))
