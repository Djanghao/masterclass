# Easy Approach and Clear Structure ! Beats 100% in runtime ! #TopologicalSort

**Author:** alonza_0314
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5511239/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5511239/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Think is problem as a "GRAPH" problem. The first and second number in x-conditions just like a from u to v edge. Then, use topological sort to solve this problem.

# Approach
<!-- Describe your approach to solving the problem. -->
**First**, we can convert the x-conditions as a graph. I store the graph as four parts: number of vertices \\ adjacency list \\ roots whose indegree are '0' \\ indegree of each vertice.

**Second**, go on topological sort on row-Graph and col-Graph. I store the result in a map which indicates {vertice: index in row / col}. In the 'for' loop, g.Roots acts as the queue for BFS. The top of the queue as it is popped out will be put in the order map with the val is which index it would be. And if its adjacent vertice's indegree is decrease to zero, I push this vertice into the queue, i.e. g.Roots.

**Last**, just put the result in the return matrix.

**Be careful** that in each step you need to check whether there exist cycle or not, i.e. the error condition in each function.

# Complexity
- Time complexity: $$O(N + E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Code
```
type Graph struct {
    Verts   int
    AdjList map[int][]int
    Roots []int
    Indegree map[int]int
}

func NewGraph(k int, conditions [][]int) (*Graph, error) {
    g := Graph{
        Verts: k,
        AdjList: make(map[int][]int),
        Roots: make([]int, 0),
        Indegree: make(map[int]int),
    }
    for i := 1; i < k + 1; i += 1 {
        g.Indegree[i] = 0
    }
    for _, cond := range conditions {
        u, v := cond[0], cond[1]
        g.AdjList[u] = append(g.AdjList[u], v)
        g.Indegree[v] += 1
    }
    for key, val := range g.Indegree {
        if val == 0 {
            g.Roots = append(g.Roots, key)
        }
    }
    if len(g.Roots) == 0 {
        return nil, errors.New("")
    }
    return &g, nil
}

func (g *Graph) TopologicalSort() (map[int]int, error) {
    order, idx := make(map[int]int), 0
    for len(g.Roots) != 0 {
        top := g.Roots[0]
        g.Roots = g.Roots[1:]
        order[top] = idx
        idx += 1
        for _, adj := range g.AdjList[top] {
            g.Indegree[adj] -= 1
            if g.Indegree[adj] == 0 {
                g.Roots = append(g.Roots, adj)
            }
        }
    }
    if len(order) != g.Verts {
        return nil, errors.New("")
    }
    return order, nil
}

func buildMatrix(k int, rowConditions [][]int, colConditions [][]int) [][]int {
    rowGraph, err := NewGraph(k, rowConditions)
    if err != nil {
        return make([][]int, 0)
    }
    colGraph, err := NewGraph(k, colConditions)
    if err != nil {
        return make([][]int, 0)
    }

    rowTopo, err := rowGraph.TopologicalSort()
    if err != nil {
        return make([][]int, 0)
    }
    colTopo, err := colGraph.TopologicalSort()
    if err != nil {
        return make([][]int, 0)
    }
    rowGraph, colGraph = nil, nil

    ret := make([][]int, k)
    for i := 0; i < k; i += 1 {
        ret[i] = make([]int, k)
    }

    for i := 1; i < k + 1; i += 1 {
        ret[rowTopo[i]][colTopo[i]] = i
    }

    return ret
}
```