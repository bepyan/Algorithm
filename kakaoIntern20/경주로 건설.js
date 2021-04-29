// https://programmers.co.kr/learn/courses/30/lessons/67259
// 4번 완전탐색 미로찾기

// const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
// function solution1(board) {
//     // x, y, 이전 방향 0:제자리, 1:횡이동, 2:종이동
//     const q = [[0, 0, 0]];
//     while (q.length) {
//         const [x, y, prev] = q.shift();

//         dir.forEach(([i, j]) => {
//             const [nx, ny] = [x + i, y + j];

//             if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length && board[nx][ny] !== 1) {
//                 const isCurve = i === 0 ? prev === 1 : prev === 2;
//                 const nc = board[x][y] + (isCurve ? 600 : 100);

//                 if (board[nx][ny] > 1 && board[nx][ny] < nc)
//                     return;

//                 board[nx][ny] = nc;
//                 q.push([nx, ny, i === 0 ? 2 : 1]);
//             }
//         })
//     }
//     return board[board.length - 1][board.length - 1];
// }
// 합계: 60.9 / 100.0
// 문제점: 다음 타겟까지의 최소 거리를 구했으나 그 다음에 코너를 돌지 아니면 직진을할지에 따라서 최솟값이 달라진다!

// const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
// function solution(board) {
//     // [종으로 이동한 비용, 횡으로 이동한 비용]
//     const costs = board.map(v => v.map(_ => [0, 0]));
//     const N = board.length
//     // x, y, 이전 방향 0:제자리, 1:횡이동, 2:종이동
//     const q = [[0,0,0]];
//     while(q.length){
//         const [x, y, prev] = q.shift();

//         dir.forEach(([i, j]) => {
//             const [nx, ny] = [x + i, y + j];

//             if (0 > nx || nx >= N || 0 > ny || ny >= N || board[nx][ny]) return;

//             const isColMove = i === 0;
//             const isCurve = isColMove ? prev === 1 : prev === 2;
//             const nextCost = (isColMove === isCurve ? costs[x][y][0] : costs[x][y][1]) + (isCurve ? 600 : 100);

//             const target = isColMove ? costs[nx][ny][1] : costs[nx][ny][0];
//             if (target > 0 && target < nextCost)
//                 return;

//             if (isColMove)
//                 costs[nx][ny][1] = nextCost;
//             else
//                 costs[nx][ny][0] = nextCost;

//             q.push([nx, ny, isColMove ? 2 : 1]);
//         })
//     }
//     return Math.min(...costs[N - 1][N - 1].filter(v => v > 0));
// }
// 합계: 95.7 / 100.0
// 테스트11 시간 초과;;

function solution(board) {
    const N = board.length
    // 우 하 좌 상
    const direction = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    // x, y, 방향인덱스, cost
    const q = [[0, 0, null, 0]];
    while (q.length) {
        const [x, y, dir, cost] = q.shift();

        if (board[x][y] < cost && board[x][y] > 0) continue;
        board[x][y] = cost;

        direction.forEach(([i, j], ndir) => {
            // 반대 방향은 가지 않는다.
            if (dir !== null && Math.abs(ndir - dir) === 2) return;

            const [nx, ny] = [x + i, y + j];
            if (0 <= nx && nx < N && 0 <= ny && ny < N && board[nx][ny] !== 1)
                q.push([nx, ny, ndir, dir !== null && dir !== ndir ? cost + 600 : cost + 100]);
        })
    }
    return board[N - 1][N - 1];
}

console.log(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]]))
//900
console.log(solution([[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]]))
// //3800
console.log(solution([[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]))
//2100
console.log(solution([[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0]]))
//3200
console.log(solution([].concat(...new Array(25)).map(_ => new Array(25).fill(0))))
