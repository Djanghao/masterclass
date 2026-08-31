# Golang Union Find

**Author:** chocstarfish
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/844443/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/844443/)

---

Use a single array for storing the DSU structure, negative values indicate roots and the absolute values of those are the sizes of the trees.

```go
func find(dsu []int, x int) int {
    if dsu[x] < 0 {
        return x
    }
    
    dsu[x] = find(dsu, dsu[x])
    
    return dsu[x]
}

func union(dsu []int, u, v int) bool {
    pu, pv := find(dsu, u), find(dsu, v)
    
    if pu == pv {
        return false
    }
    
    if dsu[pu] < dsu[pv] {
        dsu[pu] += dsu[pv]
        dsu[pv] = pu
    } else {
        dsu[pv] += dsu[pu]
        dsu[pu] = pv
    }
    
    return true
}

func countComponents(n int, edges [][]int) int {
    dsu := make([]int, n)
    for i := range dsu {
        dsu[i] = -1
    }    
    
    for _, edge := range edges {
        if union(dsu, edge[0], edge[1]) {
            n--
        }
    }
    
    return n
}
```