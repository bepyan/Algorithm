// https://programmers.co.kr/learn/courses/30/lessons/42895
// lv3

function solution(N, number) {
    // N을 1 ~ 8번 사용해서 만드는 수로 만든 SET
    const nums = [...Array(9)].map(_ => new Set())
    for (var v = 1; v <= 8; v++) {
        // 이어 붙여서 만드는 경우
        nums[v].add(parseInt(`${N}`.repeat(v)));

        // 모든 조합 경우의 수 (1번 사용 +-*/ 3번set => 총 4번 사용)
        for (var i = 1; i < v; i++) {
            for (var a of nums[i].keys())
                for (var b of nums[v - i].keys()) {
                    nums[v].add(a + b);
                    nums[v].add(a - b);
                    nums[v].add(a * b);
                    nums[v].add(parseInt(a / b));
                }
        }
        if (nums[v].has(number)) return v;
    }
    return -1;
}

console.log(solution(5, 12))
// 4
console.log(solution(2, 11))
// 3
