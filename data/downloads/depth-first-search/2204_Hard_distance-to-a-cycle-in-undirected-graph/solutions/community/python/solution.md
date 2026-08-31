# [Python 3] DFS Backtracking + BFS with comments

**Author:** chestnut890123
**Votes:** 7
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/1858063/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/1858063/)

---

```
class Solution:
    def distanceToCycle(self, n: int, edges: List[List[int]]) -> List[int]:
        g = defaultdict(set)
        for u, v in edges:
            g[u].add(v)
            g[v].add(u)
        
        # step 1: backtracking DFS to find the cycle
        circle = []
        vis = set()
        
        def find_circle(node, par):
            if node in vis:
                return (True, node)
            for nei in g[node]:
                if nei == par: continue
                vis.add(node)
                circle.append(node)
                status, res = find_circle(nei, node)
                if status: return status, res
                circle.pop()
                vis.remove(node)

            return False, None

        
        _, node = find_circle(0, None)
        # get the circle from start "node"
        circle = circle[circle.index(node):] 

        # step 2: BFS to get rest of the nodes from each node in the cycle
        ans = [0] * n        
        vis = set(circle)

        steps = 0
        while circle:
            new_q = []
            steps += 1
            for x in circle:
                for nei in g[x]:
                    if nei in vis: continue
                    ans[nei] = steps
                    vis.add(nei)
                    new_q.append(nei)
            circle = new_q
        return ans        
```

PS: Graph in the example 1 is wrong, the cycle should be:
```
1 - 2
|   |
4 - 3
```