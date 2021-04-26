// https://programmers.co.kr/learn/courses/30/lessons/42842
// lv2

function solution(brown, yellow) {
    const size = brown + yellow;
    var row = 3;
    while(row <= Math.sqrt(size)){
        if(size % row === 0 && 2 * (size/row + row) - 4 === brown)
            break;
        row++;
    }
    return [size/row, row];
}

console.log(solution(10, 2));
// [4, 3]
console.log(solution(8, 1));
// [3, 3]
console.log(solution(24, 24));
// [8, 6]