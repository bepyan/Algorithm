// https://programmers.co.kr/learn/courses/30/lessons/49189
// 

function solution(n, edge) {
    const graph = {}, dist = { 1: 0 };
    edge.forEach(([a, b]) => {
        graph[a] = graph[a] ? [...graph[a], b] : [b];
        graph[b] = graph[b] ? [...graph[b], a] : [a];
    })

    const q = [1];
    let nextDist;
    while (q.length) {
        const cur = q.shift();
        nextDist = dist[cur] + 1;
        graph[cur].filter(e => e !== 1 && !dist[e]).forEach(e => {
            dist[e] = nextDist;
            q.push(e);
        })
    }
    return Object.values(dist).filter(e => e === nextDist-1).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))
// 	3