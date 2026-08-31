# [Python3] A* - Simple

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/4919923/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/4919923/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minPushBox(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        for r in range(m):
            for c in range(n):
                if grid[r][c] == "T": target = (r, c)
                if grid[r][c] == "B": start_box = (r, c)
                if grid[r][c] == "S": start_person = (r, c)
        
        def heuristic(box: tuple) -> int:
            return abs(target[0] - box[0]) + abs(target[1] - box[1])
        
        def out_bounds(location: tuple) -> bool:
            r, c = location
            return not (0 <= r < m and 0 <= c < n and grid[r][c] != "#")
        
        pq = [(heuristic(start_box), 0, start_person, start_box)]
        visited = set()
        while pq:
            _, moves, person, box = heapq.heappop(pq)
            if box == target: return moves
            if (person, box) in visited: continue
            visited.add((person, box))
            for dr, dc in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
                new_person = (person[0] + dr, person[1] + dc)
                if out_bounds(new_person): continue
                if new_person == box:
                    new_box = (box[0] + dr, box[1] + dc)
                    if out_bounds(new_box): continue
                    heapq.heappush(pq, (heuristic(new_box) + moves + 1, moves + 1, new_person, new_box))
                else: heapq.heappush(pq, (heuristic(box) + moves, moves, new_person, box))
        return -1
```