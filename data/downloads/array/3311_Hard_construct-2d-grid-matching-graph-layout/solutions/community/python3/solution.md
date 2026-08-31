# [Python] Degree to Force One Row

**Author:** awice
**Votes:** 31
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5875761/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5875761/)

---

If we write one row of the grid, then considering the remaining elements in row major order, the choices are all forced.

Consider the grid to be a graph where nodes are cells and edges are between adjacent cells of the grid.

Now consider the degree of each node.  On a 1xC grid it looks like this: [1,2,2,2,1].  On a 2 by C grid like this: [[2,3,3,2],[2,3,3,2]], and on a 3+ by C grid all the non-border nodes have degree 4.

So, take a node with minimal degree.  Following the 3 cases mentioned, the 1-row and 3-row grid is a forced path.  For the 2-row grid, you are guaranteed that two degree-2 corners are adjacent, so if you consider lower degree nodes first, you will ensure this path.

Once one row of the grid is known, the rest is easy to fill in.

# Code
```python3 []
class Solution:
    def constructGridLayout(self, N: int, edges: List[List[int]]) -> List[List[int]]:
        adj = [[] for _ in range(N)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        deg = [len(row) for row in adj]
        root = deg.index(min(deg))
        path = [root]
        seen = [0] * N
        seen[root] = 1
        for node in path:
            if len(path) >= 2 and deg[path[-1]] == deg[root]:
                break
            adj[node].sort(key=deg.__getitem__)
            for nei in adj[node]:
                if not seen[nei] and deg[nei] <= deg[root] + 1:
                    path.append(nei)
                    seen[nei] = 1
                    break

        C = len(path)
        R = N // C
        ans = [[0] * C for _ in range(R)]
        ans[0] = path
        for r in range(1, R):
            for c in range(C):
                for nei in adj[ans[r - 1][c]]:
                    if not seen[nei]:
                        ans[r][c] = nei
                        seen[nei] = 1
                        break

        return ans

```