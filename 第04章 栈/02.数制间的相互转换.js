/**
 * Created by MonTage_fz on 2020/2/29
 */
// 可以利用栈将一个数字从一种数制转换成另一种数制。
// 假设想将数字n转换为以b为基数的数字，实现转换的算法如下。
// （1）最高位为n%b，将此位压入栈。
// （2）使用n/b代替n。
// （3）重复步骤1和2，直到n等于0，且没有余数。
// （4）持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符串形式。
const Stack = require('./Stack')
// 该方法可以用于将2进制转成2~9进制
const mulBase = (num, base) => {
    const stack = new Stack()
    do {
        stack.push(num % base)
        num = Math.floor(num / base)
    } while (num > 0)
    
    let converted = ''
    while (stack.length() > 0) {
        converted += stack.pop()
    }
    return converted
}
console.log(mulBase(2, 2)) // 10
