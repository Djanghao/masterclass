# Python BFS + DFS easy and efficient solution with explanation

**Author:** runtime-terror
**Votes:** 12
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/2033952/](https://leetcode.com/problems/shortest-bridge/solutions/2033952/)

---

**As given in question , there are only two islands in given grid. so what we can do is just find the min distance of one island from other by changing the values of any one island from 1 to $ (we can use anything  except 0 and 1) using dfs function and appending those indices to queue. The motive of doing this is that we'll use bfs to search for 1(other island) and will return it's distance.**

```
class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        def dfs(r, c) :
            if grid[r][c] == 1 :
                q.append((r, c, 0))
                grid[r][c] = '$'
                if r-1 >= 0 : dfs(r-1, c)
                if r+1 < len(grid) : dfs(r+1, c)
                if c-1 >= 0 : dfs(r, c-1)
                if c+1 < len(grid) : dfs(r, c+1)
        
        def bfs(q) :
            seen = set()
            while q :
                i, j, d = q.popleft()
                if grid[i][j] == 1 :
                    return d
                else :
                    for x, y in ((i-1, j), (i, j-1), (i+1, j), (i, j+1)) :
                        if 0 <= x < len(grid) and 0 <= y < len(grid[0]) : 
                            if (x, y) not in seen :
                                seen.add((x, y))
                                q.append((x, y, d+1))
        
        q = deque()
        flag = False
        for i in range(len(grid)) :
            for j in range(len(grid[0])) :
                if grid[i][j] == 1 :
                    dfs(i, j)
                    flag = True
                    break
            if flag :
                break
        
        return bfs(q) - 1
```

**Feel free to ask any question ...
Pls do upvote , if it helps even a bit :-)**