/**
 * Created by MonTage_fz on 2020/2/26
 */
// 如果希望在条件为真时执行一组语句，就选择while循环

let number = 1
let sum = 0
while (number < 11) {
    sum += number
    ++number
}
console.log(sum)


// 如果希望按执行次数执行一组语句，就选择for循环

let sum_2 = 0
for (let number_2 = 1; number_2 < 11; number_2++) {
    sum_2 += number_2
}
console.log(sum_2)


