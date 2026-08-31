# Go DFS & BFS designed as methods to custom type; readable. 50% / 100%

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/3774983/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/3774983/)

---

# Intuition
DFS backtracking for path discovery & BFS for nearest node.

# Code
```
type GraphAdjList [][]int

func NewGraphAdjList(n int, edges [][]int) GraphAdjList {
    g := make(GraphAdjList, n)
    for _, e := range edges {
        g[e[0]] = append(g[e[0]], e[1])
        g[e[1]] = append(g[e[1]], e[0])
    }
    return g
}

func (g GraphAdjList) findPath(fm, to int) []int {
    res := []int{}

    visited := map[int]bool{}

    var dfsBacktrack func(int, int) bool
    dfsBacktrack = func(fm, to int) bool {
        // update res
        res = append(res, fm)

        if fm == to { return true }

        if !visited[fm] {
            visited[fm] = true

            // recurse
            for _, edge := range g[fm] {
                if dfsBacktrack(edge, to) { return true }
            }
        }

        // backtrack
        res = res[:len(res)-1]

        return false
    }
    dfsBacktrack(fm, to)

    return res
}

func (g GraphAdjList) nodeClosestToTarget(nodes []int, target int) int {
    q, visited := [][2]int{}, map[int]bool{}
    for _, n := range nodes {
        // check for quick-exit
        if n == target { return n }

        q = append(q, [2]int{n, n})
    }
    for len(q) > 0 {
        newQ := [][2]int{}
        for _, cs := range q {
            curNode, srcNode := cs[0], cs[1]
            if curNode == target { return srcNode }
            if visited[curNode] { continue }
            visited[curNode] = true
            for _, e := range g[curNode] {
                if !visited[e] { newQ = append(newQ, [2]int{e, srcNode}) }
            }
        }
        q = newQ
    }
    return -1
}

func closestNode(n int, edges, query [][]int) []int {
    g := NewGraphAdjList(n, edges)
    
    res := make([]int, len(query))
    for i, q := range query {
        path := g.findPath(q[0], q[1])
        res[i] = g.nodeClosestToTarget(path, q[2])
    }
    return res
}
```