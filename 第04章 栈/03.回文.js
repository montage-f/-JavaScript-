/**
 * Created by MonTage_fz on 2020/2/29
 */
// 回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的。
// 比如，单词“dad”、“racecar”就是回文；如果忽略空格和标点符号，
// 下面这个句子也是回文，“A man, a plan,a canal: Panama”；数字1001也是回文。
const Stack = require('./Stack')

const isPalindrome = (word) => {
    const stack = new Stack()
    for (let i = 0; i < word.length; i++) {
        stack.push(word[i])
    }
    let newWord = ''
    while (stack.length() > 0) {
        newWord += stack.pop()
    }
    return word === newWord
}
console.log(isPalindrome('1001')) // true
console.log(isPalindrome('1002')) // false
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('dad')) // true
