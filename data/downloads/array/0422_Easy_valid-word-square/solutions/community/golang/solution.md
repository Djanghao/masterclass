# Go iterating matrix backwards (fastest lengths mismatch detection)

**Author:** agilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/3645939/](https://leetcode.com/problems/valid-word-square/solutions/3645939/)

---

```
func validWordSquare(words []string) bool {

    for i := len(words) - 1; i >= 0; i-- {
        for k := len(words[i]) - 1; k >= 0; k-- {
            if len(words) <= k || len(words[k]) <= i || words[i][k] != words[k][i] {
                return false
            }
        }
    }
    
    return true
}
```