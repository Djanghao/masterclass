# [Python] Elegant and fast A* search with explanation (32ms)

**Author:** C0R3
**Votes:** 26
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/452874/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/452874/)

---

[A* search](https://en.wikipedia.org/wiki/A*_search_algorithm) is often faster than a BFS like the [Lee algorithm](https://en.wikipedia.org/wiki/Lee_algorithm) because it prioritizes steps with the shortest estimated distance to the target. To accomplish that A* search requires a heuristic that returns a distance that is always lower than or equal to the optimal distance. For a problem like this (2D grid with neighbors at the top, right, bottom and left) the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) to the target can be used as such a heuristic as it always returns the minimum distance to the target without obstacles. Using a priority queue adds `log(n)` complexity per step compared to BFS, but the reduction in exploration steps usually makes up for it.

Positions may be visited if less than k + 1 obstacles have been eliminated on the way. They may also be revisited if they can be reached by eliminating less obstacles than before. A defaultdict with a default value of k + 1 elegantly handles those two requirements.

The overall runtime should be `O(m*n*k * log(m*n*k))`.
Space complexity should be `O(m*n*k)`.

```python
from heapq import heappush, heappop
from collections import defaultdict

class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])
        
        if m + n - 2 <= k:
            return m + n - 2
        
        manhattan_distance = lambda y, x: m + n - y - x - 2
        neighborhood = lambda y, x: [
            (y, x) for y, x in [(y - 1, x), (y, x + 1), (y + 1, x), (y, x - 1)]
            if 0 <= y < m and 0 <= x < n
        ]
        
        fringe_heap = [(manhattan_distance(0, 0), 0, 0, 0, 0)]
        min_eliminations = defaultdict(lambda: k + 1, {(0, 0): 0})
        
        while fringe_heap:
            estimation, steps, eliminations, y, x = heappop(fringe_heap)
            
            if estimation - steps <= k - eliminations:
                return estimation
            
            for y, x in neighborhood(y, x):
                next_eliminations = eliminations + grid[y][x]

                if next_eliminations < min_eliminations[(y, x)]:
                    heappush(fringe_heap, (steps + 1 + manhattan_distance(y, x), steps + 1, next_eliminations, y, x))
                    min_eliminations[(y, x)] = next_eliminations
        
        return -1
```