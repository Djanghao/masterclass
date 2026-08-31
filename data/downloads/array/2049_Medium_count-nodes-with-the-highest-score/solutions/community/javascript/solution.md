# javascript dfs 372ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537725/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537725/)

---

```
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

let g, n, res, cnt;
const countHighestScoreNodes = (parents) => {
    res = -1, cnt = 0, n = parents.length, g = initializeGraph(n);
    for (let i = 0; i < n; i++) {
        if (parents[i] == -1) continue;
        g[parents[i]].push(i);
    }
    dfs(0);
    return cnt;
};

const dfs = (x) => {
    let subtree = 0, p = 1;
    for (const child of g[x]) {
        let tmp = dfs(child);
        subtree += tmp;
        p *= tmp;
    }
    if (subtree < n - 1) p *= n - 1 - subtree;
    if (p > res) { // larger score comes, update res and reset cnt = 1
        res = p;
        cnt = 1;
    } else if (p == res) { // equal largest score
        cnt++;
    }
    return subtree + 1;
};
```