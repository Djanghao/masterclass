# Linear solution

**Author:** AxDI
**Votes:** 1
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/4360597/](https://leetcode.com/problems/grid-illumination/solutions/4360597/)

---

# Code
```
func lines(i, j, n int) (int, int, int, int){
    return j, i, i-j+n-1, i+j
}

func gridIllumination(n int, lamps [][]int, queries [][]int) []int {
    on := make(map[int]bool)

    xl := make(map[int]int)
    yl := make(map[int]int)
    d1l := make(map[int]int)
    d2l := make(map[int]int)

    turn := func(i, j int, state bool){
        if on[i*n+j] == state{
            return
        }
        a := 1
        if !state{
            a = -1
        }
        on[i*n+j] = state
        x, y, d1, d2 := lines(i, j, n)
        xl[x] += a
        yl[y] += a
        d1l[d1] += a
        d2l[d2] += a
    }

    off := func(i, j int){
        if i < 0 || j < 0 || i >= n || j >= n{
            return
        } 
        turn(i, j, false)
    }

    for _, v := range lamps{
        turn(v[0], v[1], true)
    }
    res := make([]int, len(queries))
    for i, v := range queries{
        x, y, d1, d2 := lines(v[0], v[1], n)
        if xl[x] > 0 || yl[y] > 0 || d1l[d1] > 0 || d2l[d2] > 0{
            res[i] = 1
        }
        for j := -1; j < 2; j++{
            for k := -1; k < 2; k++{
                off(v[0]+j, v[1]+k)
            }
        }
    }
    return res
}
```