# GoLang solution

**Author:** stshmakov
**Votes:** 4
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/1114323/](https://leetcode.com/problems/to-lower-case/solutions/1114323/)

---

```
func toLowerCase(str string) string {
    s := make([]rune, len(str))
    i := 0
    for _, r := range str {
        if r >= 'A' && r <= 'Z' {
             s[i] = r + rune(32)
        } else {
            s[i] = r
        }
       
        i++
    }
    return string(s)
}
```