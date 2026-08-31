# [Python] O(MN), simple BFS with explanation

**Author:** yanrucheng
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/524828/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/524828/)

---

**Idea**
This is a typical BFS question on Graph. 
Essentially, we need to track `visited` nodes to eliminate duplicated exploration, which both affect correctness and efficiency.

**Complexity**
Time: `O(mn)`
Space: `O(mn)`

**Python 3, BFS**
```
class Solution:
    def minCost(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        arrow = [(0,1), (0,-1), (1,0), (-1,0)]            
        dp, costs = collections.deque([(0,0,0)]), {}
        
        while dp:
            nx, ny, cost = dp.popleft()
            while 0 <= nx < m and 0 <= ny < n and (nx, ny) not in costs:
                costs[nx, ny] = cost
                dp += [(nx+dx, ny+dy, cost+1) for dx, dy in arrow]
                dx, dy = arrow[grid[nx][ny]-1]
                nx, ny = nx+dx, ny+dy
                        
        return costs[m-1,n-1]   
```