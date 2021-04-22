// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript
// greedy

function solution(name) {
    const a = "A".charCodeAt(0), z = "Z".charCodeAt(0);
    const mid = Math.floor((z + a) / 2)
    name = [...name].map(num => {
        const n = num.charCodeAt(0);
        return n > mid ? z - n + 1 : n - a;
    })

    const getCricuitIdx = (i) => {
        if (i < 0)
            return name.length + i;
        if (i >= name.length)
            return i - name.length;
        return i;
    }

    var idx = 0, ans = 0;
    while (true) {
        ans += name[idx];
        name[idx] = 0;
        if (!name.some(v => v != 0))
            break;

        var left = 1, right = 1;
        while (name[getCricuitIdx(idx - left)] === 0)
            left++;
        while (name[getCricuitIdx(idx + right)] === 0)
            right++;

        if (left < right) {
            ans += left;
            idx = getCricuitIdx(idx - left)
        }
        else {
            ans += right;
            idx = getCricuitIdx(idx + right);
        }
    }
    return ans;
}

console.log(solution("JEROEN"))
// 56
console.log(solution("JAN"))
// 23