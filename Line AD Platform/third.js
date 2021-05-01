// https://hokeydokey.tistory.com/72
class Heap {
    constructor() {
        this.array = [];
        this.size = 0;
    }
    enqueue(item) {
        this.size += 1;

        let i = this.size; // 마지막 노드를 가리킨다.
        while (this.array[Math.floor(i / 2)] <= item && i != 1) {
            this.array[i] = this.array[Math.floor(i / 2)]
            i = Math.floor(i / 2);
        }
        this.array[i] = item;
    }
    dequeue() {
        let remove = this.array[1];
        let temp = this.array.pop();
        this.array[1] = temp;
        this.size--;

        let parent = 1;
        let childe = 2;

        while (childe <= this.size) {
            // 두 자식중 큰 노드와 부모노드랑 비교 
            if (this.array[childe] < this.array[childe + 1] && childe < this.size) {
                childe += 1;
            }

            if (temp >= this.array[childe]) break; // 만약 자식 노드와 비교해서 크다면 해당 반복문 멈춤 
            this.array[parent] = this.array[childe];
            parent = childe;
            childe *= 2;
        }
        this.array[parent] = temp;
        return remove;
    }
}


function solution(ads) {
    ads.sort((a, b) => a[0] - b[0] === 0 ? b[1] - a[1] : a[0] - b[0]);
    
    var answer = 0;
    var h = new Heap();
    var time = ads.shift()[0], waste = 0;

    while (true) {
        time += 5;
        answer += 5 * waste;
        while (ads.length && time >= ads[0][0]) {
            const [a, b] = ads.shift();
            h.enqueue(b);
            waste += b;
            answer += b * (time - a);
        }
        if (ads.length === 0)
            break;
        waste -= h.dequeue();
    }
    while (h.size) {
        waste -= h.dequeue();
        answer += waste * 5;
    }
    return answer;
}

console.log(solution([[1, 2], [3, 1], [6, 3]]))
// 8
console.log(solution([[1, 3], [3, 2], [5, 4]]))
// 20
console.log(solution([[0, 3], [5, 4]]))
// 0
console.log(solution([[0, 1], [0, 2], [6, 3], [8, 4]]))
// 40
console.log(solution([[5, 2], [2, 2], [6, 3], [9, 2]]))
// 33