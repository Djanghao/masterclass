# [Golang] Z function

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3577857/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3577857/)

---

# Intuition

Z-functions are used for efficient pattern matching. The value Z[i] tells the length of the prefix starting at i-th position is also the prefix of the string.

# Approach

Simply compute the Z-function for the given string and sum up all the values. One caveat is that the value `z[0]` is undefined in the Z algorithm but we set it to the length of the string to compute the score asked for in the question.

# Code
```
func sumScores(s string) int64 {
  var res int64
  z := zfunction(s)
  for i := 0; i < len(z); i++ {
    res += int64(z[i])
  }
  return res
}

func zfunction(s string) []int {
  z := make([]int, len(s))
  z[0] = len(s)
  l, r := 0, 0
  for i := 1; i < len(s); i++ {
    if i < r {
      z[i] = min(r - i, z[i - l])
    }
    for i+z[i] < len(s) && s[z[i]] == s[i+z[i]] {
      z[i]++
    }
    if i + z[i] > r {
      l = i
      r = i+z[i]
    }
  }
  return z
}

func min(a,b int) int {
  if a < b {
    return a
  }
  return b
}
```