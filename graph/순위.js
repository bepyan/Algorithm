// https://programmers.co.kr/learn/courses/30/lessons/49191
// lv3 플로이드 와샬
// https://www.acmicpc.net/problem/2458

// function solution(n, results) {
//     const battle = [...Array(n)].map(_ => Array(n).fill(0));
//     const rankList = [...Array(n)].map(_ => [...Array(n)].map((__, i) => i + 1));
//     const rank = Array(n).fill(0);

//     results.forEach(([a, b]) => {
//         // 랭크 후보에서 제거하는 방식
//         rankList[a - 1].pop();
//         rankList[b - 1].shift();
//         // 해당 친구에게 승리 1, 패배 2를 담는 그래프
//         battle[a - 1][b - 1] = 1;
//         battle[b - 1][a - 1] = 2;
//     })

//     while (rankList.some(v => v.length === 1))
//         rankList.forEach((cand, i) => {
//             if (cand.length === 1) {
//                 rank[i] = cand.pop();
//                 // 해당 선수가 결전한 친구들 랭크후보 최신화
//                 battle[i].forEach((winlose, j) => {
//                     if (winlose === 1)
//                         while (rankList[j].shift() < rank[i]);
//                     if (winlose === 2)
//                         while (rankList[j].pop() > rank[i]);
//                 });
//             }
//         });
//     return rank.reduce((ac, v) => ac + (v ? 1 : 0), 0);
// }
// 합계: 20.0 / 100.0

// function solution(n, results) {
//     const battle = [...Array(n + 1)].map(_ => new Set());

//     results.forEach(([a, b]) => battle[a].add(b));
//     // a win b, b win c => a win c
//     for (var i = 1; i <= n; i++) {
//         const q = [...battle[i]];
//         while(q.length){
//             const cur = q.shift();
//             [...battle[cur]].forEach(v => q.push(v));
//             battle[i].add(cur);
//         }
//     }
//     var ans = 0;
//     for (var i = 1; i <= n; i++) {
//         const lose = battle.reduce((ac, v) => ac + (v.has(i) ? 1 : 0), 0);
//         if (battle[i].size + lose === n - 1)
//             ans++;
//     }
//     return ans;
// }
// 합계: 40.0 / 100.0 시간초과

function solution(n, results) {
    const battle = [...Array(n + 1)].map(_ => Array(n + 1).fill(false));

    results.forEach(([a, b]) => battle[a][b] = true);
    // a win b, b win c => a win c
    for (var i = 1; i <= n; i++)
        for (var j = 1; j <= n; j++)
            for (var k = 1; k <= n; k++)
                if (battle[j][i] && battle[i][k])
                    battle[j][k] = true;

    var ans = 0;
    for (var i = 1; i <= n; i++){
        var cnt = 0;
        for(var j = 1; j <= n; j++)
            if(battle[i][j] || battle[j][i])
                cnt++;
        if(cnt === n-1)
            ans++;
    }
    return ans;
}


console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))
// 2

console.log(solution(4, [[1, 2], [2, 3], [1, 4]]))
// 1