/**
 * Created by MonTage_fz on 2020/2/26
 */
// 首先，可以将一个数组赋给另外一个数组：
const nums = []
for (let i = 0; i < 10; i++) {
    nums[i] = i
}
// 下面这种赋值需要注意
// 当把一个数组赋给另外一个数组时，只是为被赋值的数组增加了一个新的引用。
// 当你通过原引用修改了数组的值，另外一个引用也会感知到这个变化。
const sameNums = nums
sameNums[0] = 400
console.log(nums[0]) //400

// 我们可以采用下面这个方法来处理
const copy = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i]
    }
}
const arr = [1, 2, 3, 4, 5]
const sames = []
copy(arr, sames)
sames[0] = 500
console.log(arr[0]) // 1



