# golang | binary search solution | golang is fucking awesome!

**Author:** booooooooom
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/2107927/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/2107927/)

---

```
func minArea(image [][]byte, x int, y int) int {
    rows, cols := len(image), len(image[0])
    
    left := sort.Search(y, func(i int) bool {
        for j := 0; j < rows; j++ {
            if image[j][i] == '1' {
                return true
            }
        }
        return false
    })
    
    right := y + 1 + sort.Search(cols - 1 - y, func(i int) bool {
        for j := 0; j < rows; j++ {
            if image[j][i + y + 1] == '1' {
                return false
            }
        }
        return true
    })
    
    top := sort.Search(x, func(i int) bool {
        for j := 0; j < cols; j++ {
            if image[i][j] == '1' {
                return true
            }
        }
        return false
    })
    
    bottom := x + 1 + sort.Search(rows - 1 - x, func(i int) bool {
        for j := 0; j < cols; j++ {
            if image[i + x + 1][j] == '1' {
                return false
            }
        }
        return true
    })
    
    
    return (bottom - top) * (right - left)
}
```