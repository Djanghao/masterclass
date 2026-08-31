# Understandable | Clean | Union Find | Easy solution

**Author:** kmuhammadjon
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/5165263/](https://leetcode.com/problems/count-servers-that-communicate/solutions/5165263/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Union Find
# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type UnionFind struct{
    Parents []int
    Sizes []int
}

func (uf *UnionFind) Find(node int) int{
    if uf.Parents[node] == node{
        return node
    }
    uf.Parents[node] = uf.Find(uf.Parents[node])
    return uf.Parents[node]
}

func (uf *UnionFind) Union(node1, node2 int){
    root1 := uf.Find(node1)
    root2 := uf.Find(node2)

    if root1 == root2 { return }

    if uf.Sizes[root1] > uf.Sizes[root2]{
        uf.Parents[root2] = root1
        uf.Sizes[root1] += uf.Sizes[root2]
    }else{
        uf.Parents[root1] = root2
        uf.Sizes[root2] += uf.Sizes[root1]
    }
}

func constructor(ln int) *UnionFind{
    p := make([]int, ln)
    s := make([]int, ln)

    for i := 0; i < ln; i++{
        p[i] = i
        s[i] = 1
    }

    return &UnionFind{p, s}
}

func countServers(grid [][]int) int {
    uf := constructor(len(grid) * len(grid[0]))
    findConnections(grid, uf)
    numberOfServers := 0
    fmt.Println(uf.Sizes)
    fmt.Println(uf.Parents)
    parent := map[int]bool{}
    for _, p := range uf.Parents{
        ulp := uf.Find(p)
        if !parent[ulp] && uf.Sizes[ulp] > 1{
            numberOfServers += uf.Sizes[ulp]
            parent[ulp] = true
        }
    }

    return numberOfServers
}

func findConnections(grid [][]int, uf *UnionFind){
    rows := len(grid[0])
    cols := len(grid)
    for i := 0; i < cols; i++{
        prev := -1
        for j := 0; j < rows; j++{
            if grid[i][j] == 1{
                if prev != -1{
                    uf.Union(i * rows + j, prev)
                }else{
                    prev = i * rows + j
                }
            }
        }
    }
    for j := 0; j < rows; j++{
        prev := -1
        for i := 0; i < cols; i++{
            if grid[i][j] == 1{
                if prev != -1{
                    uf.Union(i * rows + j, prev)
                }else{
                    prev = i * rows + j
                }
            }
        }
    }
    
}

```