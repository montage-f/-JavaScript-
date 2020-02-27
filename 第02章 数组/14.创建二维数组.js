/**
 * Created by MonTage_fz on 2020/2/27
 */
// 二维数组类似一种由行和列构成的数据表格。
// 在JavaScript中创建二维数组，需要先创建一个数组，
// 然后让数组的每个元素也是一个数组。
/**
 *@method matrix
 *@param {Number} rows 行
 *@param {Number} cols 列
 *@param {any} initial 填充项
 *@return {Array} 数组
 */
const matrix = (rows, cols, initial) => {
    let rowsArr = []
    for (let i = 0; i < rows; i++) {
        let colsArr = []
        for (let k = 0; k < cols; k++) {
            colsArr[k] = initial || i * 5 + k
        }
        rowsArr[i] = colsArr
    }
    return rowsArr
}

const arr = matrix(5, 5, '')
console.log(arr)
