# [Python 3]DP + Bitmask

**Author:** chestnut890123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5756458/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5756458/)

---

```
class Solution:
    def maxMoves(self, kx: int, ky: int, positions: List[List[int]]) -> int:
        
        n = len(positions)
        
        dirs = [(1, 2), (1, -2), (-1, 2), (-1, -2), (2, 1), (2, -1), (-2, 1), (-2, -1)]
        
        @cache
        def helper(cx, cy, dx, dy):
            
            cnt = 0
            
            q = [(cx, cy)]
            vis = defaultdict(lambda: inf, {(cx, cy): 0})
            while q:
                new_q = []
                for x, y in q:
                    if x == dx and y == dy:
                        return cnt
                    for a, b in dirs:
                        nx, ny = x + a, y + b
                        if (0 <= nx < 50) and (0 <= ny < 50) and vis[nx, ny] > cnt + 1:
                            vis[nx, ny] = cnt + 1
                            new_q.append((nx, ny))
                q = new_q
                cnt += 1
            
        
        @cache
        def dp(x, y, mask, max_round):
            if mask == (1 << n) - 1:
                return 0
            
            ans = 0 if max_round else inf
            for i in range(n):
                if mask & (1 << i):
                    continue                
                dx, dy = positions[i]
                min_moves = helper(x, y, dx, dy)
                if max_round:
                    ans = max(ans, min_moves + dp(dx, dy, mask | (1 << i), max_round ^ 1))
                else:
                    ans = min(ans, min_moves + dp(dx, dy, mask | (1 << i), max_round ^ 1))
            return ans
        
        return dp(kx, ky, 0, 1)