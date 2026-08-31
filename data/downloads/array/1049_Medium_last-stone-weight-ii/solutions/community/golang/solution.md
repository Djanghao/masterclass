# DP - Beats 95% (1ms)

**Author:** Shchelokovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/5297986/](https://leetcode.com/problems/last-stone-weight-ii/solutions/5297986/)

---

# Approach
It's actually classic knapsack problem with knapsack capacity of (all stones) / 2 - we split all stones into two heaps as even as possible and then return the difference between these heaps.

# Complexity
- Time complexity:
$$O(stones*capacity)$$

- Space complexity:
$$O(capacity)$$

# Code
```
func lastStoneWeightII(stones []int) int {
	allStonesWeight := 0
	for _, s := range stones {
		allStonesWeight += s
	}

	capacity := allStonesWeight / 2

	currRow := make([]int, capacity+1)
	prevRow := make([]int, capacity+1)
	for _, s := range stones {
		for cap := 1; cap <= capacity; cap++ {
			if s <= cap {
				currRow[cap] = max(s+prevRow[cap-s], prevRow[cap])
			} else {
				currRow[cap] = prevRow[cap]
			}
		}
		currRow, prevRow = prevRow, currRow
    }

	res := 2 * (capacity - prevRow[capacity])
	if allStonesWeight%2 != 0 {
		res++
	}
	return res
}
```