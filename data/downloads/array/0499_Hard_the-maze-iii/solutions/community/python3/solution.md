# Python BFS with heap | clean code | easy to understand with explanations and comments

**Author:** sunbw0706
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/3317771/](https://leetcode.com/problems/the-maze-iii/solutions/3317771/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BFS is the best way to solve any questions asking for "shortest distance" of something, with the right modifications to the generic BFS template. For this one we just need to swap in a heap instead of regular queue to get the next points with the lowest current distance.

# Approach
<!-- Describe your approach to solving the problem. -->
Use a heap for the queue in regular BFS, ordering by the current distance (because we need the shortest path to hole) and the list of instructions (because we need the lexicographically minimum one).
Note that the ball doesn't need to _stop_ on the hole, it just need to _pass through_ it. So we can return when the ball has the (i, j) we are looking for. If the ball need to stop on the hole, we would need additional checks for the direction and wall.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
in the worst case we explore every point in the maze on all 4 directions. `log(m*n)` for heap operations. `O(1)` for set operations.
$$O(m * n * log(m * n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
the heap and the visited set are the only additional space we use. in the worst case, we store every point on maze in them, although that won't actually happen.
$$O(m * n)$$

# Code
```
class Solution:
    def findShortestWay(self, maze: List[List[int]], ball: List[int], hole: List[int]) -> str:
        directions = {
            'u': (-1, 0),
            'd': (1, 0),
            'l': (0, -1),
            'r': (0, 1)
        }
        m = len(maze)
        n = len(maze[0])

        visited = set()
        queue = []
        # obj in queue: (distance, instructions, i, j)
        heapq.heappush(queue, (0, '', ball[0], ball[1]))
        # obj in visited set: (last instruction, i, j)
        visited.add(('', ball[0], ball[1]))

        while queue:
            dist, inst, i, j = heapq.heappop(queue)
            if (i, j) == (hole[0], hole[1]):
                return inst

            if inst:
                # see if the ball is still moving from last instruction
                di, dj = directions[inst[-1]]
                ni, nj = i + di, j + dj
                if (0 <= ni < m) and (0 <= nj < n) and maze[ni][nj] == 0:
                    # we have to continue moving in current direction
                    heapq.heappush(queue, (dist + 1, inst, ni, nj))
                    continue

            for direction in directions:
                di, dj = directions[direction]
                ni, nj = i + di, j + dj
                if not ((0 <= ni < m) and (0 <= nj < n)):
                    continue
                if maze[ni][nj] == 1:
                    continue
                if (direction, ni, nj) in visited:
                    # no need to explore again if we have already visited the same point on the same moving direction
                    continue
                heapq.heappush(queue, (dist + 1, inst + direction, ni, nj))
                visited.add((direction, ni, nj))

        return 'impossible'
```

![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
