# Short JavaScript solution using DFS

**Author:** loctn
**Votes:** 7
**Link:** [https://leetcode.com/problems/kill-process/solutions/103184/](https://leetcode.com/problems/kill-process/solutions/103184/)

---

```
var killProcess = function(pid, ppid, kill) {
    const parents = {};
    for (let i = 0; i < ppid.length; i++) {
        parents[ppid[i]] = parents[ppid[i]] || [];
        parents[ppid[i]].push(pid[i]);
    }
    const res = [];
    dfs(parents, kill, res);
    return res;
};

function dfs(parents, kill, res) {
    res.push(kill);
    if (!parents[kill]) return;
    for (let pid of parents[kill]) {
        dfs(parents, pid, res);
    }
}
```