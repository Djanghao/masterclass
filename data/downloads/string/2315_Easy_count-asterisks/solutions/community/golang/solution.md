# Go xor

**Author:** dchooyc
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2272171/](https://leetcode.com/problems/count-asterisks/solutions/2272171/)

---

```
func countAsterisks(s string) int {
    res, pipe := 0, 0
    
    for _, v := range s {
        if v == '|' {
            pipe ^= 1
        }
        
        if v == '*' && pipe == 0 {
            res++
        }
    }
    
    return res
}
```