# 0ms

**Author:** vedantkarandikar
**Votes:** 0
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4063127/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4063127/)

---

# Code
```
func multiply(mat1 [][]int, mat2 [][]int) [][]int {
    out := make([][]int, len(mat1))
    for i := range out {
        out[i] = make([]int, len(mat2[0]))
    }
    for k1, v1 := range mat1 {
        for i := 0; i < len(mat2[0]); i++ {
            for k2, v2 := range v1 {
                if v2 == 0 {
                    continue
                }
                out[k1][i] += v2 * mat2[k2][i]
            }
        }
    }
    return out
}
```