# Fast & Simple Solution with Union-Find | Golang | 3 ms

**Author:** nikmy
**Votes:** 3
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3463782/](https://leetcode.com/problems/similar-string-groups/solutions/3463782/)

---

# Intuition
Using the Disjoint Set Union data structure, task is to check all pairs `(strs[i], strs[j])`, $i \
eq j$ for similarity.

# Approach
Iterating over `i` and `j`, we check whether `i` and `j` are in the same set ($O(1)$ complexity), and if they aren't, check `strs[i]` and `strs[j]` for similarity ($O(len(strs[i]))$ complexity), and if they are similar, unite `i`'s and `j`'s sets.

In DSU implementation, we use rank and path compaction heuristics, so the `Find` and `Union` complexity is $O(\\alpha(n)) = O(1)$ for our case.

# Complexity
- Time complexity: $O(\\frac{1}{2}Ln^2)$, where $L$ is `strs[i]` length and $n$ is `strs` length

- Space complexity: $\\Theta(2n)$

# Code
```go
func numSimilarGroups(strs []string) int {
    dsu := NewDSU(len(strs))
    for i := range strs {
        for j := i + 1; j < len(strs); j++ {
            if dsu.SameSet(i, j) {
                continue
            }
            if similar(strs[i], strs[j]) {
                dsu.Union(i, j)
            }
        }
    }
    return dsu.Size()
}

func similar(a, b string) bool {
    var distance int
    for i := range a {
        if a[i] != b[i] {
            distance++
            if distance > 2 {
                return false
            }
        }
    }
    return distance == 2 || distance == 0
}


func NewDSU(nComponents int) *SetForest {
    root := make([]int, nComponents)
    for i := range root {
        root[i] = i
    }
    rank := make([]int, nComponents)
    for i := range rank {
        rank[i] = 1
    }
    return &SetForest{
        root: root,
        rank: rank,
        size: nComponents,
    }
}

type SetForest struct {
    root []int
    rank []int
    size int
}

func (f *SetForest) Find(x int) int {
    if r := f.root[x]; r != f.root[r] {
        f.root[x] = f.Find(r)
    }
    return f.root[x]
}

func (f *SetForest) Union(x, y int) {
    x, y = f.Find(x), f.Find(y)
    if x == y {
        return
    }
    switch {
    case f.rank[x] < f.rank[y]:
        f.root[x] = y
    case f.rank[x] > f.rank[y]:
        f.root[y] = x
    default:
        f.root[x] = y
        f.rank[y]++
    }
    f.size--
}

func (f *SetForest) SameSet(x, y int) bool {
    return f.Find(x) == f.Find(y)
}

func (f *SetForest) Size() int {
    return f.size
}
```