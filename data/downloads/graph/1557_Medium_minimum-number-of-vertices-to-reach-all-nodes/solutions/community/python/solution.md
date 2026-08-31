# simple DFS solution with explaination

**Author:** kaushik8511
**Votes:** 45
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/806637/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/806637/)

---

### Idea : Here idea is **track** of all the vertices from which we start traversing, and if we found vertex which is **already in result set and reached by other vertex** then we will **remove it from result set** beacuse vertex and all the vertices that can reached from that vertex can **also be reached from other vertex**.


##### **If it is helpful then please appreciate it.**
```
class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        
        def dfs(g,c,vis,res):
            vis[c] = True
            for adj in g[c]:
                if not vis[adj]:
                    dfs(g,adj,vis,res)
                #adj can be visited by current vertex so we dont have to add adj in res
                elif adj in res:res.remove(adj)
        
        #Make a adjecency list
        g = collections.defaultdict(list)
        for e in edges:
            u,v = e
            g[u].append(v)
            
        
        res = set()
        vis = [False]*n
        for i in range(n):
            if not vis[i]:
                dfs(g,i,vis,res)
				#add vertex from which we start traversing
                res.add(i)
        return list(res)