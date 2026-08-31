# TS, BFS(66ms)

**Author:** kkdd0757
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3961863/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3961863/)

---

# Complexity
![image.png](./images/0.png)


# Code
```
function minimumJumps(forbidden: number[], a: number, b: number, x: number): number{
    // for tracking(column -> 0: forward / 1: backward)
    const check = Array.from({length:2}, () => new Array(10001).fill(0));

    // check forbidden spot
    for(const danger of forbidden){
        check[1][danger] = 1;
        check[0][danger] = 1;
    }

    // check start point(0)
    check[1][0] = 1;
    check[0][0] = 1;
    const queue =[[0,0]];

    let answer = -1;
    let level = 0;
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const now = queue.shift();
            const dir = now[0];
            const move = now[1];

            if(move === x) return level;
            if(move + a < 2000+a+b && check[0][move+a] === 0) {
                check[0][move+a] = 1;
                queue.push([0, move+a]);
            }
            if(move-b >= 0 && dir === 0 && check[1][move-b] === 0) {
                check[1][move-b] = 1;
                queue.push([1, move-b]);
            } 
        }
        level++;
    }

    return answer;
};
```