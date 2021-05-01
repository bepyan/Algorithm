// O(N)이 되야한다..

function solution(array) {
    const len = array.length;
    return array.map((n, i) => {
        var j = 1;
        while (i + j < len || i - j >= 0) {
            if (i - j >= 0 && array[i - j] > n)
                return i - j;
            if (i + j < len && array[i + j] > n)
                return i + j;
            j++;
        }
        return -1;
    });
}

console.log(solution([3, 5, 4, 1, 2]))
// [1, -1, 1, 2, 2]