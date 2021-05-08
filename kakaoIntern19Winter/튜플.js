// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    const arr = s.substring(2, s.length - 2).split("},{").map(v => v.split(','));
    
    return arr.sort((a, b) => a.length - b.length)
        .reduce((ac, v) => [...ac, v.find(e => !ac.includes(e))], [])
        .map(str => Number(str));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
// 	[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
// 	[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}"))
//  [111, 20]
console.log(solution("{{123}}"))
// 	[123]
