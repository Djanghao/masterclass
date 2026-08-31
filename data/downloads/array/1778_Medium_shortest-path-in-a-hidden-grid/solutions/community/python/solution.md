# Python 3 | DFS, BFS, Deque | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1334109/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1334109/)

---

### Expalantion
- Similar question: [1810. Minimum Path Cost in a Hidden Grid](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/)
- Based on `hint` section, do a DFS to explore the grid, then use BFS to find the shortest path
- `DFS`: Assuming that we are starting from `(0, 0)`, explore the grid, save the relative offset of other reachable positions (including `target`)
- `BFS`: Find the shortest path by visiting reachable locations stored by `DFS`
### Implementation
```
class Solution(object):
    def findShortestPath(self, master: 'GridMaster') -> int:
        opposite = {'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L'}
        reachable = set([(0, 0)])
        target = None
        def dfs(cur, x, y):                                       # dfs to explore the grid
            nonlocal target
            if cur.isTarget():
                target = x, y                                     # save `target` position
                return True
            ans = False
            for di, (i, j) in zip(['D', 'U', 'L', 'R'], [(-1, 0), (1, 0), (0, -1), (0, 1)]):
                _x, _y = x+i, y+j
                if (_x, _y) not in reachable and cur.canMove(di): # if not reachable and can move
                    cur.move(di)
                    reachable.add((_x, _y))                       # save position to `reachable`
                    ans |= dfs(cur, _x, _y)                       # dfs on next position
                    cur.move(opposite[di])                        # move back to position before dfs
            return ans                    
        
        if not dfs(master, 0, 0): return -1
        
        dq = collections.deque([(0, 0, 0)])                       # starting BFS here
        while dq:
            step, x, y = dq.popleft()
            if (x, y) == target: return step
            for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                _x, _y = x+i, y+j
                if (_x, _y) not in reachable: continue            # only continue BFS on reachable neighbors
                dq.append((step+1, _x, _y))                       # BFS at neighbor positions
                reachable.remove((_x, _y))                        # remove from `reachable` once used to avoid repeats
        return -1
```