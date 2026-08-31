# [Python3] Simple BFS - 2 Queues - No need Dijkstras At All

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3898314/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3898314/)

---

# Intuition
You see each second the flood will take the adjancent empty cell -> flooding by level -> sense of Breadth First Search for the flooding.
Shortest path for the move -> Breath First Search for move. No need for Dijkstras or 0-1 BFS since it is un-weighted graph so please ignore Dijkstras Solution.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
To maintain 2 BFS for move and flood we use 2 queue
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(M * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(M * N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minimumSeconds(self, land: List[List[str]]) -> int:
        m, n = len(land), len(land[0])
        flood = collections.deque()
        move = collections.deque()
        for i in range(m):
            for j in range(n):
                if land[i][j] == "S": move.append((i, j))
                if land[i][j] == "*": flood.append((i, j))
        dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        secs = 0
        while move:
            l1, l2 = len(flood), len(move)
            for _ in range(l1):
                x, y = flood.popleft()
                for dx, dy in dirs:
                    cx, cy = x + dx, y + dy
                    if 0 <= cx < m and 0 <= cy < n and land[cx][cy] == ".":
                        land[cx][cy] = "*"
                        flood.append((cx, cy))

            for _ in range(l2):
                x, y = move.popleft()
                if land[x][y] == "D": return secs
                for dx, dy in dirs:
                    cx, cy = x + dx, y + dy
                    if 0 <= cx < m and 0 <= cy < n and (land[cx][cy] == "." or land[cx][cy] == "D"):
                        if land[cx][cy] != "D": land[cx][cy] = "*"
                        move.append((cx, cy))
            secs += 1
        
        return -1
```