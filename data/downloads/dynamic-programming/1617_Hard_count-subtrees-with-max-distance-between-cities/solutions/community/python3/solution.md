# [python] Dynamic Programming, O(2^N*N)

**Author:** nate17
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/889470/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/889470/)

---

First calculate all node pairs' distances, and then iterate all possible states sequentially while each state only require one update, therefore time complexity is only O(2^N*N)
```python
class Solution:
    def countSubgraphsForEachDiameter(self, n: int, edges: List[List[int]]) -> List[int]:
        res = [0]*(n-1)
        g = defaultdict(list)
        gs = [0]*n
        dp = [0]*(1<<n)
        for a, b in edges:
            a -= 1
            b -= 1
            g[a].append(b)
            g[b].append(a)
            gs[a] |= (1<<b)
            gs[b] |= (1<<a)
            dp[(1<<a)|(1<<b)] = 1
        dis = [[0]*n for _ in range(n)]
        def dfs(root, cur, depth, parent):
            dis[root][cur] = depth
            for nxt in g[cur]:
                if nxt == parent:
                    continue
                dfs(root, nxt, depth+1, cur)
            return

        for i in range(n):
            dfs(i,i,0,-1)
            
#         print(dis)
#         print(ees)
        
        for state in range(1<<n):
            # print(state, dp[state])
            if dp[state] > 0:
                res[dp[state]-1] += 1
                for i in range(n):
                    if dp[state | (1<<i)] == 0 and (state & gs[i]):
                        dp[state | (1<<i)] = max(dp[state], max(dis[i][j] for j in range(n) if state&(1<<j)))
                    # if dp[state | (1<<i)] == 0 and any((i,j) in ees for j in range(n) if state&(1<<j)):
                    #     dp[state | (1<<i)] = max(dp[state], max(dis[i][j] for j in range(n) if state&(1<<j)))
                    # if state & (1<<i) == 0 and any((i,j) in ees for j in range(n) if state&(1<<j)):
                        # dp[state ^ (1<<i)] = max(dp[state ^ (1<<i)], dp[state], max(dis[i][j] for j in range(n) if state&(1<<j)))
        return res

```