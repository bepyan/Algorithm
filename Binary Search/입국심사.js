// https://programmers.co.kr/learn/courses/30/lessons/43238
// 이진탐색

function solution(n, times) {
    var l = 0, r = Math.max(...times) * n;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        // 주어진 시간에 최대로 심사할 수 있는 인원수
        const pass = times.reduce((ac, v) => ac + Math.floor(m / v), 0);
        if (pass < n) 
            l = m + 1;
        else 
            r = m;
    }
    return l;
}

console.log(solution(6, [7, 10]))
// 28