# [Golang] Simple solution using Prefix Sum

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/4397845/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/4397845/)

---

# Code
```
func sameEndSubstringCount(s string, queries [][]int) []int {
  n := len(s)
  res := make([]int, len(queries))
  psum := make([][26]int, len(s)+1)
  for i := 1; i <= n; i++ {
    psum[i] = psum[i-1]
    psum[i][s[i-1] - 'a']++
  }
  for i := 0; i < len(queries); i++ {
    var ses int
    start, end := queries[i][0], queries[i][1]
    for i := 0; i < 26; i++ {
      c := psum[end+1][i] - psum[start][i]
      ses += c * (c + 1) / 2
    }
    res[i] = ses
  }
  return res
}
```