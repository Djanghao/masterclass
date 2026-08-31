# Typescript - dfs  -> adj list and l1 + l2

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3051054/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3051054/)

---

# Code
```
function longestPath(parent: number[], s: string): number {
  const adj = parent.reduce((adjList, parent, node) => {
    if (parent < 0) return adjList;
    adjList[parent].push(node);
    return adjList;
  }, new Array(parent.length).fill(0).map(() => []));

    let ans: number = 1;
    const dfs = (node: number) => {
        let l1 = 0, l2 = 0;
        for (let child of adj[node]) {
            const length = dfs(child);
            if (s[child] !== s[node]) {
                if (length > l1) {
                    l2 = l1;
                    l1 = length;
                } else if (length > l2) {
                    l2 = length;
                }
            }
        }

        ans = Math.max(ans, l1 + l2 + 1);
        return l1 + 1;
    }

    dfs(0);
    return ans;
};
```