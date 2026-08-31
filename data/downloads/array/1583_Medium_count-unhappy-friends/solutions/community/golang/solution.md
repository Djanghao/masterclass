# [Golang] Map better candidates and check condition

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/2851810/](https://leetcode.com/problems/count-unhappy-friends/solutions/2851810/)

---

```go
func unhappyFriends(n int, preferences [][]int, pairs [][]int) int {
  // Let's make a pair map for easier access of pairs
  pairMap := make(map[int]int)
  for _, pair := range pairs {
    pairMap[pair[0]] = pair[1]
    pairMap[pair[1]] = pair[0]
  }
  // Let's compute the better candidates for each person than their current pair
  better := make([]map[int]bool, n)
  for i := 0; i < n; i++ {
    better[i] = make(map[int]bool)
    for j := 0; j < len(preferences[i]) && preferences[i][j] != pairMap[i]; j++ {
      better[i][preferences[i][j]] = true
    }
  }
  var res int
  // Now we'll go through everyone and find if any of them are unhappy
  for i := 0; i < n; i++ {
    for b := range better[i] {
      // i prefers b over his current pair and b prefers i over his current pair
      if better[b][i] {
        res++
        break
      }     
    }
  }
  return res
}
```