# Python Straightforward Solution

**Author:** infinute
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/277041/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/277041/)

---

This shouldn't be a hard problem. You just need some patience.
The idea is simple. 
1. Just like in the [sister problem](https://leetcode.com/problems/number-of-distinct-islands/), we need to record the trajectories of each DFS. 
2. In the sister problem, two islands are considered to be distinct if the two trajectories are different. In this problem, if one traj can be obtained by translating, flipping or rotating the other, they are still considered to be NOT distinct. 
3. So what we do is to first flip `path` horizontally to get `hon_path`, and flip `path` vertically to get  `ver_path`.
4. Then rotate `path, hon_path, ver_path` to check if they already exist.
5. One import thing is to `sort` and `normalize` the paths, as two same trajs may have different offsets and ordering of the visited positions.
```
class Solution:
    def numDistinctIslands2(self, grid: List[List[int]]) -> int:
        def dfs(x, y):
            grid[x][y] = 0
            path.append((x, y))
            for dx, dy in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                if 0 <= x + dx < len(grid) and 0 <= y + dy < len(grid[0]) and grid[x + dx][y + dy]:
                    dfs(x + dx, y + dy)
        
        def normalize(path):
            return [(x - path[0][0], y - path[0][1]) for x, y in path]
        
        def rotate_valid(path):
            for i in range(3):
                path = normalize(sorted([(y, -x) for x, y in path]))
                if tuple(path) in res: return False
            return True
        
        def allvalid(path):
            if tuple(path) in res or not rotate_valid(path): return False
            hon_path = normalize(sorted([(-x, y) for x, y in path]))
            if tuple(hon_path) in res or not rotate_valid(hon_path): return False
            ver_path = normalize(sorted([(x, -y) for x, y in path]))
            if tuple(ver_path) in res or not rotate_valid(ver_path): return False
            return True
        
        res = set()
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]:
                    path = []
                    dfs(i, j)
                    path = normalize(sorted(path))
                    if allvalid(path):
                        res.add(tuple(path))
        return len(res)
```