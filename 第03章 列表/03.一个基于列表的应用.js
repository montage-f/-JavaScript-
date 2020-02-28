/**
 * Created by MonTage_fz on 2020/2/28
 */
const fs = require('fs')
const path = require('path')
const List = require('./List')
const files = fs.readFileSync(path.join(__dirname, 'films.txt'), 'utf-8')
// 通过折行将字符串变成数组, 然后去掉尾部的空格
const books = files.split('\n').map(v => v.trim())
// 电影列表
const movieList = new List()
// 对列表进行定制, 用于你保存检出的电影
const customerList = new List()
// 将书存入电影列表
for (let i = 0; i < books.length; i++) {
    movieList.append(books[i])
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            const { name, movie } = list.getElement()
            console.log(`${ name } 租赁了 ${ movie } `)
            console.log(`租赁列表: ${ movieMenu.dataStore } `)
        } else {
            const movieInfo = list.getElement()
            console.log(movieInfo, 999)
        }
    }
}


class Customer {
    constructor(name, movie) {
        this.name = name
        this.movie = movie
    }
}

class MovieMenu {
    constructor() {
        this.dataStore = []
    }
    
    append(movie) {
        this.dataStore.push(movie)
    }
}

const movieMenu = new MovieMenu()

/**
 *@param {string} name 租户的名字
 *@param {string} movie 租赁的电影
 *@param {object} movieList 租赁的电影
 *@param {object} customerList 租赁的电影
 */
function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        const book = new Customer(name, movie)
        customerList.append(book)
        movieMenu.append(movie)
        movieList.remove(movie)
    } else {
        console.log(`${ movie } is not available`)
    }
}

function checkIn(movie, movieList) {
    const index = movieMenu.dataStore.indexOf(movie)
    if (index > -1) {
        movieMenu.dataStore.splice(index, 1)
        movieList.append(movie)
    }
}


checkOut('小张', '（20）City of God（《上帝之城》）', movieList, customerList)
checkOut('小张', '（19）Forrest Gump（《阿甘正传》）', movieList, customerList)
checkIn('（19）Forrest Gump（《阿甘正传》）', movieList)
checkIn('（20）City of God（《上帝之城》）', movieList)
displayList(customerList)
displayList(movieList)
