# Python | Simple DFS

**Author:** nadaralp
**Votes:** 6
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2391194/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2391194/)

---

Ignore edges that have a node from the restricted list.

Then we run a simple DFS and count how many nodes we can reach.

We start the DFS from node 0, so disconnected components won't be reached. We can form a disconnected component between nodes after the restricted nodes.

```
class Solution:
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        res = set(restricted)
        graph = defaultdict(list)
        vis = set()
        
        for u, v in edges:
            if u in res or v in res: continue
            graph[u].append(v)
            graph[v].append(u)
        
        def dfs(node):
            r = 1
            for nei in graph[node]:
                if nei in vis: continue
                vis.add(nei)
                r += dfs(nei)
            return r
        
        vis.add(0)
        return dfs(0)
```