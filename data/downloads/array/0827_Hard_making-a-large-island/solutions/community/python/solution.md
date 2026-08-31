# Union Find

**Author:** GraceMeng
**Votes:** 13
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/1533620/](https://leetcode.com/problems/making-a-large-island/solutions/1533620/)

---

`1` in an island is like an element in a disjoint set; an island is like a disjoint set. So we may use Disjoint Set (a.k.a. Union Find) to model the problem first. For every `1` encountered in the grid, we perform a union operation with its adjacent `1`s.

After modeling the problem, for each `0`, we consider the result of "flipping" it to a `1` and calculate the size of the island that would result from this change. This involves checking the `0`'s four adjacent cells, identifying **distinct** islands adjacent to this cell, and summing their sizes (+1 for the "flipped" cell itself) to calculate the potential island size.

Time complexity: `O(n*n)`

Space complexity: `O(n*n)`


```
class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        n = len(grid)
        uf = UnionFind(n * n)
        dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def id(x, y):
            return x * n + y

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:  # union around
                    for dx, dy in dirs:
                        ni, nj = i + dx, j + dy
                        if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 1:
                            uf.union(id(ni, nj), id(i, j))
        
        max_sz = 0
        for i in range(n):
            for j in range(n):
                root = uf.find(id(i, j))
                max_sz = max(max_sz, uf.size[root])

        
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:
                    sz = 1  # Start with 1 for the flipped cell
                    root_set = set()  # Ensure distinct adjacent islands
                    for dx, dy in dirs:
                        ni, nj = i + dx, j + dy
                        if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 1:
                            root = uf.find(id(ni, nj))
                            if root not in root_set:
                                sz += uf.size[root]
                                root_set.add(root)
                        max_sz = max(max_sz, sz)
        return max_sz



class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, i):
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            if self.size[root_y] > self.size[root_x]:
                self.parent[root_x] = root_y
                self.size[root_y] += self.size[root_x]
            else:
                self.parent[root_y] = root_x
                self.size[root_x] += self.size[root_y]                

```