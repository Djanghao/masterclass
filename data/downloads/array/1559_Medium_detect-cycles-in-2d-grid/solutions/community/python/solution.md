# [Python3] DFS concise code

**Author:** manparvesh
**Votes:** 10
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/805946/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/805946/)

---

- The trick was to keep track of the previous element so that you don't go back there wihle doing dfs (took me a long time to figure out)
- We just check that while doing dfs we reach a node that we have already seen or not
```python
class Solution:
    def containsCycle(self, A: List[List[str]]) -> bool:
        R, C = len(A), len(A[0])
        visited = set()
        
        def neighbors(r, c):
            return [(i, j) for i, j in [(r-1, c), (r+1, c), (r, c-1), (r, c+1)] if 0 <= i < R and 0 <= j < C and A[i][j] == A[r][c]]
        
        def dfs(r, c, x, prev, seen):
            if (r, c) in seen:
                return True
            seen.add((r, c))
            visited.add((r, c))

            for i, j in neighbors(r, c):
                if not prev or prev != (i, j):
                    if dfs(i, j, x, (r, c), seen):
                        return True
            return False
            
        
        for r in range(R):
            for c in range(C):
                if (r, c) not in visited:
                    seen = set()
                    if dfs(r, c, A[r][c], None, seen):
                        return True
        return False
```