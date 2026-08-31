# Go / GoLang | DSU / Union Find

**Author:** aristorinjuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3053589/](https://leetcode.com/problems/number-of-good-paths/solutions/3053589/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Inspired by the official solution, but written in Go.

# Approach
<!-- Describe your approach to solving the problem. -->
Union-Find. Same approach as the official solution. But we created the ordered `keys` of `valuesOfNodes` here. Because GoLang has no ordered map.

# Complexity
- Time complexity: $$O(n\u22C5log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type unionFind struct {
    parent []int
    rank []int
}

func (u *unionFind) Find(x int) int {
    if u.parent[x] != x {
        u.parent[x] = u.Find(u.parent[x])
    }

    return u.parent[x]
}

func (u *unionFind) Set(x, y int) {
    xSet, ySet := u.Find(x), u.Find(y)

    if xSet != ySet {
        switch {
        case u.rank[xSet] < u.rank[ySet]:
            u.parent[xSet] = ySet
        case u.rank[xSet] > u.rank[ySet]:
            u.parent[ySet] = xSet
        default:
            u.parent[ySet] = xSet
            u.rank[xSet]++
        }
    }
}

func newUnionFind(size int) *unionFind {
    parent := make([]int, size) 
    for i := range parent {
        parent[i] = i
    }

    return &unionFind{parent, make([]int, size)}
}

func numberOfGoodPaths(vals []int, edges [][]int) int {
    n := len(vals)
    adj := make([][]int, n)
    for i := range adj {
        adj[i] = []int{}
    }
    for _, edge := range edges {
        adj[edge[0]] = append(adj[edge[0]], edge[1])
        adj[edge[1]] = append(adj[edge[1]], edge[0])
    }

    valuesToNodes := make(map[int][]int)
    for node := 0; node < n; node++ {
        valuesToNodes[vals[node]] = append(valuesToNodes[vals[node]], node)
    }

    keys := []int{}
    for value := range valuesToNodes {
        keys = append(keys, value)
    }

    sort.Ints(keys)

    dsu, goodPaths := newUnionFind(n), 0
    for _, value := range keys {
        nodes := valuesToNodes[value]
    
        for _, node := range nodes {
            for _, neighbor := range adj[node] {
                if vals[node] >= vals[neighbor] {
                    dsu.Set(node, neighbor)
                }
            }
        }

        group := make(map[int]int)
        for _, node := range nodes {
            group[dsu.Find(node)]++
        }
        for _, size := range group {
            goodPaths += size * (size + 1) / 2
        }
    }

    return goodPaths
}
```