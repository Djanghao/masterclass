# JavaScript

**Author:** Raz1ner
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/4514809/](https://leetcode.com/problems/tree-of-coprimes/solutions/4514809/)

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
```
let coprimes
function getCoprimes (nums, edges) {
  const n = nums.length
  coprimes = new Map()
  const values = new Set()
  for (const i of nums) { values.add(i) }
  for (const i of values) {
    for (const j of values) {
      if (gcd(i, j) == 1) {
        const cops = coprimes.get(i) || []
        cops.push(j)
        coprimes.set(i, cops)
      }
    }
  }
  const adj = new Array(n)
  for (let i = 0; i < n; i++) {
    adj[i] = []
  }
  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }
  const res = new Array(n)
  res.fill(-1)
  const ancestors = new Map()
  dfs(0, -1, 0, nums, adj, ancestors, res)
  return res
}
function dfs (i, parent, level, nums, adj, ancestors, res) {
  let maxLevel = -1
  for (const cop of coprimes.get(nums[i]) || []) {
    if (ancestors.has(cop)) {
      const ancestor = ancestors.get(cop)
      if (ancestor[0] > maxLevel) {
        maxLevel = ancestor[0]
        res[i] = ancestor[1]
      }
    }
  }
  const ancestorsCopy = new Map(ancestors)
  ancestorsCopy.set(nums[i], [level, i])
  for (const nei of adj[i]) {
    if (nei != parent) {
      dfs(nei, i, level + 1, nums, adj, ancestorsCopy, res)
    }
  }
}
function gcd (a, b) {
  if (b == 0) { return a }
  return gcd(b, a % b)
}

```