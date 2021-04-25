// https://programmers.co.kr/learn/courses/30/lessons/42885
// 정확성: 20.0 효율성: 10.0
function solutionFail1(people, limit) {
    var answer = 0;
    people = people.sort((a,b) => a-b).map(p => [p, 0]);
    people.forEach(([p, v], i) => {
        if (v) return;

        var nt = i + 1, target = i;

        while (nt < people.length && people[nt][0] + p <= limit) {
            if (!people[nt][1])
                target = nt;
            nt++;
        }
        if (target !== i)
            people[nt - 1][1] = 1;
        answer++;
    })
    return answer;
}

// 제일 작은 수와 제일 큰 수가 같이 갈 수 있으면 보내기
// ** 아주 중요 ** => JS에서는 기본적으로 [1,2,3,10] => [1,10,2,3] 이렇게 정렬된다 a-b sort 하자
function solution(people, limit) {
    people = people.sort((a,b) => a-b);
    var answer = 0, idx = 0;
    while(idx < people.length){
        // 없어도 무방
        // if(people[idx] > limit/2){
        //     answer += people.length - idx
        //     break;
        // }
        var target = people.length - 1;
        if (people[idx] + people[target] <= limit)
            idx++;
        people.pop();
        answer++;
    }
    return answer;
}




console.log(solution([70, 50, 80, 50], 100))
// 	3
console.log(solution([70, 50, 80], 100))
// 	3