# Golang Solution

**Author:** hailcaesar
**Votes:** 4
**Link:** [https://leetcode.com/problems/partition-labels/solutions/613800/](https://leetcode.com/problems/partition-labels/solutions/613800/)

---

```
import "fmt"

func max(x, y int) int {
 if x > y {
   return x
 }
 return y
}

func partitionLabels(S string) []int {
    last_idx := make(map[rune]int)
    
    for idx, c := range(S) {
        last_idx[c] = idx
    }
    
    var start int
    var end int
    var ans []int
    for idx, _ := range(S) {
        end = max(end, last_idx[rune(S[idx])])
        if idx == end {
            ans = append(ans, idx - start + 1)
            start = idx + 1
        }
    }
    return ans
}
```