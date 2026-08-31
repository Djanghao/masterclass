# One pass with golang

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/2462092/](https://leetcode.com/problems/positions-of-large-groups/solutions/2462092/)

---

```
func largeGroupPositions(s string) [][]int {
    s = s + " "
    
    var res [][]int
    
    left := 0
    
    for right := 1; right < len(s); right ++ {
        if s[right] != s[right-1] {
            if right - left >= 3 {
                res = append(res, []int{left, right-1})
            }
            
            left = right
        }
    }
    
    return res
}
```