// https://programmers.co.kr/learn/courses/30/lessons/67256
// 1

/* 나의 해결법 */
// function solution(numbers, hand) {
//     var left = 10, right = 12;
//     const useLeft = n => { left = n; return 'L'; }
//     const useRight = n => { right = n; return 'R'; }

//     const getDist = (d) => {
//         switch (d > 0 ? d : -d) {
//             case 0: return 0;
//             case 1: case 3: return 1;
//             case 2: case 4: case 6: return 2;
//             case 5: case 7: case 9: return 3;
//             case 8: case 10: return 4;
//         }
//     }

//     return numbers.map(n => {
//         switch (n) {
//             case 1: case 4: case 7:
//                 return useLeft(n);
//             case 3: case 6: case 9:
//                 return useRight(n);
//             default:
//                 n = n ? n : 11;
//                 const dis = getDist(left - n) - getDist(right - n);
//                 if (dis === 0)
//                     return hand === "right" ? useRight(n) : useLeft(n);

//                 return dis > 0 ? useRight(n) : useLeft(n);
//         }
//     }).join(``);
// }

/* 참고 해결법 */
function solution(numbers, hand) {
    var left = '*', right = '#';
    const useLeft = n => { left = n; return 'L'; }
    const useRight = n => { right = n; return 'R'; }
    const abs = n => n > 0 ? n : -n;
    const getDist = (from, [x, y]) => {
        return abs(keypad[from][0] - x) + abs(keypad[from][1] - y);
    }
    const keypad = {
        1: [0, 3], 2: [1, 3], 3: [2, 3],
        4: [0, 2], 5: [1, 2], 6: [2, 2],
        7: [0, 1], 8: [1, 1], 9: [2, 1],
        '*': [0, 0], 0: [1, 0], '#': [2, 0]
    }
    return numbers.map(n => {
        switch (n) {
            case 1: case 4: case 7: return useLeft(n);
            case 3: case 6: case 9: return useRight(n);
            default:
                const dist = getDist(left, keypad[n]) - getDist(right, keypad[n]);
                if (dist === 0)
                    return hand === "right" ? useRight(n) : useLeft(n);
                return dist > 0 ? useRight(n) : useLeft(n);
        }
    }).join(``);
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
// "LRLLLRLLRRL"