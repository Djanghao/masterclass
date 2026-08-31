# Python - Two sets + Direction

**Author:** burcel
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5178531/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5178531/)

---

# Code
```
class Solution:
    def numberOfCleanRooms(self, room: List[List[int]]) -> int:
        n, m = len(room), len(room[0])
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        visited, cleaned = set(), set()
        x, y, dir = 0, 0, 0
        while (x, y, dir) not in visited:
            visited.add((x, y, dir))
            cleaned.add((x, y))

            xx, yy = x + directions[dir][0], y + directions[dir][1]
            if 0 <= xx < n and 0 <= yy < m and room[xx][yy] != 1:
                x, y = xx, yy
            else:
                dir = (dir + 1) % 4

        return len(cleaned)
```