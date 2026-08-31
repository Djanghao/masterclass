# Solution in both BFS and DFS

**Author:** Sajal_
**Votes:** 0
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/5419100/](https://leetcode.com/problems/keys-and-rooms/solutions/5419100/)

---

**BFS**
```
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)
        visited[0] = True
        queue = [0]
        while queue:
            vertex = queue.pop(0)
            for i in rooms[vertex]:
                if not visited[i]:
                    visited[i] = True
                    queue.append(i)
        return all(visited)

            
```

**DFS**
```
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)
        visited[0] = True
        stack = [0]
        while stack:
            vertex = stack.pop()
            for i in rooms[vertex]:
                if not visited[i]:
                    visited[i] = True
                    stack.append(i)
        return all(visited)
```