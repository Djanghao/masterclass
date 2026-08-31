# javascript graph dfs bfs

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1661338/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1661338/)

---

DFS: 885ms
```
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const mx = Math.max;

let g;
const maximumInvitations = (a) => {
    let n = a.length, res = 0, visit = new Set();
    g = initializeGraph(n);
    for (let i = 0; i < n; i++) g[a[i]].push(i);
    for (let i = 0; i < n; i++) { // case 1: no cycle, result is the sum
        res += i < a[i] || a[a[i]] != i ? 0 : dfs(i, a[i]) + dfs(a[i], i);
    }
    for (let i = 0; i < n; i++) { // case 2: has cycle, result is the length of the cycle
        let j = i;
        if (!visit.has(i)) {
            let m = new Map();
            for (let k = 0; !visit.has(j); k++) {
                visit.add(j);
                m.set(j, k);
                j = a[j];
            }
            let tmp = m.size - m.get(j) || 0;
            res = mx(res, tmp);
        }
    }
    return res;
};

const dfs = (i, j) => {
    let max = 0;
    for (const child of g[i]) {
        max = mx(max, child == j ? 0 : dfs(child, j));
    }
    return 1 + max;
};
```
BFS: 1100ms, recommend to use bfs
```
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const mx = Math.max;

const maximumInvitations = (a) => {
    let n = a.length, res = 0, visit = new Set(), g = initializeGraph(n), deg = Array(n).fill(0), dp = Array(n).fill(1);
    for (let i = 0; i < n; i++) g[a[i]].push(i); // generate graph
    for (let i = 0; i < n; i++) { // case 2: has cycle, result is the length of the cycle
        if (!visit.has(i)) {
            let t = [];
            let j = i;
            while (!visit.has(j)) {
                visit.add(j);
                t.push(j);
                j = a[j];
            }
            for (let k = 0; k < t.length; k++) {
                if (t[k] == j) res = mx(res, t.length - k);
            }
        }
    }
	// case 1: no cycle, result is the sum
    let q = [];
    for (let i = 0; i < n; i++) deg[a[i]]++; // prepare indegree, mock topological Sort process
    for (let i = 0; i < n; i++) { // all nodes with no incoming edges 
        if (deg[i] == 0) q.push(i);
    }
    while (q.length) { // start BFS
        let cur = q.shift();
        dp[a[cur]] = mx(dp[a[cur]], dp[cur] + 1);
		 // -- : remove an edge from cur to child, == 0 : child has no other incoming edges, add to q for next bfs
        if (--deg[a[cur]] == 0) q.push(a[cur]);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (a[a[i]] == i && a[i] > i) {
            sum += dp[i] + dp[a[i]];
        }
    }
    return mx(sum, res);
};
```