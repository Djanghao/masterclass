# Go solution 100% space and time

**Author:** user0440H
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1766438/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1766438/)

---

```
func isPrefixString(s string, words []string) bool {
  pos := 0 // holds the position in string s
  for i := 0; i < len(words) && pos < len(s); i++ {
    // If the next prefix word is bigger than the remaining characters, it is not a prefix
    if len(s)-pos < len(words[i]) {
      return false
    }
    for j := 0; j < len(words[i]) && pos < len(s); j++ {
      if s[pos] != words[i][j] {
        return false
      }
      pos++
    }
  }
  return pos == len(s)
}
```