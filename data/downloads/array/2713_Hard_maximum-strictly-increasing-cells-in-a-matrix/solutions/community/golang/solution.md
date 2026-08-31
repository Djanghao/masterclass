# A simple solution in Go

**Author:** yscharf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/4128603/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/4128603/)

---

# Intuition
See approach

# Approach
We traverse the entries in ascending order while keeping for each row and column the best score we got. 

# Complexity
- Time complexity:
$$O(n * m * log(nm))$$

- Space complexity:
$$O(nm)$$

# Code
```
func maxIncreasingCells(mat [][]int) int {
    type X struct {
        r, c, v int
    }
    type Y struct {
        max, second, v int
    }
    M, N := len(mat), len(mat[0])
    sorted := make([]*X, 0, M * N)
    rows := make([]Y, M)
    columns := make([]Y, N)
    for r, row := range mat {
        for c, v := range row {
            sorted = append(sorted, &X{r, c, v})
        }
    }
    sort.Slice(sorted, func(i, j int) bool {
        return sorted[i].v < sorted[j].v   
    })
    res := 0
    for _, x := range sorted {
        var nd int
        if rows[x.r].max == 0 || rows[x.r].v < x.v{
            nd = rows[x.r].max + 1
        } else {
            nd = rows[x.r].second + 1
        }

        if columns[x.c].max == 0 || columns[x.c].v < x.v {
            if columns[x.c].max + 1 > nd {
                nd = columns[x.c].max + 1
            }
        } else if columns[x.c].second + 1 > nd {
            nd = columns[x.c].second + 1
        }

        if rows[x.r].v == x.v && rows[x.r].max < nd {
            rows[x.r].max = nd
        } else if rows[x.r].max == 0 || rows[x.r].v < x.v {
            rows[x.r].second = rows[x.r].max 
            rows[x.r].max = nd
            rows[x.r].v = x.v
        }

        if columns[x.c].v == x.v && columns[x.c].max < nd {
            columns[x.c].max = nd
        } else if columns[x.c].max == 0 || columns[x.c].v < x.v {
            columns[x.c].second = columns[x.c].max
            columns[x.c].max = nd
            columns[x.c].v = x.v
        }

        if nd > res {
            res = nd
        }
    }

    return res
}
```