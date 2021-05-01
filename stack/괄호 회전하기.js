// https://programmers.co.kr/learn/courses/30/lessons/76502
// 월간 챌린지 시즌 2

const flag = { '[': ']', '(': ')', '{': '}' };
const isValid = (s) => {
    const st = [];
    for (var i = 0; i < s.length; i++) {
        if (flag[s[i]])
            st.push(flag[s[i]]);
        else if (st.pop() !== s[i])
            return false;
    }
    return st.length === 0;
}

function solution(s) {
    if (s.length % 2)
        return 0;

    var answer = 0;
    for (var i = 0; i < s.length; i++) {
        if (isValid(s))
            answer++;
        s = s.substring(1) + s[0];
    }
    return answer;
}

console.log(solution("[](){}"));
// 3
console.log(solution("}]()[{"));
// 2
console.log(solution("[)(]"));
// 0