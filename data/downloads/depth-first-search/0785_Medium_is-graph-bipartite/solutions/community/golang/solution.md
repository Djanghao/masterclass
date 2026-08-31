# Go | UnionFind | Easy to understand

**Author:** nextgen_coder
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/6103864/](https://leetcode.com/problems/is-graph-bipartite/solutions/6103864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Group all neighbor nodes if any node and adjacent node happen to be in same group return false
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func isBipartite(graph [][]int) bool {
    n := len(graph)
    u := Constructor(n)
    for node := 0; node < n; node++ {
        for _, nei := range graph[node] {
            if u.Find(node) == u.Find(nei) {
                return false
            }
            u.Union(graph[node][0], nei)
        }
    }
    return true
}
type UnionFind struct {
	parents []int
}

func Constructor(n int) UnionFind {
    parents := make([]int, n)
	for i := 0; i < n; i++ {
        parents[i] = i
	}
	return UnionFind{parents}
}

func (u *UnionFind) Find(n int) int {
    if n != u.parents[n] {
        u.parents[n] = u.Find(u.parents[n])
    }
    return u.parents[n]
}

func (u *UnionFind) Union(n1, n2 int) bool {
    p1, p2 := u.Find(n1), u.Find(n2)
    if p1 == p2 {
        return false
    }
    u.parents[p1] = p2
    return true
}
```