/**
 * Created by MonTage_fz on 2020/2/26
 */

// concat 方法, 不会改变原始数组
const names1 = ['小明', '小芳', '小张', '小芳', '小李']
const names2 = ['A', 'B', 'C', 'D', 'E']
const newNames = names1.concat(names2)
console.log(newNames)  // [ '小明', '小芳', '小张', '小芳', '小李', 'A', 'B', 'C', 'D', 'E' ]

// splice 方法, 会改变原始数组
const nums = [1, 2, 3, 4, 5]
const newNums = nums.splice(1, 3)
console.log(newNums) // [2,3,4]
console.log(nums) // [1,5]



