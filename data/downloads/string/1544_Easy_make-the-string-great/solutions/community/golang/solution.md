# Golang | Stack

**Author:** tw13
**Votes:** 5
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/2790918/](https://leetcode.com/problems/make-the-string-great/solutions/2790918/)

---

```
func makeGood(s string) string {
    bytes := make([]byte, 0)
    for i, _ := range s {
        n := len(bytes)
        if n > 0 && (bytes[n-1] == s[i] - 'a' + 'A' || bytes[n-1] == s[i] - 'A' + 'a') {
            bytes = bytes[:n-1]
        } else {
            bytes = append(bytes, s[i])
        }
    }
    return string(bytes)
}
```