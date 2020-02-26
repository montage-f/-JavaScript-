/**
 * Created by MonTage_fz on 2020/2/26
 */
// indexOf()函数是最常用的存取函数之一，
// 用来查找传进来的参数在目标数组中是否存在。
    // 如果找不到, 就返回 -1
const names = ['小明', '小芳', '小张', '小芳', '小李']
const name = '小芳'
const index = names.indexOf(name)
console.log(index) // 1
// 用lastIndexOf() 该函数返回相同元素中最后一个元素的索引，如果找不到, 就返回 -1
const lastIndex = names.lastIndexOf(name)
console.log(lastIndex)
