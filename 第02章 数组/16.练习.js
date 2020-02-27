/**
 * Created by MonTage_fz on 2020/2/27
 */
// 1．创建一个记录学生成绩的对象，提供一个添加成绩的方法，
// 以及一个显示学生平均成绩的方法。
const Student = function () {
    this.grids = []
    this.addGrid = function (grid) {
        this.grids.push(grid)
    }
    this.average = function () {
        let averageGrid = 0
        for (let i = 0; i < this.grids.length; i++) {
            averageGrid += this.grids[i]
        }
        console.log(`学生的平均分数为: ${ averageGrid / this.grids.length }`)
    }
}
const student = new Student()
student.addGrid(40)
student.addGrid(60)
student.addGrid(80)
student.average()


// 2．将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
const names = ['小张', '小芳', '小明']
console.log(names.reverse())


// 3．修改本章前面出现过的weeklyTemps对象，
// 使它可以使用一个二维数组来存储每月的有用数据。
// 增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。

// 我们看看 windows 的日历。发现总共有这么几个元素。
// 1.年份的选择、月份的选择
// 2.周一 ~ 周日(周日 ~ 周六)
// 3.日历格子 6*7 = 42

// 从数据的角度来分析日历的实现是比较简单的
// 1.我们需要显示一个当前时间的结构 - new Date()
// 2.我们需要显示当月的信息 - [星期(周一~周日)，日期(1-[28,29,30,31])]
//      - 其中我们只要知道了每个月的 1日 是星期几，就能很容易地摆放后面的日子(万事开头难)。
//      - 我们最多需要 6 行来显示我们的日期，因为要第一排如果只包含本月的一天 6(上个月的) + (1 + 4*7)，
//        这样就五行了，当月天数若大于 29，就显示不下了
//      - 确定了 6 行之后，我们发现我们可能需要获取上个月，和下个月多出来的几天的摆放位置。
//      - 不同年份的不同月的 2月份，我们知道它的日期是不同的，所以我们还需要判断 平年还是闰年。
// 3.显示上个月，下个月的切换。我们发现需要有个函数来帮我们更新日历。

const WeeklyTemps = function () {
    // 判断是否是闰年
    const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    // 获得每个月的日期有多少, 注意 month 0-11, 代表: 一月 - 十二月
    const getMonthCount = (year, month) => {
        const arr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        // 三元运算符和|| 在一起的时候, 要给三元运算符加上括号
        const data = arr[month] || (isLeapYear(year) ? 29 : 28)
        return Array.from(new Array(data), (v, index) => index + 1)
    }
    // 获取某年某月1号星期几, 注意 getDay() 0-6, 0 代表星期日
    const getWeekDay = (year, month) => new Date(year, month, 1).getDay()
    // 获取到上个月的天数
    const getPreMonthDay = (year, month) => {
        if (month === 0) {
            return getMonthCount(year - 1, 11)
        }
        return getMonthCount(year, month - 1)
    }
    // 获取到下个月的天数
    const getNextMonthDay = (year, month) => {
        if (month === 11) {
            return getMonthCount(year + 1, 0)
        }
        return getMonthCount(year, month + 1)
    }
    // 拿到我们当前的时间
    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth()
    // 获取到当前月的天数
    const curMonthDate = getMonthCount(year, month)
    // 获取到上月的天数
    const preMonthDate = getPreMonthDay(year, month)
    // 获取到下月的天数
    const nextMonthDate = getNextMonthDay(year, month)
    // 获取这个月一号星期几, 如果是星期六, 这上个月在这个月有五天
    // 后面减掉的这个1,其实也可以认为是以星期日开头还是以星期一开头
    const weekDay = (getWeekDay(year, month) || 7) - 1
    // 获取上个月的在这个月的天数
    const preDate = preMonthDate.slice(-1 * weekDay)
    // 获取下个月再这个月所剩的天数
    const nextDate = nextMonthDate.splice(0, 42 - curMonthDate.length - weekDay)
    // 当前所有的日期
    const allMonthDate = preDate.concat(curMonthDate, nextDate)
    let allDate = []
    for (let i = 0; i < 6; i++) {
        allDate.push(allMonthDate.slice(i * 7, (i + 1) * 7))
    }
    console.log(allDate)
}
const weeklyTemps = new WeeklyTemps()

// 4．创建这样一个对象，它将字母存储在一个数组中，
// 并且用一个方法可以将字母连在一起，显示成一个单词。
