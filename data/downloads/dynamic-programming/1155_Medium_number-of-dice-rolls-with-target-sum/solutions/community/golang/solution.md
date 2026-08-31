# Go solution, DP with cache

**Author:** krokop
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2654789/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2654789/)

---

```
func dp(n int, k int, target int, cache map[[2]int]int) int {
	validCombination := 0
	cacheKey := [2]int{n, target}
	if val, ok := cache[cacheKey]; ok {
		return val
	}
	for i := 1; i <= k; i++ {
		if target-i == 0 && n == 1 {
			validCombination++
		}
		if target-i > 0 && n > 1 {
			validCombination += dp(n-1, k, target-i, cache)
		}
	}
	validCombination = validCombination % 1000000007
	cache[cacheKey] = validCombination
	return validCombination
}

func numRollsToTarget(n int, k int, target int) int {
	var cache = make(map[[2]int]int)
	return dp(n, k, target, cache)
}
```