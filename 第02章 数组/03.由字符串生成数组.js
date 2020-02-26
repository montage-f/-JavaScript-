/**
 * Created by MonTage_fz on 2020/2/26
 */
// 调用字符串对象的split()方法也可以生成数组。
const sentence = `the quick brown fox jumped over the lazy dog`
const word = sentence.split(' ')
for (let i = 0; i < word.length; i++) {
    console.log(`word ${ i } ${ word[i] }`)
}
