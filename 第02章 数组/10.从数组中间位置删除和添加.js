/**
 * Created by MonTage_fz on 2020/2/26
 */
// 使用splice()方法为数组添加元素，需提供如下参数：
// 起始索引（也就是你希望开始添加元素的地方）；
// 需要删除的元素个数（添加元素时该参数设为0）；
// 想要添加进数组的元素

const nums = [1, 2, 3, 4, 5]
const strs = ['A', 'B', 'C']
nums.splice(1, 0, strs)
console.log(nums) //[ 1, [ 'A', 'B', 'C' ], 2, 3, 4, 5 ]

nums.splice(1, 0, 7, 8, 9)
console.log(nums) // [ 1, 7, 8, 9, [ 'A', 'B', 'C' ], 2, 3, 4, 5 ]
