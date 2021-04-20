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


function solution(gems) {
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

console.log(solution2(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))
// [3, 7]

// console.log(solution(["XYZ", "XYZ", "XYZ"]))
// [1, 1]