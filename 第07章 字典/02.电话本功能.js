/**
 * Created by MonTage_fz on 2020/3/9
 */
class Dictionary {
    constructor() {
        this.phoneNumber = {}
    }
    
    add(key, value) {
        this.phoneNumber[key] = value
    }
    
    showOne(key) {
        return this.phoneNumber[key]
    }
    
    showAll() {
        Object.keys(this.phoneNumber).forEach(key => {
            console.log(`key:${ key }=>value:${ this.phoneNumber[key] }`)
        })
    }
    
    remove(key) {
        delete this.phoneNumber[key]
    }
    
    clear() {
        Object.keys(this.phoneNumber).forEach(key => {
            delete this.phoneNumber[key]
        })
    }
}

const dictionary = new Dictionary()
dictionary.add('张三', 123)
dictionary.add('李四', 456)
dictionary.add('王五', 789)
dictionary.showAll()
dictionary.remove('李四')
dictionary.showAll()
dictionary.clear()
dictionary.showAll()

