// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    var answer = 0;
    const st = [];
    const map = board.map(_ => []);
    board.forEach(b => {
        b.forEach((v, i) => {
            if (v !== 0)
                map[i].unshift(v)
        });
    })

    moves.forEach(m => {
        const peek = map[m - 1].pop();
        if (peek === undefined)
            return;

        if (peek === st[0]) {
            st.shift();
            answer += 2;
        }
        else
            st.unshift(peek);
    })
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));
//4