# golang, inplace

**Author:** capell
**Votes:** 5
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/530124/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/530124/)

---

```
import "sort"

func diagonalSort(mat [][]int) [][]int {
    for r:=0; r<len(mat); r++ {
        sort.Sort(&diag{mat, r,0})
    }
    for c:=1; c< len(mat[0]); c++{
        sort.Sort(&diag{mat, 0,c})
    }
    return mat
}

// diagonal starting at r,c
type diag struct {
    a [][]int
    r,c int
}

func (d *diag)Less(i,j int)bool {
    return d.a[d.r+i][d.c+i] < d.a[d.r+j][d.c+j]
}

func (d *diag)Swap(i,j int) {
    d.a[d.r+i][d.c+i], d.a[d.r+j][d.c+j] = d.a[d.r+j][d.c+j], d.a[d.r+i][d.c+i]
}

func (d *diag)Len()int{
    dr := len(d.a) - d.r
    dc := len(d.a[0]) - d.c
    if dr<dc {
        return dr
    }
    return dc
}
```