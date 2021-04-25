// https://programmers.co.kr/learn/courses/30/lessons/42840
// 완전탐색

function solution(answers) {
    const members = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
    ]
    const score = members.map(sheet => {
        return answers.filter((ans, i) => ans === sheet[i%sheet.length]).length
    });
    const max = Math.max(...score);
    return score.reduce((ac, v, i) => v === max ? [...ac, i+1] : [...ac], []);
    // 방법 2
    // return score.reduce((ac, v, i) => {
    //     if (v === max) ac.push(i + 1)
    //     return ac;
    // }, []);
}

console.log(solution([1, 2, 3, 4, 5]))
// [1]
console.log(solution([1, 3, 2, 4, 2]))
// [1, 2, 3]
console.log(solution([5, 5, 5, 1, 4, 1]))
// [1, 3]