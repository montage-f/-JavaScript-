/**
 * Created by MonTage_fz on 2020/2/26
 */
    // JavaScript中允许函数递归调用。
    // 任何可以被递归定义的函数，都可以被改写为迭代式的程序，要将这点牢记于心。
const factorial = (number) => {
        if (number === 1) {
            return number
        }
        return number * factorial(number - 1)
    }

console.log(factorial(5))

// 当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起
// 计算过程
/**
 5 * factorial(4)
 5 * 4 * factorial(3)
 5 * 4 * 3 * factorial(2)
 5 * 4 * 3 * 2 * factorial(1)
 5 * 4 * 3 * 2 * 1
 5 * 4 * 3 * 2
 5 * 4 * 6
 5 * 24
 120
 */
