# Python 3, DFS+Heap

**Author:** timzeng
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/530766/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/530766/)

---

```
from heapq import *
class Solution:
    def maximumMinimumPath(self, A: List[List[int]]) -> int:
        m, n = len(A),len(A[0])
        visited = [[0]*n for _ in range(m)]
        q = [(-A[0][0],0,0)]
        visited[0][0] = 1
        res = A[0][0]
        dirs = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        while q:
            v, x, y = heapq.heappop(q)
            if x == m-1 and y == n - 1:
                return -v
            for xd,yd in dirs:
                nx = x + xd
                ny = y + yd
                if 0<=nx<m and 0<=ny<n and not visited[nx][ny]:
                    visited[nx][ny] = 1
                    heapq.heappush(q,(max(v,-A[nx][ny]),nx,ny))
```

***
Check on my [repo](https://github.com/zengtian006/LeetCode) to get Leetcode solution(Python) with classification: https://github.com/zengtian006/LeetCode
***