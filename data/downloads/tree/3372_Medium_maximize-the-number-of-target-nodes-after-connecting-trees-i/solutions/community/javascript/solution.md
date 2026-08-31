# Javascript 🎉🎉🎉

**Author:** csathnere
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6098913/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6098913/)

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
```javascript []
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    const n = edges1.length + 1;
    const m = edges2.length + 1;

    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: m }, () => []);

    for (const [u, v] of edges1) {
      adj1[u].push(v);
      adj1[v].push(u);
    }
    for (const [u, v] of edges2) {
      adj2[u].push(v);
      adj2[v].push(u);
    } 
    const good1 = new Array(n).fill(0);
    const good2 = new Array(m).fill(0);

    const dfs = (node, parent, distance, root, k, good, adj) => {
      if (distance >= k) return;
      good[root]++;
      for (const neighbor of adj[node]) {
        if (neighbor !== parent) {
          dfs(neighbor, node, distance + 1, root, k, good, adj);
        }
      }
    };
    for (let i = 0; i < n; i++) {
      dfs(i, -1, 0, i, k + 1, good1, adj1);
    }

    for (let i = 0; i < m; i++) {
      dfs(i, -1, 0, i, k, good2, adj2);
    }

    const mx = Math.max(...good2);

    return good1.map(value => value + mx);

};
```