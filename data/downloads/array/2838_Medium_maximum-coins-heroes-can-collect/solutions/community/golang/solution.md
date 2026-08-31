# [Golang] Sorting + Two Pointers

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3987736/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3987736/)

---

# Code
```
func maximumCoins(heroes []int, monsters []int, coins []int) []int64 {
  ans := make([]int64, len(heroes))
  // Sort heroes in ascending order
  heroPairs := make([][2]int, len(heroes))
  for i := 0; i < len(heroes); i++ {
    heroPairs[i] = [2]int{i, heroes[i]}
  }
  sort.Slice(heroPairs, func(i, j int) bool {
    return heroPairs[i][1] < heroPairs[j][1]
  })
  monsterPairs := make([][2]int, len(monsters))
  for i := 0; i < len(monsters); i++ {
    monsterPairs[i] = [2]int{monsters[i], coins[i]}
  }
  // Sort monsters by their power
  sort.Slice(monsterPairs, func(i, j int) bool {
    return monsterPairs[i][0] < monsterPairs[j][0]
  })
  var curr int64
  var i, j int
  for i = 0; i < len(heroPairs); i++ {
    // If the current hero can defeat a monster, all future heroes can defeat
    // the monster as well since we have the heroes sorted by their power.
    for j < len(monsterPairs) && monsterPairs[j][0] <= heroPairs[i][1] {
      curr += int64(monsterPairs[j][1])
      j++
    }
    ans[heroPairs[i][0]] = curr
  }
  return ans
}
```