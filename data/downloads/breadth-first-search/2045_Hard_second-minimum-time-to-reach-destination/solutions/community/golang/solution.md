# [Go] O(n+m) solution using BFS for second shorted path. Pre-calculated time costs

**Author:** nzwice
**Votes:** 3
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/3011896/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/3011896/)

---

# Intuition
- Time cost for a path depends on its number of edges only. Hence, we can use modulus check to precalculate cost for a specific number of edges.
- For finding second smallest path, we can do BFS 2 times, one from source and one from destination, then do edge replacements to figure out.
- If we can not find the second smallest path (due to all equivalent smallest paths), then we can use the smallest path with 2 directed edges to loop back to the destination. Hence it should be the second smallest value.


# Complexity
- Time complexity: O(n+m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func secondMinimum(n int, edges [][]int, time int, change int) int {
    adj := make([][]int, n)
    for _, e := range edges {
        x, y := e[0]-1, e[1]-1
        adj[x] = append(adj[x], y)
        adj[y] = append(adj[y], x)
    }
    g := make([]int, 10_001)
    for i := 1; i < len(g); i++ {
        if (g[i-1] / change) % 2 == 0 {
            g[i] = g[i-1] + time
        } else {
            g[i] = (g[i-1] / change + 1) * change + time
        }
    }
    bfs := func(src int) []int {
        q := []int{src}
        d := make([]int, n)
        for i := 0; i < n; i++ {
            if i != src {
                d[i] = -1
            }
        }
        for len(q) > 0 {
            u := q[0]
            q = q[1:]
            for _, v := range adj[u] {
                if d[v] == -1 {
                    d[v] = d[u] + 1
                    q = append(q, v)
                }
            }
        }
        return d
    }
    src, dst := bfs(0), bfs(n-1)
    first := src[n-1]
    second := math.MaxInt32
    for _, e := range edges {
        x, y := e[0]-1, e[1]-1
        if t := src[x] + dst[y] + 1; t > first && t < second {
            second = t
        }
        if t := src[y] + dst[x] + 1; t > first && t < second {
            second = t
        }
    }
    if second == math.MaxInt32 {
        return g[first+2]
    }
    return g[second]
}
```