# 1617. Count Subtrees With Max Distance Between Cities

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/4649799/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/4649799/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

```
var countSubgraphsForEachDiameter = function (n, edges) {
  const ad = Array.from({ length: n }, () => new Set());
  for (const [u, v] of edges) {
    ad[u - 1].add(v - 1);
    ad[v - 1].add(u - 1);
  }
  function getDepth_fromOneNodeToAllNodesInSubtree(U) {
    function dfs(u, visited) {
      if (!U.has(u)) return -Infinity;
      if (visited.has(u)) return -Infinity;
      visited.add(u);
      let d = 0;
      for (const v of ad[u]) {
        d = Math.max(d, 1 + dfs(v, visited));
      }
      return d;
    }
    if (!U.size) return -1;
    let max = -1;
    for (const u of U) {
      const visited = new Set();
      const d = dfs(u, visited);
      if (visited.size !== U.size) continue;
      max = Math.max(max, d);
    }
    return max;
  }
  const ans = Array(n - 1).fill(0);
  for (let i = 0; i < 1 << n; i++) {
    const subtree = new Set();
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) subtree.add(j);
    }
    const maxDepth = getDepth_fromOneNodeToAllNodesInSubtree(subtree);
    if (maxDepth > 0) ans[maxDepth - 1]++;
  }
  return ans;
};
```

---
