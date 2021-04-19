// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const db = {}
    nums.forEach(n => db[n] = 1);

    return Math.min(Object.keys(db).length, nums.length / 2)
}

console.log(solution([3, 1, 2, 3]))
// 2;