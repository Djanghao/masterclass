# Golang | O(N) | Count (group by shift move)

**Author:** linhduong
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1666195/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/1666195/)

---

```
func canConvertString(s string, t string, k int) bool {
    if len(s) != len(t) {
        return false
    }
    
    count := make([]int, 26)
    for i := range s {
        var d byte
        if s[i] <= t[i] {
            d = t[i] - s[i]
        } else {
            d = t[i] + 26 - s[i]
        }
        
        if int(d) > k {
            return false
        }
        
        count[d]++
    }
    
    for i := 1; i < 26; i++ {
        if count[i] > 0 {
            if max := i + int(count[i] - 1) * 26; max > k {
                return false
            }
        }
    } 
    
    return true
}
```