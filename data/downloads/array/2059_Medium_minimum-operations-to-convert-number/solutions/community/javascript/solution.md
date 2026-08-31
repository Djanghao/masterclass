# javascript bfs 192ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1550214/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1550214/)

---

```
const minimumOperations = (a, x, y) => {
    let dis = Array(1001).fill(Number.MAX_SAFE_INTEGER);
    let q = [];
    q.push(x);
    dis[x] = 0;
    while (q.length) {
        let cur = q.shift();
        if (cur == y) return dis[cur];
        for (const e of a) {
            let t1 = cur + e, t2 = cur - e; t3 = cur ^ e;
            let next = [t1, t2, t3];
            for (const ne of next) {
                if (ne >= 0 && ne <= 1000) {
                    if (dis[ne] > dis[cur] + 1) { // bfs next node if smaller, and update current min distance 
                        dis[ne] = dis[cur] + 1;
                        q.push(ne);
                    }
                } else {
                    if (ne == y) return dis[cur] + 1; // reach the goal
                }
            }
        }
    }
    return -1;
};
```