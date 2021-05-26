function solution(s) {
    var i = 0;
    const replace110 = (v) => {
        if (!v.substring(i).includes("110") || v.length - 3 <= i)
            return ""

        const target = v.substring(0, i) + v.substring(i).replace("110", "");
        const filled = target + "11";
        if (target.length < 3) {
            i += 3;
            if (filled.substring(0, 3) >= "110")
                return "110" + target;
            else
                return target + "110";
        }

        while (i < target.length - 2) {
            if (filled.substring(i, i + 3) >= "110")
                return target.substring(0, i) + "110" + target.substring(i);
            i++;
        }
        return target + "110";
    }
    return s.map(v => {
        i = 0;
        while (true) {
            const ans = v;
            v = replace110(v, i);
            if (v === "")
                return ans;
            i++;
        }
    });
}