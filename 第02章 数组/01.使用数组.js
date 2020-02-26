/**
 * Created by MonTage_fz on 2020/2/26
 */
// 声明数组的方法:
// 1. 最简单的方式是通过[]操作符声明一个数组变量：
// 使用这种方式创建数组，你将得到一个长度为0的空数组。可以通过调用内建的length属性来验证这一点：
const arr = []
console.log(arr.length) // 0

// 2. 在声明数组变量时，直接在[]操作符内放入一组元素：
const arr_1 = [1, 2, 3, 4, 5]
console.log(arr.length) // 5

// 3. 调用Array的构造函数创建数组：
const arr_2 = new Array()
console.log(arr_2.length) // 0

// 4. 可以为构造函数传入一组元素作为数组的初始值：
const arr_3 = new Array(1, 2, 3, 4, 5)
console.log(arr_3.length) // 5

// 5. 在调用Array的构造函数时，可以只传入一个参数，用来指定数组的长度：
const arr_4 = new Array(5)
console.log(arr_3.length) // 5

// 使用Array.isArray(item) 来判断一个对象是否是数组
const num = 1
const nums = [1, 2, 3]
console.log(Array.isArray(num)) // false
console.log(Array.isArray(nums)) // true

