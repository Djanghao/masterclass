# DFS with backtrack and short-circut

**Author:** qulia
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/4016002/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/4016002/)

---


```
func findShortestCycle(n int, edges [][]int) int {
    g := getGraph(edges)

    minPath := math.MaxInt32
    visiting := map[int]bool{} 
    for i := 0; i < n; i++ {
        countNodesCycle(g, i, visiting, 0, &minPath)
    }

    if minPath == math.MaxInt32 {
        minPath = -1
    }
    return minPath
}

func countNodesCycle(g map[int]map[int]bool, n int, visiting map[int]bool, curCount int, count *int) {
    if visiting[n] {
        // cycle
        *count = min(*count, curCount)
        return
    }

    // short-circuit if not better
    if curCount >= *count {
        return
    }

    visiting[n] = true
    for nb, _ := range g[n] {
        delete(g[nb], n) // tmp remove reverse edge
        countNodesCycle(g, nb, visiting, curCount + 1, count) 
        g[nb][n] = true // backtrack
    }

    delete(visiting, n) // backtrack
}

func getGraph(edges [][]int) map[int]map[int]bool{
    g := map[int]map[int]bool{}
    for _, e := range edges{
        n1 := e[0]
        n2 := e[1]
        if _, ok := g[n1]; !ok {
            g[n1] = map[int]bool{}
        }
        if _, ok := g[n2]; !ok {
            g[n2] = map[int]bool{}
        }
        g[n1][n2] = true
        g[n2][n1] = true
    }

    return g
}

func min(x, y int) int {
    if x < y {
        return x
    }

    return y
}
```