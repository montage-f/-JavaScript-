/**
 * Created by MonTage_fz on 2020/2/27
 */
const nums = [1, 2, 3, 4, 5]
const addNums = (item) => item * 2
// 等到一个新的数组, 并且让每一个数组的值都乘以2
const mapNums = nums.map(addNums)
console.log(mapNums) //[ 2, 4, 6, 8, 10 ]


const hasEven = (item) => item % 2 === 0
// 将满足条件的项放入到一个新的数组里面, 并将它返回
const filterNums = nums.filter(hasEven)
console.log(filterNums) // [ 2, 4 ]
