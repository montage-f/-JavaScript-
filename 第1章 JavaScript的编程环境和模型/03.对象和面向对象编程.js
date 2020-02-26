/**
 * Created by MonTage_fz on 2020/2/26
 */

function Checking(amount) {
    this.balance = amount
    this.deposit = deposit
    this.withdraw = withdraw
    this.toString = toString
}

function deposit(amount) {
    this.balance += amount
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount
    }
    if (amount > this.balance) {
        console.log('资金不充足')
    }
}

function toString() {
    return `Balance:${ this.balance }`
}

const account = new Checking(500)
// 存入
account.deposit(1000)
console.log(account.toString()) //Balance:1500
// 取出
account.withdraw(750)
console.log(account.toString()) // Balance:750

account.withdraw(800)
console.log(account.toString()) // 资金不充足 // Balance:750



