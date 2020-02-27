/**
 * Created by MonTage_fz on 2020/2/27
 */
const arr = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
]

// 我们现在来求出上面数组的每一行的分数
const average = (arr) => {
    let average = 0
    for (let row = 0; row < arr.length; row++) {
        let total = 0
        for (let col = 0; col < arr[row].length; col++) {
            // 将每一行的数字相加
            total += arr[row][col]
        }
        // 求出每一行数字的平均数
        average = total / arr[row].length
        console.log(average)
    }
}
average(arr)
