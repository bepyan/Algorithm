// https://programmers.co.kr/learn/courses/30/lessons/42883
// lv2 greedy

// function solution(number, k) {
//     const len = number.length;
//     var ans = "";

//     for (var i = 0; i < len; i++) {
//         const target = number.substring(i + 1, i + 1 + k).split("");
//         if (target.some(t => number[i] < t))
//             k--;
//         else
//             ans += number[i];
//     }
//     return k ? ans.substring(0, ans.length - k) : ans;
// }

// function solution(number, k) {
//     const len = number.length;
//     var ans = "";

//     for (var i = 0; i < len - k;) {
//         const target = number.substring(i, i + 1 + k);
//         var max = '0', maxi = 0;
//         for (var j = 0; j < target.length; j++)
//             if (target[j] > max) {
//                 max = target[j];
//                 maxi = j;
//             }
//         ans += target[maxi];
//         k -= maxi;
//         i += maxi + 1;
//     }
//     return ans;
// }

function solution(number, k) {
    const st = [], ans = [];
    for (var i = 0; i < number.length; i++) {
        const n = number[i];
        while (n > ans[ans.length - 1] && st.length < k)
            st.push(ans.pop());

        ans.push(n);
        if (st.length === k)
            while (++i < number.length)
                ans.push(number[i])
    }
    while (st.length < k)
        st.push(ans.pop());
    return ans.join('');
}

console.log(solution("1924", 2))
// 94
console.log(solution("1231234", 3))
// 3234
console.log(solution("4177252841", 4))
// 775841
console.log(solution("22211", 2))
// 222