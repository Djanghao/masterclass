# Recursive backtracking Golang solution

**Author:** noblsd
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/4102796/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/4102796/)

---

# Code
```
func generatePalindromes(s string) []string {
  counts := map[string]int{}
  for i := range s {
    counts[s[i:i+1]]++
  }
  odd := ""
  for k, v := range counts {
    if v % 2 == 1 {
      if odd != "" {
        return []string{}
      }
      odd = k
    }
  }
  if odd == "" {
    return helper(counts, "", "")
  }
  counts[odd]--
  if counts[odd] == 0 {
    delete(counts, odd)
    return helper(counts, "", odd)
  } else {
    return helper(counts, "", odd)
  }
}

func helper(counts map[string]int, curr string, middle string) []string {
  if len(counts) == 0 {
    return []string{curr[:len(curr)/2] + middle + curr[len(curr)/2:]}
  }
  res := []string{}
  for k := range counts {
    next := copyM(counts)
    next[k] -= 2
    if next[k] == 0 {
      delete(next, k)
    }
    res = append(res, helper(next, k + curr + k, middle)...)
  }
  return res
}

func copyM[K comparable, V any](m map[K]V) map[K]V {
  res := map[K]V{}
  for k, v := range m {
    res[k] = v
  }
  return res
}
```