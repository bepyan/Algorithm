// https://programmers.co.kr/learn/courses/30/lessons/42578
// 해시 + 순열 조합 (수학적 계산)

// 틀린코드
// 모든 경우의 수를 순회하면 시간초과가 난다.
// 수학적인 계산이 필요하다.

// let ans = 0;
// const dfs = (nums, selectNum, target, arr = []) => {
//     if (selectNum === target) {
//         ans += arr.reduce((ac, v) => ac * v, 1);
//         return;
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         arr.push(nums[i]);
//         dfs(nums.slice(i + 1), selectNum + 1, target, arr);
//         arr.pop();
//     }
// };

function solution(clothes) {
    const db = {};
    clothes.forEach(item => {
        if (db[item[1]] === undefined)
            db[item[1]] = [];

        db[item[1]].push(item[0])
    })

    const arr = Object.keys(db).map(item => db[item].length);

    // 틀린 코드
    // for (var i = 1; i <= arr.length; i++) {
    //     // 의상종류의 조합을 순회한다.
    //     dfs(arr, 0, i);
    // }
    // return ans;
    
    return arr.reduce((ac, v) => ac * (v+1), 1) - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))
// 5