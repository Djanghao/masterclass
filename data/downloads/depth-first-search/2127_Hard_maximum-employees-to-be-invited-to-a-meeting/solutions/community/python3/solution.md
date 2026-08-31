# [Python3] quite a tedious solution

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1661041/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1661041/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/18f88320ffb2c2a06e86fad46d82ebd17dadad64) for solutions of weekly 274. 

```
class Solution:
    def maximumInvitations(self, favorite: List[int]) -> int:
        n = len(favorite)
        graph = [[] for _ in range(n)]
        for i, x in enumerate(favorite): graph[x].append(i)
        
        def bfs(x, seen): 
            """Return longest arm of x."""
            ans = 0 
            queue = deque([x])
            while queue: 
                for _ in range(len(queue)): 
                    u = queue.popleft()
                    for v in graph[u]: 
                        if v not in seen: 
                            seen.add(v)
                            queue.append(v)
                ans += 1
            return ans 
        
        ans = 0 
        seen = [False]*n
        for i, x in enumerate(favorite): 
            if favorite[x] == i and not seen[i]: 
                seen[i] = seen[x] = True 
                ans += bfs(i, {i, x}) + bfs(x, {i, x})
                
        dp = [0]*n
        for i, x in enumerate(favorite): 
            if dp[i] == 0: 
                ii, val = i, 0
                memo = {}
                while ii not in memo: 
                    if dp[ii]: 
                        cycle = dp[ii]
                        break
                    memo[ii] = val
                    val += 1
                    ii = favorite[ii]
                else: cycle = val - memo[ii]
                for k in memo: dp[k] = cycle
        return max(ans, max(dp))
```