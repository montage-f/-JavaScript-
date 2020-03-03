/**
 * Created by MonTage_fz on 2020/3/3
 */
// 当男男女女来到舞池，他们按照自己的性别排成两队。
// 当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴。
// 他们身后的人各自向前移动一位，变成新的队首。
// 当一对舞伴迈入舞池时，主持人会大声喊出他们的名字。
// 当一对舞伴走出舞池，且两排队伍中有任意一队没人时，主持人也会把这个情况告诉大家。

const men = ['小刚', '小李', '小张', '小智', '小杜']
const women = ['小妞', '小染', '小妹', '小团', '小吖', '艾艾']


const dance = (men, women) => {
    while (men.length && women.length) {
        const man = men.shift()
        const woman = women.shift()
        console.log(`男舞者是:${ man }; 女舞者是:${ woman }`)
    }
    if (men.length || women.length) {
        console.log(`剩余的舞者为:${ men && men.shift() || women && women.shift() }`)
    }
}
dance(men, women)
