// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
// 

const getSum = arr => {
    return arr.reduce((ac, v) => ac + v.plays, 0)
}
function solution(genres, plays) {
    const db = {};
    genres.forEach((genre, idx) => {
        if (!db[genre])
            db[genre] = [];

        db[genre].push({ idx, plays: plays[idx] });
    })

    // 많이 재생된 장르 정렬
    const arr = Object.entries(db).sort((a, b) => getSum(b[1]) - getSum(a[1]))
    // 장르 내에서 많이 재생된 노래 정렬
    arr.forEach(item => item[1].sort((a, b) => b.plays - a.plays))
    
    return [].concat(...arr.map(item => item[1].splice(0, 2).map(ob => ob.idx)));
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));
// [4, 1, 3, 0]