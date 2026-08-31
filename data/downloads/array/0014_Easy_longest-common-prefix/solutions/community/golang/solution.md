# Simple Go solution

**Author:** cteea
**Votes:** 44
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/1517792/](https://leetcode.com/problems/longest-common-prefix/solutions/1517792/)

---

```
func longestCommonPrefix(strs []string) string {
    p := strs[0]
    for _, s := range strs {
        i := 0
        for ; i < len(s) && i < len(p) && p[i] == s[i]; i++ {}
        p = p[:i]
    }
    return p
}
```