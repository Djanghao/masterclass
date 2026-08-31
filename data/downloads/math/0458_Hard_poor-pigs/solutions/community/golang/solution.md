# Golang solution beats 100%

**Author:** JieBai
**Votes:** -1
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/936520/](https://leetcode.com/problems/poor-pigs/solutions/936520/)

---


```
func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
    testRound := minutesToTest / minutesToDie
    testGroup := testRound + 1
    res := int(math.Ceil(math.Log(float64(buckets)) / math.Log(float64(testGroup))))
    return res
}
```