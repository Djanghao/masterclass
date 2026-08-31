# Go rotate and compare

**Author:** dchooyc
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/2094894/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/2094894/)

---

```
func findRotation(mat [][]int, target [][]int) bool {
    for i := 0; i < 4; i++ {
        if isEqual(mat, target) {
            return true
        } else {
            mat = rotate(mat)
        }
    }
    
    return false
}

func rotate(m [][]int) [][]int {
    res := [][]int{}
    
    for i := 0; i < len(m); i++ {
        newRow := []int{}
        
        for j := len(m) - 1; j >= 0; j-- {
            newRow = append(newRow, m[j][i])
        }
        
        res = append(res, newRow)
    }
    
    return res
}

func isEqual(m, t [][]int) bool {
    for i := 0; i < len(m); i++ {
        for j := 0; j < len(m); j++ {
            if m[i][j] != t[i][j] {
                return false
            }
        }
    }
    
    return true
}
```