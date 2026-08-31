# very simple 5 line solution

**Author:** mcdroid
**Votes:** 6
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/654014/](https://leetcode.com/problems/excel-sheet-column-number/solutions/654014/)

---

```
func titleToNumber(s string) int {
    col := 0
    
    for _, char := range s {
        col *= 26
        col += int(char - 'A') + 1
    }
    
    return col
}
```