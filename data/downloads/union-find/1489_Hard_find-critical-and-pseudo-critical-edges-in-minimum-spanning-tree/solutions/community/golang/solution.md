# [Golang[ Kruskal algorithm

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3931818/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3931818/)

---

# Complexity
- Time complexity:
O(mlogm) + O(m * (n+m)) = O(mlogm + m*m + m*n) = O(m^2)

- Space complexity:
O(m), for storing index

# Code
```
func findCriticalAndPseudoCriticalEdges(n int, edges [][]int) [][]int {
    m := len(edges)

    // Append index, since we are reordering/sorting, O(m)
    for i := 0; i < m; i++ {
        edges[i] = append(edges[i], i)
    }

    // Sort according to weights, O(mlogm)
    sort.Slice(edges, func (i, j int) bool {
        return edges[i][2] < edges[j][2]
    })

    // O(n + m)
    mstWeight, _ := Kruskal(n, -1, -1, edges)
    result := make([][]int, 2)

    // O(m * ((n + m) + (n + m))) -> O(m * (n + m))
    for i := 0; i < m; i++ {
        // O(n + m)
        weight, size := Kruskal(n, i, -1, edges)

        if weight > mstWeight || size < n {
            result[0] = append(result[0], edges[i][3])
        } else {
            // Check for Pseudo Critical
            // O(n + m)
            weight, size = Kruskal(n, -1, i, edges)

            // Pseudo Critical
            if weight == mstWeight && size == n {
                result[1] = append(result[1], edges[i][3])
            }
        }
    }

    return result
}

// O(n + m)
func Kruskal(n, ignoreIdx, forceIdx int, edges [][]int) (int, int) {
    m := len(edges)
    weight := 0
    uf := NewUnionFind(n) // O(n)

    if forceIdx != -1 {
        uf.Union(edges[forceIdx][0], edges[forceIdx][1])
        weight += edges[forceIdx][2]
    }

    // O(m), union is O(1)
    for i := 0; i < m; i++ {
        if i == ignoreIdx || i == forceIdx {
            continue
        }

        if uf.Union(edges[i][0], edges[i][1]) {
            weight += edges[i][2]
        }
    }

    return weight, uf.MaxSize
}

type UnionFind struct {
    parents []int
    size []int
    MaxSize int
}

// O(n)
func NewUnionFind(n int) *UnionFind {
    parents := make([]int, n)
    size := make([]int, n)

    for i := 0; i < n; i++ {
        parents[i] = i
        size[i] = 1
    }

    return &UnionFind{
        parents : parents,
        size : size, 
    }
}

// O(1)
func (uf *UnionFind) Union(i, j int) bool {
    p1 := uf.FindParent(i)
    p2 := uf.FindParent(j)

    if p1 == p2 {
        return false
    }

    if uf.size[p1] < uf.size[p2] {
        p1, p2 = p2, p1
    }

    uf.parents[p2] = p1
    uf.size[p1] += uf.size[p2]
    uf.MaxSize = max(uf.MaxSize, uf.size[p1])

    return true
}

// O(1)
func (uf *UnionFind) FindParent(i int) int {
    if i != uf.parents[i] {
        uf.parents[i] = uf.FindParent(uf.parents[i])
    }
    return uf.parents[i]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```