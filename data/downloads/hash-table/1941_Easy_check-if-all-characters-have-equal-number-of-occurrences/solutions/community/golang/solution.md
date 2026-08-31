# Go | Time: O(n) / 0 ms / 100% | Space: O(1) / 2.3 MB / 89.74%

**Author:** aristorinjuang
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1545908/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1545908/)

---

```
func areOccurrencesEqual(s string) bool {
    count, prev := make(map[rune]int), 0
    
    for _, l := range s {
        count[l]++
    }
    
    for _, v := range count {
        switch {
        case prev <= 0:
            prev = v
        case prev != v:
            return false
        }
    }

    return true
}
```