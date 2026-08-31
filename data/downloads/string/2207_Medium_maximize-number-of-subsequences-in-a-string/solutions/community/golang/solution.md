# [Golang] Greedy solution

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3892974/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3892974/)

---

# Code
```
func maximumSubsequenceCount(text string, pattern string) int64 {
  var a, b int
  // We keep track of a (pattern[0]) and b (pattern[1]) and join
  // a and b
  for i := 0; i < len(text); i++ {
    if text[i] == pattern[1] {
      b++
    }
  }
  max := b
  var res int64
  for i := 0; i < len(text); i++ {
    if text[i] == pattern[1] {
      b--
    }
    if text[i] == pattern[0] {
      a++
      res += int64(b)
    }
    if a > max {
      max = a
    }
  }
  // It is always optimal to either add the first character in the front or the
  // last character in the end. We do that based on the maximum occurrence of either a or b
  return res + int64(max)
}
```