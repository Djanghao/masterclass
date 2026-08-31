# Python simple solution using dfs and bfs

**Author:** ankurkumarpankaj
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2687095/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2687095/)

---

```
class Solution:
    def closestNode(self, n: int, edges: List[List[int]], query: List[List[int]]) -> List[int]:
        from collections import deque
        
        graph = {i:[] for i in range(n)}
        
        for a,b in edges:
            graph[a].append(b)
            graph[b].append(a)
            
        def dfs(node, tr):
            if node == tr:
                return True
            
            vis.add(node)
            
            for n in graph[node]:
                if n not in vis:
                    pathVals.add(n)
                    if dfs(n, tr):
                        return True
                    pathVals.remove(n)
                    
        def bfs(que, setVal):
            vis = set()
            
            while(que):
                for _ in range(len(que)):
                    node = que.popleft()
                    
                    if node in setVal:
                        return node
                    
                    if node in vis:
                        continue
                        
                    vis.add(node)
                    
                    for n in graph[node]:
                        que.append(n)
                    
        res = []
        for eachQuery in query:
            vis = set()
            pathVals = set()
            pathVals.add(eachQuery[0])
            
            dfs(eachQuery[0], eachQuery[1])
            
            if eachQuery[2] in pathVals:
                res.append(eachQuery[2])
                continue
                
            que =  deque([eachQuery[2]])  
            res.append(bfs(que, pathVals))
            
        return res

            
