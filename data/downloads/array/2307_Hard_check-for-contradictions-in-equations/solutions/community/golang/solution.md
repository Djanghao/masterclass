# UnionFind + DFS Golang

**Author:** nsLLC
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/5803208/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/5803208/)

---

# Intuition
Similar to [https://leetcode.com/problems/evaluate-division/description/](https://leetcode.com/problems/evaluate-division/description/)

There are solutions that only require UnionFind or DFS, but this solution was the most natural for me to understand.

We can use Disjoint Sets to keep track of connected components. At the same time we build out our undirected weighted graph with recipricals. 

If the edge we are about to connect forms a cycle, then we run dfs to get the product of reaching the destination. If it does not match the expected value of values[i], then there exists a contradiction.

$$O(n)$$ to check all equations

UnionFind find and union operation with can be considered $$O(1)$$ when using path compression and ranks

Upper Bound: $$O(E)$$ for DFS traversal

# Code
```golang []
type UnionFind struct {
    roots map[string]string
    ranks map[string]int
}

func NewUnionFind() *UnionFind {
    roots := make(map[string]string)
    ranks := make(map[string]int)
    return &UnionFind{roots, ranks}
}

func (u *UnionFind) find(x string) string {
    if u.roots[x] != x {
        u.roots[x] = u.find(u.roots[x])
    }
    return u.roots[x]
}

func (u *UnionFind) union(x, y string) {
    rootX, rootY := u.find(x), u.find(y)
    if rootX == rootY {
        return
    }

    if u.ranks[rootX] < u.ranks[rootY] {
        u.roots[rootX] = u.roots[rootY]
    } else if u.ranks[rootY] < u.ranks[rootX] {
        u.roots[rootY] = u.roots[rootX]
    } else {
        u.roots[rootY] = u.roots[rootX]
        u.ranks[rootX]++
    }
}

func (u *UnionFind) connected(x, y string) bool {
    return u.find(x) == u.find(y)
}

func (u *UnionFind) initialize(x string) {
    if _, ok := u.roots[x]; !ok {
        u.roots[x] = x
        u.ranks[x] = 0
    }
}

type Path struct {
    to string
    weight float64
}

func checkContradictions(equations [][]string, values []float64) bool {
    // Create adjacency list and disjoint set
    graph := make(map[string][]Path)
    u := NewUnionFind()

    // For each equation, let us check if they are already connected
    // In other words, let us check if there exists a path from source to dest
    // If there exists a path, let is check the product of the weights of the path
    // If it does not equal the expected value of values[i]
    // then there exists a contradiction
    for i, equation := range equations {
        source, dest := equation[0], equation[1]
        u.initialize(source)
        u.initialize(dest)

        // Path exists
        if u.connected(source, dest) {
            prod := dfs(graph, source, dest, make(map[string]bool))
            if prod == -1 || prod != values[i]{
                return true
            }
        }

        // Add connection to disjoint set and graph
        u.union(source, dest)
        graph[source] = append(graph[source], Path{dest, values[i]})
        graph[dest] = append(graph[dest], Path{source, 1/values[i]})
    }

    return false
}

// There will always exi
func dfs(adjList map[string][]Path, source, dest string, seen map[string]bool) float64 {
    // If we reach out destination or we already multipled
    if source == dest {
        return 1
    }

    seen[source] = true

    for _, neighbor := range adjList[source] {
        if seen[neighbor.to] {
            continue
        }
        res := dfs(adjList, neighbor.to, dest, seen)
        if res != -1 {
            return res * neighbor.weight
        }
    }

    return -1
}
```