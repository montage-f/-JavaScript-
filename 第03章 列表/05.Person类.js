/**
 * Created by MonTage_fz on 2020/2/28
 */
class Person {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
}

const arr = Array.from(new Array(10), (item, index) => {
    const name = Math.random()
    const sex = Math.random() > 0.5 ? '男' : '女'
    return new Person(name, sex)
})
const searchSex = (sex) => {
    return arr.filter(item => item.sex === sex)
}
console.log(searchSex('男'))
