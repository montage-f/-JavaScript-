/**
 * Created by MonTage_fz on 2020/3/9
 */
class Dictionary {
    constructor() {
        this.datastore = new Array()
    }
    
    add(key, value) {
        this.datastore[key] = value
    }
    
    find(key) {
        return this.datastore[key]
    }
    
    remove(key) {
        delete this.datastore[key]
    }
    
    // 展示字典里的个数
    count() {
        let n = 0
        Object.keys(this.datastore).forEach(key => {
            n++
        })
        return n
    }
    
    // 清空所有的元素
    clear() {
        Object.keys(this.datastore).forEach(key => {
            delete this.datastore[key]
        })
    }
    
    showAll() {
        Object.keys(this.datastore).forEach((item) => {
            console.log(`key:${ item }=>value:${ this.datastore[item] }`)
        })
    }
}

const dictionary = new Dictionary()
dictionary.add('小明', 12)
dictionary.add('小李', 22)
dictionary.add('老李', 32)
dictionary.remove('小李')
console.log(dictionary.count())
dictionary.showAll()
