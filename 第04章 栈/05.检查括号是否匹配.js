/**
 * Created by MonTage_fz on 2020/2/29
 */
// 栈可以用来判断一个算术表达式中的括号是否匹配。
// 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。
// 下面是一个括号不匹配的算术表达式的例子：2.3+23/12+(3.14159×0.24。

const Stack = require('./Stack')

const checkExpression = (expression) => {
    let symbolMap = {
        '{': -1,
        '}': 1,
        '(': -2,
        ')': 2,
        '[': -3,
        ']': 3,
    }
    let stack = new Stack();
    let strArr = expression.split('');
    let result = -1;
    for (let i = 0; i < strArr.length; i++) {
        if (symbolMap[strArr[i]] < 0) {
            stack.push(strArr[i]);
        } else {
            if (symbolMap[strArr[i]] > 0 && symbolMap[stack.pop()] + symbolMap[strArr[i]] !== 0) {
                result = i
                break
            }
        }
    }
    if (!!stack.length()) {
        result = strArr.length
    }
    return result === -1 ? 'Right Pairs' : result;
}
console.log(checkExpression('2.3+23/12+(3.14159×0.24'))

