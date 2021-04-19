// https://programmers.co.kr/learn/courses/30/lessons/67257
// stack, 후위연산

// const getPostfix = (expressionArr, priority) => {
//     const st = [], cal = [];
    
//     expressionArr.forEach(item => {
//         if (!isNaN(item)) 
//             return cal.push(Number(item));

//         while (st.length && priority[st[st.length - 1]] >= priority[item])
//             cal.push(st.pop());
//         st.push(item);
//     })
//     return cal.concat(st.reverse());
// }
// function solution(expression) {
//     const priors = [
//         { '+': 0, '-': 1, '*': 2 },
//         { '+': 0, '-': 2, '*': 1 },
//         { '+': 1, '-': 0, '*': 2 },
//         { '+': 2, '-': 0, '*': 1 },
//         { '+': 1, '-': 2, '*': 0 },
//         { '+': 2, '-': 1, '*': 0 },
//     ]
//     const calculate = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b
//     }
//     return Math.max(...priors.map(prior => {
//         const nums = [];
//         getPostfix(expression.split(/(\D)/), prior).forEach(v => {
//             if (!isNaN(v)) return nums.push(v);

//             const b = nums.pop();
//             const a = nums.pop();
//             nums.push(calculate[v](a, b));
//         })
//         return Math.abs(nums.pop());
//     }));
// }

function solution(expression) {
    const priors = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ]
    const calculate = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b
    }
    return Math.max(...priors.map(prior => {
        const arr = expression.split(/(\D)/);
        for (let op of prior) {
            while (arr.includes(op)) {
                const idx = arr.indexOf(op);
                const cal = arr.slice(idx - 1, idx + 2);
                const res = calculate[op](Number(cal[0]), Number(cal[2]));
                arr.splice(idx - 1, 3, res);
            }
        }
        return Math.abs(arr[0]);
    }))
}

console.log(solution("100-200*300-500+20"))
// 60420