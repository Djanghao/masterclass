# 96.8%

**Author:** Mobidikt
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/5959486/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/5959486/)

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
      const res1 = new Set(edges.map(([a,b])=>b))
  const res = [];
  for (let i = 0; i < n; i++) {
    if (!res1.has(i)) {
      res.push(i);
    }
  }

  return res;
};
```