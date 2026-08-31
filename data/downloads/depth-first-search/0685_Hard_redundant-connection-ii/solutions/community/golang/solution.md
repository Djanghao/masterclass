# Solution using Disjoint Set Union

**Author:** aaman007
**Votes:** 0
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/5685486/](https://leetcode.com/problems/redundant-connection-ii/solutions/5685486/)

---

# Code
```golang []
type DisjointSet struct {
    parents map[int]int
}

func NewDisjointSet(n int) *DisjointSet {
    parents := make(map[int]int)
    for i := range n {
        parents[i + 1] = i + 1
    }
    return &DisjointSet{parents}
}

func (dsu *DisjointSet) Find(node int) int {
    if dsu.parents[node] == node {
        return node
    }
    dsu.parents[node] = dsu.Find(dsu.parents[node])
    return dsu.parents[node]
}

func (dsu *DisjointSet) Merge(u, v int) bool {
    u, v = dsu.Find(u), dsu.Find(v)
    // This means both u and v were already part of the same set.
    // We didn't have to merge their respective sets.
    if u == v {
        return false
    }
    dsu.parents[v] = u
    return true
}

func hasCycle(edges [][]int, skip []int) ([]int, bool) {
    dsu := NewDisjointSet(len(edges))
    for _, edge := range edges {
        if len(skip) > 0 && edge[0] == skip[0] && edge[1] == skip[1] {
            continue
        }
        // If the two nodes were already part of the same set, that means this
        // edge will create a cycle in the graph.
        if !dsu.Merge(edge[0], edge[1]) {
            return edge, true
        }
    }
    return []int{}, false
}

func findRedundantDirectedConnection(edges [][]int) []int {
    parents := make(map[int]int)
    for _, edge := range edges {
        // If the graph is not a big cyclic one, then there will be only
        // a single node with two parents. In this case, we have to remove
        // either of the connected edges of this node to it's parents.
        if _, ok := parents[edge[1]]; ok {
            lastEdge := []int{parents[edge[1]], edge[1]}
            // Here, from the two parental relationship we skip the last one
            // in the input. If the resulting edges also creates a cycle, that
            // means the graph still isn't a rooted tree. So the correct option
            // would be to remove the other edge. In case the graph does not
            // contain cycle, this will be always false.
            if _, cyclic := hasCycle(edges, edge); cyclic {
                return lastEdge
            }
            // This will be true when either the graph doesn't contain a cycle or
            // removing the last parental relationship will make the graph a
            // rooted tree.
            return edge
        }
        parents[edge[1]] = edge[0]
    }

    // The graph is a big cycle. The last edge will contain an edge
    // which will be detected as the edge creating the cycle. So this
    // satisfies the requirement of returning the last edge from input.
    edge, _ := hasCycle(edges, []int{})
    return edge
}
```