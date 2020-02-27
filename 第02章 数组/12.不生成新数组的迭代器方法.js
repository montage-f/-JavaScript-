/**
 * Created by MonTage_fz on 2020/2/27
 */

const square = (num) => {
    console.log(num * num)
}
const nums = [1, 2, 3, 4, 5]
// 该方法没有返回值
nums.forEach(square)


const isEven = (num) => num % 2 === 0
// 改方法只要有一个结果是false, 就会返回false
const even = nums.every(isEven)
console.log(even) // false


const isSome = (num) => num % 2 === 0
// 该方法只要有一个结果是true, 就会返回true
const some = nums.some(isSome)
console.log(some) // true


const add = (p, i) => p + i
// 可以用来累加
const reduceAdd = nums.reduce(add)
console.log(reduceAdd)  // 15

const concat = (p, i) => p.concat(i)
// 可以用来拼接数组
const reduceConcat = nums.reduce(concat, [6, 7, 8, 9])
console.log(reduceConcat)


const str = (p, i) => p + i
// 可以用来拼接字符串
const strReduce = nums.reduce(str, '')
console.log(strReduce)
