# [Python] Clean 0-1 BFS with Explanation - O(n * m)

**Author:** C0R3
**Votes:** 60
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/525854/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/525854/)

---

This problem is a basic shortest path problem. We need to reach ```(m - 1, n - 1)``` from ```(0, 0)``` using a path with minimum cost. Every field in the grid is reachable from any position including the target. Therefore the default algorithm of choice to solve the problem would be **Dijkstra's** with a time complexity of ```O(E + V log V)```.

If we look at the problem conditions we can notice that the edges between neighboring nodes are binary weighted: We can reach the neighbor of a node with a cost of 0 if the sign of the node points to the neighbor. Otherwise we need to modify the sign and the cost for that is 1.
That allows us to use the more efficient **0-1 BFS** algorithm that uses a double ended queue instead of a heap and has a time complexity of ```O(E + V)```:
- We always pop the node at the left of the queue.
- Neighbors with a cost of 0 have the same total cost as the current node. Therefore they are appended to the left of the queue.
- Neighbors with a cost of 1 have the maximum cost of all nodes in the queue. Therefore the are appended to the right of the queue.
- The maximum cost difference between the left-most and the right-most node in the queue is 1. Nodes with a higher cost difference will only be added to the queue when the first node with a difference of 1 is being visited. At that point all nodes with a difference of 0 have been processed. Therefore 1 is the new 0.

**Time complexity:**
```
V = n * m
E = 4 * V
O(E + V) = O(5 * V) = O(V) = O(n * m)
```
**Implementation:**
```python
from typing import Tuple, Iterator

class Solution:
    def minCost(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        # Iterate over the neighborhood of a position in the grid.
        # Only neighbors within the grid boundarys are yielded.
        # The cost to visit the neighbor is 0 if the current positions
        # sign points to the neighbor. Otherwise it is 1.
        def neighborhood(y: int, x: int) -> Iterator[Tuple[int, int, int]]:
            if x + 1 < n:
                yield y, x + 1, int(grid[y][x] != 1)
            if x > 0:
                yield y, x - 1, int(grid[y][x] != 2)
            if y + 1 < m:
                yield y + 1, x, int(grid[y][x] != 3)
            if y > 0:
                yield y - 1, x, int(grid[y][x] != 4)

        # The initial cost to visit a node is infinity.
        # Only the start node can be reached with a cost of 0.
        min_cost = collections.defaultdict(lambda: math.inf, {(0, 0): 0})
        queue = collections.deque([(0, 0, 0)])

        while queue:
            cost, y, x = queue.popleft()

            # We can skip queue entries if we have already found a more
            # efficient path to their position.
            if cost != min_cost[y, x]:
                continue

            # The target position has been found and we can return the cost.
            if y == m - 1 and x == n - 1:
                return cost

            # Visit the neighbors of the current position if the path over the
            # current node improves the minimum cost to reach them.
            for y2, x2, step_cost in neighborhood(y, x):
                if (cost2 := cost + step_cost) < min_cost[y2, x2]:
                    min_cost[y2, x2] = cost2

                    # Append a neighbor to the left of the queue if there is
                    # no additional step cost. Otherwise append the neighbor
                    # to the right.
                    if not step_cost:
                        queue.appendleft((cost2, y2, x2))
                    else:
                        queue.append((cost2, y2, x2))

        return 0
```