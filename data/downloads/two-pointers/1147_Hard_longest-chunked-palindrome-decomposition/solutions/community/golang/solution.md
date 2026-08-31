# [Golang] Using Z-functions DP

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3574849/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3574849/)

---

# Intuition
We can use the Z function to efficiently identify the shortest suffix that is also a prefix of a particular string.

# Code
```
func longestDecomposition(text string) int {
  return dp(text)
}

func dp(s string) int {
  if len(s) == 0 {
    return 0
  }
  // Using Z functions check for prefix
  z := make([]int, len(s))
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
  i := len(s)-1
  sublen := 0
  for i >= 0 {
    if i + z[i] == len(s) {
      sublen = z[i]
      break
    }
    i--
  }
  // No substring match. Z[0] is undefined
  if i == -1 {
    return 1
  }
  return 2 + dp(s[sublen:len(s)-sublen])
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```