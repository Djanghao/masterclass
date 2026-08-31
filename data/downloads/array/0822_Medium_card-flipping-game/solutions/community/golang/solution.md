# [Golang] Simple solution

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/2875326/](https://leetcode.com/problems/card-flipping-game/solutions/2875326/)

---

```go
func flipgame(fronts []int, backs []int) int {
  // If a number that appears on both sides of the card, that number
  // can't be a good integer. We need to get all doubleside numbers
  // Then the result is any other small number that is not a doubleside number.
  doubleSide := make(map[int]bool)
  for i := 0; i < len(fronts); i++ {
    if fronts[i] == backs[i] {
      doubleSide[fronts[i]] = true
    }
  }
  res := math.MaxInt32
  for i := 0; i < len(fronts); i++ {
    if !doubleSide[fronts[i]] {
      res = min(res, fronts[i])
    }
    if !doubleSide[backs[i]] {
      res = min(res, backs[i])
    }
  }
  if res == math.MaxInt32 {
    return 0
  }
  return res
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```