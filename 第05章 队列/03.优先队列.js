/**
 * Created by MonTage_fz on 2020/3/3
 */
// 从优先队列中删除元素时，需要考虑优先权的限制
class Patient {
    constructor(name, code) {
        this.name = name
        // 变量code是一个整数表示优先级
        // 这里我们把code越小优先级越高
        this.code = code
    }
}

const queues = []
const dequeue = (queues) => {
    let entry = 0
    for (let i = 0; i < queues.length; i++) {
        if (queues[i].code < queues[entry].code) {
            entry = i
        }
    }
    return queues.splice(entry, 1)
}
for (let i = 0; i < 10; i++) {
    queues.push(new Patient(`A-${ i }`, Math.floor(Math.random() * 10)))
}
console.log(queues)
console.log(dequeue(queues))
console.log(dequeue(queues))
console.log(dequeue(queues))
