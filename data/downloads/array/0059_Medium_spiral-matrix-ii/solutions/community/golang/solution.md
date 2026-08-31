# [Golang] simple solution with rotation

**Author:** oizg
**Votes:** 5
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/1941009/](https://leetcode.com/problems/spiral-matrix-ii/solutions/1941009/)

---

We basically need to walk through the matrix, changing direction if we either a) got out of bounds, or b) got previously filled cell.

```go
func generateMatrix(n int) [][]int {
    res := make([][]int, n)
    for i := 0; i < n; i++ { res[i] = make([]int, n) }
    
    dirs := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
    
    i, j, d := 0, 0, 0 
    for k := 1; k <= n*n; k++ {
        res[i][j] = k
        
        di, dj := dirs[d%4][0], dirs[d%4][1]
        if i+di < 0 || i+di >= n || j+dj < 0 || j+dj >= n || res[i+di][j+dj] != 0 {
            d++
            di, dj = dirs[d%4][0], dirs[d%4][1]
        }
        
        i, j = i+di, j+dj
    }
    
    return res
}
```