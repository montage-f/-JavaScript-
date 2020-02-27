/**
 * Created by MonTage_fz on 2020/2/27
 */
// arr.reverse()该方法将数组中元素的顺序进行翻转, 会影响原数组
const nums = [12, 3, 4, 5, 610]
const numsReverse = nums.reverse()
console.log(nums) // [ 610, 5, 4, 3, 12 ]
console.log(numsReverse) // [ 610, 5, 4, 3, 12 ]


// arr.sort() 可以根据条件来进行排序, 会影响原数组
const names = [12, 3, 4, 5, 610]
const newNames = names.sort((a, b) => a - b)
console.log(newNames) // [ 3, 4, 5, 12, 610 ]
