# [Python3] dp

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753337/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753337/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/49eb160eaf0d0c3b6bb97edea0f15ad8feb660b5) for solutions of weekly 414. 

```
class Solution:
    def maxMoves(self, kx: int, ky: int, positions: List[List[int]]) -> int:
        n = len(positions)
        dist = [[0]*n for _ in range(n+1)]
        positions.append([kx, ky])
        for i in range(n+1): 
            for j in range(n): 
                if i != j: 
                    queue = deque([positions[i]])
                    seen = set()
                    step = 0 
                    while queue: 
                        for _ in range(len(queue)): 
                            x, y = queue.popleft()
                            if [x, y] == positions[j]: 
                                dist[i][j] = step  
                                break 
                            for xx, yy in (x-2, y-1), (x-2, y+1), (x-1, y-2), (x-1, y+2), (x+1, y-2), (x+1, y+2), (x+2, y-1), (x+2, y+1): 
                                if 0 <= xx < 50 and 0 <= yy < 50 and (xx, yy) not in seen: 
                                    queue.append([xx, yy])
                                    seen.add((xx, yy))
                        else: 
                            step += 1
                            continue 
                        break 

        ops = [max, min]
        init = [0, inf]
        
        @cache
        def fn(i, m, turn): 
            if m == (1<<n) - 1: return 0 
            ans = init[turn]
            for k in range(n): 
                if not m & 1<< k: 
                    mm = m ^ 1<<k 
                    ans = ops[turn](ans, dist[i][k] + fn(k, mm, turn^1))
            return ans 
        
        return fn(n, 0, 0)
```