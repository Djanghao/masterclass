# [Python 3] Math - Simple

**Author:** dolong2110
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/3767872/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/3767872/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def numberOfNodes(self, n: int, queries: List[int]) -> int:
        flips = [0 for _ in range(n + 1)]
        nodes_with_ones = 0
        for q in queries: flips[q] += 1
        for i in range(1, n + 1): flips[i] += flips[i // 2]
        for i in range(1, n + 1): nodes_with_ones += flips[i] % 2

        return nodes_with_ones
```