# Python BFS easy understand

**Author:** JefferyZZY
**Votes:** 25
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/410408/](https://leetcode.com/problems/walls-and-gates/solutions/410408/)

---

```
	def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        if not rooms:
            return []
        r_size = len(rooms)
        c_size = len(rooms[0])
        q = collections.deque()
        for r in range(r_size):
            for c in range(c_size):
                if rooms[r][c] == 0:
                    q.append((r,c))
        dirs = [(-1,0),(0,-1),(1,0),(0,1)]
        while q:
            x, y = q.popleft()
            distance = rooms[x][y]+1
            for dx, dy in dirs:
                new_x, new_y = x+dx, y+dy
                if 0<=new_x<r_size and 0<=new_y<c_size and rooms[new_x][new_y] == 2147483647:
                    rooms[new_x][new_y] = distance
                    q.append((new_x, new_y))
        return rooms
```