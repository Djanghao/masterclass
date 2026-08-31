# [Golang] easy to read dfs solution without heap

**Author:** komly
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3169603/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3169603/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func highestRankedKItems(grid [][]int, pricing []int, start []int, k int) [][]int {
    type p struct{i, j int}
    dirs := []p{
        { -1, 0},
        {1, 0},
        {0, -1},
        {0, 1},
    }
    q := []p{
        {
            start[0],
            start[1],
        },
    }
    type Item struct {
        p p
        distance int
    }
    res := make([]Item, 0)
    s := grid[q[0].i][q[0].j] 
    if s >= pricing[0] && s <= pricing[1] {
        res = append(res, Item{
                            q[0],
                            0,
        })
    }
    visited := make(map[p]struct{})
    visited[q[0]] = struct{}{}
    distance := 1
    for len(q) > 0 {
        n := len(q)
        for n > 0 {
            n--
            c := q[0]
            q = q[1:]
              

            for _, d := range dirs {
                i := c.i + d.i
                j := c.j + d.j
                if i < 0 || j < 0 || i >= len(grid) || j >= len(grid[i])  {
                    continue
                }
                if _, ok := visited[p{i, j}]; ok {
                    continue
                }
                if grid[i][j] == 0 {
                    continue
                }
                visited[p{i, j}] = struct{}{}
                q = append(q, p{i, j})
                if grid[i][j] >= pricing[0] && grid[i][j] <= pricing[1] {
                  res = append(res, Item{
                        p{i, j},
                        distance,
                    })
                }
            }
        }
        distance++
    }
    sort.Slice(res, func(i, j int) bool {
        a := res[i]
        b := res[j]
        if a.distance != b.distance {
            return a.distance < b.distance
        }

        if grid[a.p.i][a.p.j] != grid[b.p.i][b.p.j] {
            return grid[a.p.i][a.p.j] < grid[b.p.i][b.p.j]
        }
        if a.p.i !=  b.p.i {
            return a.p.i < b.p.i
        }
        if a.p.j != b.p.j {
            return a.p.j < b.p.j
        }
        return false
    })
    rr := make([][]int, 0)
    for _, item := range res[:min(k, len(res))] {
        rr = append(rr, []int{item.p.i, item.p.j})
    }
    return rr
}
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```