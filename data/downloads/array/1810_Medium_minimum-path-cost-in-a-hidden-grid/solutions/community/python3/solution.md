# Python 3 | DFS + Dijkstra | Explanation

**Author:** idontknoooo
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1332485/](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1332485/)

---

### Explanation
- The code is long but the idea is simple:
	- We don't know what the hidden grid looks like, so we want to find it out
	- First, "draw the grid" using `DFS` (we are not really drawing it, see more details below)
	- Then find the lowest cost to `target` using `Dijkstra`
- Based on `hint` section, we can first do a `DFS` to:
	- Explore the hidden grid and save the `cost` for each location 
		- Assuming starting from index `(0, 0)` and trying to find & store all accessible locations
		- Indices for all other locations are relative offsets to the starting origin `(0, 0)`
	- See if we can get to `target` 
- Then, we can do a `Dijkstra` search to find the lowest cost to `target`
### Implementation
```
class Solution(object):
    def findShortestPath(self, master: 'GridMaster') -> int:
        opposite = {'D': 'U', 'U': 'D', 'L': 'R', 'R': 'L'}       # opposite direction to move back and force
        cost_dict = collections.defaultdict(lambda: sys.maxsize)  # save cost for each location (x, y)
        target = None                                             # this will be `target` index
        
        def dfs(cur, x, y):
            nonlocal target
            if cur.isTarget():                                    # if `target` found, save its index and return True
                target = x, y
                return True
            ans = False
            for di, (i, j) in zip(['D', 'U', 'L', 'R'], [(-1, 0), (1, 0), (0, -1), (0, 1)]): # explore 4 directions
                _x, _y = x+i, y+j
                if (_x, _y) in cost_dict: continue                # check if (_x, _y) is visited
                cost_dict[(_x, _y)] = sys.maxsize                 # mark (_x, _y) as visited
                if cur.canMove(di):
                    cost = cur.move(di)                           # move to direction `di`
                    cost_dict[(_x, _y)] = cost                    # save cost of (_x, _y)
                    ans |= dfs(cur, _x, _y)                       # `dfs`
                    cur.move(opposite[di])                        # move back
            return ans                    
        
        if not dfs(master, 0, 0): return -1                       # if can't reach to `target`, return -1
        
        heap = [(0, 0, 0)]                                        # starts from (0, 0) again. Parameters are (cost, x, y)
        while heap:                                               # Dijkstra starts here
            cost, x, y = heapq.heappop(heap)
            if (x, y) == target: return cost
            for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                _x, _y = x+i, y+j
                if (_x, _y) not in cost_dict: continue            # if location not in `cost_dict`, meaning it's not accessible
                heapq.heappush(heap, (cost+cost_dict[(_x, _y)], _x, _y))
                cost_dict[(_x, _y)] = sys.maxsize                 # mark as visited
        return -1
```