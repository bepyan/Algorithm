// https://programmers.co.kr/learn/courses/30/lessons/67258
// 

function solution1(gems) {
    var answer = [];
    const db = new Set(gems);
    if (db.size === 1)
        return [1, 1]

    gems.forEach((gem, idx) => {
        const visit = {};
        [...db].forEach(el => visit[el] = 1);
        visit[gem] = 0;

        var targetLen = db.size - 1, nextIdx = idx;
        for (; nextIdx < gems.length; nextIdx++) {
            const target = gems[nextIdx];
            if (visit[target]) {
                targetLen--;
                if (targetLen === 0) break;

                visit[target] = 0;
            }
        }
        if (!targetLen)
            answer.push([idx + 1, nextIdx + 1]);
    })
    return answer.reduce((ac, v) =>
        ac[1] - ac[0] > v[1] - v[0] ? v : ac, [1, gems.length]);
}

function solution2(gems) {
    const cnt = new Set(gems).size;
    const gemMap = {};
    var answer = [1, gems.length];
    gems.forEach((gem, i) => {
        gemMap[gem] = i;
        const target = Object.values(gemMap);
        if (target.length === cnt) {
            const cand = [Math.min(...target) + 1, i + 1];
            answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
        }
    })
    return answer;
}


function solution3(gems) {
    const cnt = new Set(gems).size;
    const gemMap = new Map();
    var answer = [1, gems.length];
    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);
        if (gemMap.size === cnt) {
            const cand = [gemMap.values().next().value + 1, i + 1];
            answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
        }
    })
    return answer;
}

function solution(gems) {
    const cnt = new Set(gems).size;
    var ans = [1, gems.length];

    var l = 0, r = 0;
    const hit = new Map();
    hit.set(gems[0], 1)

    while (l < gems.length && r < gems.length) {
        if (hit.size === cnt) {
            if(ans[1] - ans[0] > r - l)
                ans = [l + 1, r + 1]

            hit.set(gems[l], hit.get(gems[l]) - 1);
            if (hit.get(gems[l]) === 0) 
                hit.delete(gems[l])

            l++;
        }
        else {
            r++;
            const right = hit.get(gems[r]);
            hit.set(gems[r], right ? right + 1 : 1);
        }
    }
    return ans;
}

console.log(solution3(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))
// [3, 7]

console.log(solution3(["XYZ", "XYZ", "XYZ"]))
// [1, 1]