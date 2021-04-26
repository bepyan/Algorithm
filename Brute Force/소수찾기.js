// https://programmers.co.kr/learn/courses/30/lessons/42839
// lv2 순열 완전탐색

const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
    });
    return result;
}
function solution(numbers) {
    const arr = numbers.split("");
    const cands = []
    for (var i = 1; i <= numbers.length; i++)
        cands.push(...permutation(arr, i).map(v => Number(v.join(''))))

    return [...new Set(cands)].reduce((ac, v) => {
        if (v < 2) return ac;

        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(v); i++)
            if (v % i === 0) {
                isPrime = false;
                break;
            }
        return isPrime ? ac + 1 : ac;
    }, 0);
}

console.log(solution("17"))
// 3
console.log(solution("011"))
// 2