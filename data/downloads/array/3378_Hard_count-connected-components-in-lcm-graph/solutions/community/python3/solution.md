# 10 lines of code

**Author:** linqmafia
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6123621/](https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6123621/)

---

# Approach
Use a disjoint-set to connect each element to its multiples up to the threshold, then count the distinct components.

# Complexity
- Time complexity: $$O(n * log(n))$$

- Space complexity: $$O(n)$$

# Code
```python3 []
class Solution:
    def countComponents(self, A: List[int], k: int) -> int:
        ds = {}
        def find(u):
            ds.setdefault(u, u)
            if ds[u] != u:
                ds[u] = find(ds[u])
            return ds[u]
        for a in A:
            for b in range(a, k + 1, a):
                ds[find(a)] = find(b)
        return len({*map(find, A)})
```