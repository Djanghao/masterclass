# [Golang] Permutation

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/3770862/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/3770862/)

---

# Code
```
func nextBeautifulNumber(n int) int {
  // With these combinations, we have to generate the smallest number with the
  // right digits.
  // For n, the next bigger balanced number will have the same number of digits or
  // just one more digit. For 1, 22. For 99, 122.
  if n == 0 {
    return 1
  }
  combinations := map[int][][]int{
    2: {{2, 2}},
    3: {{1, 2, 2}, {3, 3, 3}},
    4: {{1, 3, 3, 3}, {4, 4, 4, 4}},
    5: {{1, 4, 4, 4, 4}, {2, 2, 3, 3, 3}, {5, 5, 5, 5, 5}},
    6: {{1, 2, 2, 3, 3, 3}, {1, 5, 5, 5, 5, 5}, {2, 2, 4, 4, 4, 4}, {6, 6, 6, 6, 6, 6}},
    7: {{1, 2, 2, 4, 4, 4, 4}, {1, 6, 6, 6, 6, 6, 6}, {2, 2, 5, 5, 5, 5, 5},
        {3, 3, 3, 4, 4, 4, 4}, {7, 7, 7, 7, 7, 7, 7}},
  }
  // fmt.Println(combinations)
  var numDigits int
  for num := n; num > 0; num /= 10 {
    numDigits++
  }
  res := math.MaxInt32
  for _, comb := range combinations[numDigits] {
    backtrack(comb, 0, (1 << numDigits) - 1, n, &res)
  }
  if res == math.MaxInt32 && numDigits+1 <= 7 {
    for _, comb := range combinations[numDigits+1] {
      backtrack(comb, 0, (1 << (numDigits+1))-1, n, &res)
    }
  }
  return res
}

func backtrack(comb []int, curr int, used int, num int, res *int) {
  if used == 0 {
    if curr > num {
      *res = min(*res, curr)
    }
  }
  for i := 0; i < len(comb); i++ {
    if used & (1 << i) != 0 {
      backtrack(comb, curr*10 + comb[i], used ^ (1 << i), num, res)
    }
  }
}  

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```