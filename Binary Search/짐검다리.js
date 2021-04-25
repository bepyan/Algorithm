// https://programmers.co.kr/learn/courses/30/lessons/43236
// 이분탐색

function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b).push(distance);

    var ans = 0, l = 1, r = distance;
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        var prev = 0, remove = 0;
        rocks.filter(rock => {
            if (rock - prev < m)
                remove++;
            else
                prev = rock;
        })

        if (remove <= n){
            ans = Math.max(ans, m);
            l = m + 1;
        }
        else 
            r = m - 1;
    }
    return ans;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
// 4