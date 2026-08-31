# [Python3] - Union Find - Clean, easy to understand solution

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/3188597/](https://leetcode.com/problems/number-of-islands-ii/solutions/3188597/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m * n + l)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m * n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class UnionFind:

    # O(m * n), O(m * n)
    def __init__(self, size: int) -> None:
        self.rank, self.parent = [0 for _ in range(size)], [-1 for _ in range(size)]
        self.cnt = 0
        self.size = size

    # O(1), O(1)
    def add_land(self, x: int) -> None:
        if self.parent[x] >= 0:
            return
        self.parent[x] = x
        self.cnt += 1
    
    # O(1), O(1)
    def is_land(self, x: int) -> bool:
        if self.parent[x] >= 0:
            return True
        return False

    # O(1), O(1)
    def number_of_island(self) -> int:
        return self.cnt

    # O(1), O(1)
    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    # O(1), O(1)
    def union(self, x: int, y: int) -> None:
        x_set, y_set = self.find(x), self.find(y)
        if x_set != y_set:
            if self.rank[x_set] < self.rank[y_set]:
                self.parent[x_set] = y_set
            elif self.rank[x_set] > self.rank[y_set]:
                self.parent[y_set] = x_set
            else:
                self.parent[y_set] = x_set
                self.rank[x_set] += 1
            self.cnt -= 1
    

class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        uf = UnionFind(m * n) # O(m * n), O(m * n)
        ans = []

        for x, y in positions: # O(l), O(1)
            land_position = x * n + y
            uf.add_land(land_position) # O(1), O(1)

            for d_x, d_y in direction: # O(1), O(1)
                n_x, n_y = x + d_x, y + d_y
                n_position = n_x * n + n_y
                if n_x >= 0 and n_x < m and n_y >= 0 and n_y < n and uf.is_land(n_position):
                    uf.union(land_position, n_position) # O(1), O(1)
            ans.append(uf.number_of_island())
        
        return ans

    # O(m * n + l), O(m * n)
```