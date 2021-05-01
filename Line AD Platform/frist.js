function solution(inputString) {
    const open = { '(': ')', '{': '}', '[': ']', '<': '>' };
    const close = { ')': '(', '}': '{', ']': '[', '>': '<' };
    const st = [];
    var cnt = 0;

    for (var i = 0; i < inputString.length; i++) {
        const s = inputString[i];
        if(open[s]){
            st.push(s);
        } else if (close[s]) {
            // 닫는게 먼저 나오면 그 인덱스
            if(st.length === 0)
                return -i;

            // 짝이 맞지 않는 경우
            if (st.pop() !== close[s]){
                return -i;
            }

            cnt++;
        }
    }

    return st.length ? -(inputString.length - 1) : cnt;
}

console.log(solution("line [({<plus>)}]"))
// -14