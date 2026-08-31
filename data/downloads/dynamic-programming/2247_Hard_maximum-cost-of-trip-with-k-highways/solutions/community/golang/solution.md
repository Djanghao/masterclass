# [Golang] DP solution 100% O(2^N*N^2)

**Author:** user6360pf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3066122/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3066122/)

---


# Code
```
func maximumCost(n int, highways [][]int, k int) int {
    if k > n - 1 { return -1 }
    edges := make([][]Edge, n)
    for i := 0; i < len(highways); i++ {
        edges[highways[i][0]] = append(edges[highways[i][0]], Edge{highways[i][1], highways[i][2]} )
        edges[highways[i][1]] = append(edges[highways[i][1]], Edge{highways[i][0], highways[i][2]} )
    }
    f := make([][]*int, 1<<n) 
    for i := 0; i < 1<<n; i++ {
        f[i] = make([]*int, n)
    }
    result := -1
    for i := 0; i < n; i++ {
        result = Max(result, dfs(f, edges, 1<<i, i, k))
    }
    return result
}

type Edge struct {
    node int
    toll int
}

func dfs(f [][]*int, edges [][]Edge, visited int, lastNode int, length int) int {
    if length == 0 {
        return 0
    }
    if f[visited][lastNode] != nil{
        return (*f[visited][lastNode])
    }

    result := -1 
    for i := 0; i < len(edges[lastNode]); i++ {
        if visited & (1<<edges[lastNode][i].node) == 0 {
            pathToll := dfs(
                f,
                edges, 
                visited | (1<<edges[lastNode][i].node), 
                edges[lastNode][i].node,
                length - 1,
            ) 
            if pathToll == -1 { continue }
            result = Max(
                result, 
                pathToll + edges[lastNode][i].toll,
            )
        }
    }
    f[visited][lastNode] = &result
    return result
}

func Max(a,b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}
```