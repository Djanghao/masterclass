# [Golang] Enumeration BFS

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/3768243/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/3768243/)

---

# Code
```
func findInteger(k int, digit1 int, digit2 int) int {
  if digit1 == 0 && digit2 == 0 {
    return -1
  }   
  if digit2 < digit1 {
    return findInteger(k, digit2, digit1) // ensure digit1 < digit2
  }
  // We're going to enumerate all integers that only use digit1 and digit2 and find the first one that
  // satisfies the conditions
  var curr []int
  // Don't include 0 as the single digit because k >= 1
  if digit1 > 0 {
    curr = append(curr, digit1)
  }
  if digit2 > 0 {
    curr = append(curr, digit2)
  }
  for len(curr) > 0 {
    var next []int
    for _, num := range curr {
      if num > k && num%k == 0 {
        return num
      }
      if num*10 + digit1 <= math.MaxInt32 {
        next = append(next, num*10 + digit1)
      }
      if num*10 + digit2 <= math.MaxInt32 {
        next = append(next, num*10 + digit2)
      }
    }
    curr = next
  }
  return -1
}
```