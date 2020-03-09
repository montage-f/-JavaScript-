/**
 * Created by MonTage_fz on 2020/3/9
 */
class Dictionary {
    constructor() {
        this.words = {}
    }
    
    showCount() {
        Object.entries(this.words).forEach(([key, value]) => {
            console.log(`${ key }出现了${ value }次`)
        })
    }
    
    addWord(str) {
        str.split(' ').forEach(word => {
            if (this.words[word]) {
                this.words[word] += 1
            } else {
                this.words[word] = 1
            }
        })
    }
}

const dictionary = new Dictionary()
dictionary.addWord('the brown fox jumpedover the blue fox')
dictionary.showCount()
