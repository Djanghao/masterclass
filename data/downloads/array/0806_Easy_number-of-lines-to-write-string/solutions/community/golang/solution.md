# Simple Solution

**Author:** Sap1k
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5226207/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5226207/)

---

```
func numberOfLines(widths []int, s string) []int {
    curSum, row := 0, 1
    for i := range s {
        curSum += widths[s[i] - 'a']
        if curSum > 100 {
            row ++
            curSum = widths[s[i] - 'a']
        }
    }
    return []int{row, curSum}
}
```