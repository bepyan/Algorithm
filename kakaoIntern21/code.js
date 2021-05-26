function solution(n, k, cmd) {
    const arr = [...Array(n)].map((_, i) => "O");
    const st = [];
    var idx = k;
    cmd.forEach(s => {
        const [code, num] = s.split(" ");
        if (code === "D") {
            var cnt = Number(num);
            while (cnt > 0) {
                idx++;
                if (arr[idx] === "O")
                    cnt--;
            }
        } else if (code === "U") {
            var cnt = Number(num);
            while (cnt > 0) {
                idx--;
                if (arr[idx] === "O")
                    cnt--;
            }
        } else if (code === "C") {
            st.push(idx);
            arr[idx] = "X";
            const tmp = idx;
            while (idx < n && arr[idx] === "X")
                idx++;
            if (idx === n) {
                idx = tmp;
                while (arr[idx] === "X")
                    idx--;
            }
        } else if (code === "Z") {
            arr[st.pop()] = "O";
        }
    })
    return arr.join("");
}



function solution(k, num, links) {

    var leader = num.map((_, i) => i);

    const alterLeader = (i, leaders, newLeader) => {
        const q = [i];
        const newLeaders = leaders.map(v => v);
        while (q.length > 0) {
            const cur = q.shift();
            if (cur !== -1) {
                newLeaders[cur] = newLeader;
                q.push(...links[cur]);
            }
        }
        return newLeaders;
    }
    links.forEach(([l, r], i) => {
        leader = alterLeader(l, leader, i);
        leader = alterLeader(r, leader, i);
    })

    const getRes = (leaders) => {
        const res = {};
        for (var i = 0; i < leaders.length; i++) {
            if (res[leaders[i]] === undefined)
                res[leaders[i]] = num[i];
            else
                res[leaders[i]] += num[i]
        }
        var max = 0;
        for (var key in res)
            max = Math.max(max, res[key]);
        return max;
    }

    var ans = 100000;
    const dfs = (i, cnt, leaders) => {
        if (cnt === 0) {
            ans = Math.min(getRes(leaders), ans);
            return;
        }
        if (cnt < 0 || i === -1)
            return;

        const [l, r] = links[i];
        dfs(l, cnt, leaders);
        dfs(r, cnt, leaders);

        if (l !== -1) {
            const cutLeft = alterLeader(l, leaders, l);
            console.log("cutLeft", cnt, leaders, cutLeft)
            dfs(l, cnt - 1, cutLeft)
            dfs(r, cnt - 1, cutLeft)
        }

        if (r !== -1) {
            const cutRight = alterLeader(r, leaders, r);
            console.log("cutRight", cnt, leaders, cutRight)
            dfs(l, cnt - 1, cutRight);
            dfs(r, cnt - 1, cutRight);
        }

        if (l !== -1 && r !== -1) {
            const cutBoth = alterLeader(r, alterLeader(l, leaders, l), r);
            console.log("cutBoth", cnt, leaders, cutBoth)
            dfs(l, cnt - 2, cutBoth);
            dfs(r, cnt - 2, cutBoth);
        }
    }
    dfs(leader[0], k - 1, leader)

    return ans;
}