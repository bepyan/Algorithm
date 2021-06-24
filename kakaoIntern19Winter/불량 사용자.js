/// https://programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
    // 후보지 리스트
    const candi = banned_id.map(banned => user_id.filter(id => {
        if (banned.length !== id.length) return false;

        for (var i = 0; i < banned_id.length; i++)
            if (banned[i] !== '*' && banned[i] !== id[i])
                return false;

        return true
    }))

    const ansList = {};
    const choose = (idx = 0, choosed = []) => {
        if (idx === candi.length) {
            choosed.sort();
            ansList[choosed.join('')] = true;
            return
        }

        candi[idx].forEach(s => {
            if (!choosed.includes(s))
                choose(idx + 1, [...choosed, s])
        })
    }
    choose()
    return Object.keys(ansList).length;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]))
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]))
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]))