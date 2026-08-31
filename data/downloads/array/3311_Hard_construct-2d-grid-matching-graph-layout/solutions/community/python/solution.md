# [Python] Distance + Sort

**Author:** lee215
**Votes:** 5
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5882313/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5882313/)

---

# **Intuition**
Corners have the minimum neighbors .
Find the corners first.
<br>

# **Explanation**
Find the distance `d1[v]` from node `v` to top left.
Find the distance `d2[v]` from node `v` to top right.

Assume the a node at `(i, j)`
`i = d1[i] + d2[i] - cols`
`i + j = d1[i]`

Sort all nodes with `(d1[i] + d2[i], d1[i])`,
Then it's sorted by `(i, i + j)`
from top to bottom, from left to right.

Also we can get the `(i, j)` directly from `d1` and `d2`
```
i = (d1[v] + d2[v] - c) // 2
j = (d1[v] - d2[v] + c) // 2
```
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def constructGridLayout(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        G = [set() for _ in range(n)]
        for u, v in edges:
            G[u].add(v)
            G[v].add(u)
        min_d = min(len(v) for v in G)
        corners = [v for v in range(n) if len(G[v]) == min_d]

        def dis(i):
            d = [inf] * n
            d[i] = 1
            bfs = [i]
            for i in bfs:
                for j in G[i]:
                    if d[j] == inf:
                        d[j] = d[i] + 1
                        bfs.append(j)
            return d, bfs

        d1, bfs = dis(corners[0])
        c = sorted(d1[v] for v in corners)[1]
        d2, bfs = dis([v for v in corners if d1[v] == c][0])

        res = sorted(range(n), key=lambda i: (d1[i] + d2[i], d1[i]))
        return [res[i:i + c] for i in range(0, n, c)]
```

Replace the last two lines,
improve it to `O(n)`
```py
        A = [[0] * c for i in range(n // c)]
        for v in range(n):
            i = (d1[v] + d2[v] - c) // 2
            j = (d1[v] - d2[v] + c) // 2
            A[i][j] = v
        return A
```
