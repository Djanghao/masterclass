# Python3 Dijkstra

**Author:** vsavkin
**Votes:** 6
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1255529/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1255529/)

---

```
from collections import defaultdict
from heapq import heappush,heappop

class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        visited = [False]*n
        nei = [ [] for _ in range(n)]
        
        for u,v,cnt in edges:
            nei[u].append((v,cnt))
            nei[v].append((u,cnt))
        # edges is converted to list of neighbors of each node
        
        newreached = defaultdict(int)
        # newreached[(u,v)] will be the number of new nodes reachable from u on the way to v
        
        H = [(0,0)] # distance,node
        while H:
            dist,node = heappop(H)
            if visited[node]: 
                continue
            visited[node] = True
            moves = maxMoves-dist
            if moves>0:
                for v,cnt in nei[node]:
                    newreached[(node,v)] = min(cnt,moves)
                    if not visited[v] and moves>=cnt+1:
                        heappush(H,(dist+cnt+1,v))
        S = sum(visited) # reachable original nodes
        for u,v,cnt in edges:
            S += min(cnt,newreached[(u,v)]+newreached[(v,u)])
        return S
```