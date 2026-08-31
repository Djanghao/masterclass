# 🔥 GO FAST 🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 1
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3675901/](https://leetcode.com/problems/tallest-billboard/solutions/3675901/)

---

# \uD83D\uDD25 3 Solutions \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08

## Solution - 1 Depth First Search


## Explanation


1. It first calculates the sum of all the rods and initializes a dynamic programming array, `dp`, of size `sum + 1` to store the maximum height achievable for each possible difference.

2. The `dp` array is filled with initial values of -1 for all indices except for `dp[0]`, which is set to 0 since a difference of 0 corresponds to a height of 0.

3. The code then iterates through each rod in the input array, creating a copy of the `dp` array at the beginning of each iteration.

4. For each rod, it further iterates from 0 to `sum - rod` and checks if `dpCopy[i]` is a valid value (not -1).

5. If `dpCopy[i]` is valid, it updates `dp[i + rod]` by taking the maximum value between the current `dp[i + rod]` and `dpCopy[i]`, which represents the maximum height achievable with the current rod added to the previous height.

6. It also updates `dp[abs(-i+rod)]` (corresponding to the absolute difference between the current rod and the previous height) by taking the maximum value between the current `dp[abs(-i+rod)]` and `dpCopy[i] + min(i, rod)`. This update considers two scenarios: either the current rod is used to extend the height of the billboard (`dpCopy[i] + rod`) or it is used to reduce the height (`dpCopy[i] + i`).

7. After iterating through all the rods, the algorithm returns `dp[0]`, which represents the maximum achievable height for a billboard with a difference of 0.


## Complexities:

The space complexity of this algorithm is O(sum), where sum represents the sum of all the rods. It is determined by the size of the `dp` array.

The time complexity is O(n * sum), where n is the number of rods and sum is the sum of all the rods. The outer loop iterates through each rod, and the inner loop iterates from 0 to `sum - rod`. Overall, the algorithm visits each possible state once and performs constant time operations for each state, resulting in a quadratic time complexity.

```go
func tallestBillboard(rods []int) int {
	sum := 0
	for _, rod := range rods {
		sum += rod
	}

	dp := make([]int, sum+1)
	for i := range dp {
		dp[i] = -1
	}
	dp[0] = 0

	for _, rod := range rods {
		dpCopy := make([]int, len(dp))
		copy(dpCopy, dp)

		for i := 0; i <= sum-rod; i++ {
			if dpCopy[i] < 0 {
				continue
			}

			dp[i+rod] = max(dp[i+rod], dpCopy[i])

			dp[abs(-i+rod)] = max(dp[abs(-i+rod)], dpCopy[i]+min(i, rod))
		}
	}

	return dp[0]
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

func abs(n int) int {
	if n < 0 {
		return -n
	} else {
		return n
	}
}

func min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}
```

## Solution - 2 HashMap

```go
func tallestBillboard(rods []int) int {
	mapCache := make(map[string]int)
	sum := 0
	for _, rod := range rods {
		sum += rod
	}
	return helper(rods, 0, 0, sum, mapCache)
}

func helper(rods []int, index, diff, sum int, cache map[string]int) int {
	if index == len(rods) {
		if diff == 0 {
			return 0
		} else {
			return -2147483648
		}
	}

	key := fmt.Sprintf("%d+%d", index, diff)

	if val, ok := cache[key]; ok {
		return val
	}

	exclude := helper(rods, index+1, diff, sum, cache)
	taller := helper(rods, index+1, diff+rods[index], sum, cache) + rods[index]
	shorter := helper(rods, index+1, diff-rods[index], sum, cache)

	maxHeight := max(exclude, max(taller, shorter))

	cache[key] = maxHeight
	return maxHeight
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
```

## Solution - 3 Dynamic Programming

```go
func tallestBillboard(rods []int) int {
	dp := map[int]int{0: 0}

	for _, r := range rods {
		newDp := make(map[int]int)

		for diff, taller := range dp {
			shorter := taller - diff

			newTaller := newDp[diff+r]
			if newTaller < taller+r {
				newTaller = taller + r
			}
			newDp[diff+r] = newTaller

			newDiff := abs(shorter+r-taller)
			newTaller2 := max(shorter+r, taller)

			if newTaller2 > newDp[newDiff] {
				newDp[newDiff] = newTaller2
			}
		}

		for k, v := range newDp {
			dp[k] = max(dp[k], v)
		}
	}

	return dp[0]
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
```
## [GitHub](https://github.com/ayoubzulfiqar/leetcode)