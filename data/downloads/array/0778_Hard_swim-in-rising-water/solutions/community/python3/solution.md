# 3 clean solutions: binary search + DFS | DJS | Dijkstra

**Author:** TigProg
**Votes:** 7
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/4058201/](https://leetcode.com/problems/swim-in-rising-water/solutions/4058201/)

---

# Complexity

### 1. Binary search + DFS

- Time complexity: $O(n \\cdot m \\cdot log(max(grid) - min(grid)))$

- Space complexity: $O(n \\cdot m)$

- Approximate time: 98 ms

### 2. DJS

- Time complexity: $O(n \\cdot m \\cdot \\alpha(n \\cdot m))$
where $\\alpha(n)$ is inverse Ackermann function ([wiki](https://en.wikipedia.org/wiki/Ackermann_function#Inverse))
**UPD**: Time complexity: $O(n \\cdot m \\cdot log(n \\cdot m))$ because of sorting

- Space complexity: $O(n \\cdot m)$

- Approximate time: 135 ms

### 3. Dijkstra

- Time complexity: $O(n \\cdot m \\cdot log(n \\cdot m))$

- Space complexity: $O(n \\cdot m)$

- Approximate time: 90 ms


# Code

### 1. Binary search + DFS

``` python3 []
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])

        if n == m == 1:
            return grid[0][0]
        
        def get_nexts(i, j, visited):
            for x, y in ((i - 1, j),
                         (i + 1, j),
                         (i, j - 1),
                         (i, j + 1)):
                if (
                    0 <= x < n
                    and 0 <= y < m
                    and (x, y) not in visited
                ):
                    yield (x, y)

        def check(value):
            q = [(0, 0)]
            visited = {(0, 0)}
            while q:
                i, j = q.pop()
                for x, y in get_nexts(i, j, visited):
                    if grid[x][y] > value:
                        continue
                    if x == n - 1 and y == m - 1:
                        return True
                    q.append((x, y))
                    visited.add((x, y))
            return False
        
        left = max(grid[0][0], grid[-1][-1])
        right = max(max(line) for line in grid)

        if check(left):
            return left
        
        while right - left > 1:
            middle = (left + right) // 2
            if check(middle):
                right = middle
            else:
                left = middle
        
        return right
```

### 2. DJS

``` python3 []
class DJS:
    def __init__(self, n, m):
        self._d = {
            (i, j): (i, j)
            for i in range(n)
            for j in range(m)
        }
    
    def find(self, a):
        aa = self._d[a]
        if a != aa:
            self._d[a] = self.find(aa)
        return self._d[a]
    
    def union(self, a, b):
        aa = self.find(a)
        bb = self.find(b)
        if aa != bb:
            self._d[aa] = bb

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])

        if n == m == 1:
            return grid[0][0]
        
        q = []
        for i, line in enumerate(grid):
            q.extend(
                (elem, i, j)
                for j, elem in enumerate(line)
            )
        q.sort()

        djs = DJS(n, m)
        start = (0, 0)
        finish = (n - 1, m - 1)

        for dist, i, j in q:
            for x, y in ((i - 1, j),
                         (i + 1, j),
                         (i, j - 1),
                         (i, j + 1)):
                if (
                    0 <= x < n
                    and 0 <= y < m
                    and grid[x][y] <= dist
                ):
                    djs.union((i, j), (x, y))
                    if djs.find(start) == djs.find(finish):
                        return dist
```

### 3. Dijkstra

``` python3 []
import heapq

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])

        if n == m == 1:
            return grid[0][0]
        
        dist = max(grid[0][0], grid[-1][-1])
        h = [(dist, 0, 0)]
        in_progress = {(0, 0)}

        while h:
            current_dist, i, j = heapq.heappop(h)
            dist = max(dist, current_dist)

            if i == n - 1 and j == m - 1:
                return dist
            
            for x, y in ((i - 1, j), 
                         (i + 1, j),
                         (i, j - 1),
                         (i, j + 1)):
                if (
                    0 <= x < n 
                    and 0 <= y < m 
                    and (x, y) not in in_progress
                ):
                    heapq.heappush(h, (grid[x][y], x, y))
                    in_progress.add((x, y))
```

Also you can see a similar problem ([1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/description/)) and [my solution](https://leetcode.com/problems/path-with-minimum-effort/solutions/4049656/3-solutions-binary-search-dfs-djs-dijkstra/).

#### If you found this useful or interesting, please upvote!