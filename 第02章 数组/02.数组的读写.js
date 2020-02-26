/**
 * Created by MonTage_fz on 2020/2/26
 */
// 可以使用[]操作符将数据赋给数组，比如下面的循环，将1～100的数字赋给一个数组：
const nums = []
for (let i = 0; i < 100; i++) {
    nums[i] = i + 1
}
console.log(nums)

// 使用[]操作符读取数组中的元素，如下所示：
const numbers = [1, 2, 3]
const sum = numbers[0] + numbers[1] + numbers[2]
console.log(sum)

// 要依次读取数组中的所有元素，使用for循环无疑会更简单
const numbers1 = [1, 2, 3, 5, 1, 22]
let sun = 0
for (let i = 0; i < numbers1.length; i++) {
    sun += numbers[i]
}
console.log(sun)

