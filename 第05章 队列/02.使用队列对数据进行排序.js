/**
 * Created by MonTage_fz on 2020/3/3
 */
const distribute = (nums, queues, n, digit) => {
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            // 获取到个位数的数值大小
            queues[nums[i] % 10].push(nums[i])
        } else {
            // 获取到十位或者十位以上的数字
            queues[Math.floor(nums[i] / digit)].push(nums[i])
        }
    }
}
const collect = (queues, nums) => {
    let i = 0;
    for (let digit = 0; digit < 10; digit++) {
        while (queues[digit].length) {
            nums[i++] = queues[digit].shift()
        }
    }
}

const displayArray = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ' '
    }
    console.log(str)
}
const queues = []
for (let i = 0; i < 10; i++) {
    queues[i] = []
}
const nums = []
while (nums.length < 10) {
    nums.push(Math.floor(Math.random() * 100))
}
displayArray(nums)
distribute(nums, queues, 10, 1)
collect(queues, nums)
distribute(nums, queues, 10, 10)
collect(queues, nums)
console.log('-----')
displayArray(nums)
