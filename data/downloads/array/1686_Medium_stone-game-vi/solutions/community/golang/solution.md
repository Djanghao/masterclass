# Golang 34ms beat 100% solution

**Author:** yuisofull
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/5945480/](https://leetcode.com/problems/stone-game-vi/solutions/5945480/)

---

# Code
```golang []
func stoneGameVI(aliceValues []int, bobValues []int) int {
	index := make([]int, len(aliceValues))
	for i := range index {
		index[i] = i
	}
	sort.Slice(index, func(i, j int) bool {
		return aliceValues[index[i]]+bobValues[index[i]] > aliceValues[index[j]]+bobValues[index[j]]
	})
	var res int
	for i, v := range index {
		res += ((i+1)%2)*aliceValues[v] - (i%2)*bobValues[v]
	}
	if res > 0 {
		return 1
	}
	if res == 0 {
		return 0
	}
	return -1
}
```