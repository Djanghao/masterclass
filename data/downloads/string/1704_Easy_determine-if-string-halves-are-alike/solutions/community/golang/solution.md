# Go 0ms, 2.2MB 100%/100% so far

**Author:** vashik
**Votes:** 12
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/989824/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/989824/)

---

```
func halvesAreAlike(s string) bool {
    half := len(s) / 2
    ctr := 0
    for i,r := range s {
        switch r {
            case 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U':
                if i < half {
                    ctr++
                } else {
                    ctr--
                }
        }
    }
    return ctr == 0
}
```