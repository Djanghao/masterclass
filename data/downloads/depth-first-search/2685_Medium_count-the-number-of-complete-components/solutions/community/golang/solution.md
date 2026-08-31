# ✅ Go || Union Find || O(n logn) 🚀 || Blazingly Fast 🔥

**Author:** escalopa
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3522633/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3522633/)

---

# Intuition

### Union Find

# Approach
1. Add all edges to union find struct
2. On union increase the edge count & rank count on parent node, notice that **rank count == number on nodes in the given subgraph** while  **edge count == number of edges in subgraph**
3. Check all parent nodes and verify that this component is complete by the formula **edge count == (rank count * (rank count -1) / 2)**, if the result is true, means that this subgraph is complete.



# Complexity
- Time complexity: **O(n * logn)**
- Space complexity: **O(n)**

# Code
```
type UnionFind struct {
    n int // nodes count
    p []int // parent arary
    r []int // number of nodes in subgraph
    e []int // number of edges in subgraph
}

func NewUnionFind(n int) *UnionFind {
    p := make([]int, n)
    r := make([]int, n)
    e := make([]int, n)
    for i := 0; i < n; i++ { 
        p[i] = i
        r[i] = 1
    }
    return &UnionFind{n: n, p: p, r: r, e: e}
}

func (uf *UnionFind) Find(x int) int {
    if uf.p[x] == x {
        return x
    }
    return uf.Find(uf.p[x])
}

func (uf *UnionFind) Union(i, j int) {
    i = uf.Find(i)
    j = uf.Find(j)
    
    if i != j {
        if uf.r[i] > uf.r[j] {
            uf.p[j] = i
            uf.r[i] += uf.r[j]
            uf.e[i] += uf.e[j] + 1
        } else {
            uf.p[i] = j
            uf.r[j] += uf.r[i]
            uf.e[j] += uf.e[i] + 1
        }
    } else {
        uf.e[i]++
    }
}

func (uf *UnionFind) CountComponents() int {
    var x int
    for i := 0; i < uf.n; i++ {
        if uf.p[i] == i { // parent node
            if uf.e[i] == (uf.r[i] * (uf.r[i]-1) / 2) { // n * (n-1) / 2
                x++
            }
        }
    }
    return x
}

func countCompleteComponents(n int, edges [][]int) int {
    uf := NewUnionFind(n)
    for _, e := range edges {
        uf.Union(e[0], e[1])
    }
    return uf.CountComponents()
}
```