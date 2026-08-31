# Go - Simple Solutions (0ms, 3MB)

**Author:** imkk000
**Votes:** 3
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/2396515/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/2396515/)

---

```go
func cellsInRange(s string) []string {
    // pre allocate result
    res := make([]string, (s[3]-s[0]+1)*(s[4]-s[1]+1))
    var i int
    for c := s[0]; c <= s[3]; c++ {
        for r := s[1]; r <= s[4]; r++ {
            res[i] = string([]byte{c, r})
            i++
        }
    }
    
    return res
}
```