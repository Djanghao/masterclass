# [Python3] Union Find + Sieve Eratosthenes - Simple Solution

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/4781613/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/4781613/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(NlogN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class UnionFind:

    def __init__(self, n: int):
        self.root = list(range(n))
        self.rank = [1 for _ in range(n)]

    def find(self, x: int) -> int:
        if self.root[x] != x: self.root[x] = self.find(self.root[x])
        return self.root[x]

    def union(self, x: int, y: int) -> None:
        rootx, rooty = self.find(x), self.find(y)
        if rootx == rooty: return
        if self.rank[rootx] > self.rank[rooty]: self.root[rooty] = rootx
        elif self.rank[rootx] < self.rank[rooty]: self.root[rootx] = rooty
        else:
            self.root[rooty] = rootx
            self.rank[rootx] += 1

    def is_connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)


class Solution:
    def areConnected(self, n: int, threshold: int, queries: List[List[int]]) -> List[bool]:
        uf =  UnionFind(n + 1)
        for z in range(threshold + 1, n + 1):
            for x in range(z + z, n + 1, z): uf.union(z, x)

        return [uf.is_connected(x, y) for x, y in queries]

```