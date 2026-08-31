# Golang | 19ms | 100%

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5817801/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5817801/)

---

# Code
```golang []
package main

import (
	"math"
)

var flag bool
var dp [1e4 + 1][11]int
var stack = [1e5][2]int{}

func minimumValueSum(nums []int, andValues []int) int {
	m := len(nums)
	n := len(andValues)

	if !flag {
		for i := 1; i <= 1e4; i++ {
			dp[i][0] = math.MaxInt
		}
		flag = true
	}

	for c := 1; c <= n; c++ {
		targetAnd := andValues[c-1]

		l, r := 0, 0
		stackSize := 0

		for i := c; i <= (m - (n - c)); i++ {
			dp[i][c] = math.MaxInt
			minimumCost := math.MaxInt
			num := nums[i-1]

			stack[stackSize][0], stack[stackSize][1] = num, i
			stackSize++

			if num == targetAnd {
				minimumCost = dp[i-1][c-1]
			}

			// Adding subArray AND ending at i. Using subArray AND ending at i-1
			// stack[i][0] = subArray AND
			// stack[i][1] = start index of the subArray.
			// If we find 2 subArrays AND's we keep index for which dp[index-1][c-1] is minimum.

			for x := l; x < r; x++ {
				a := stack[x][0]
				start := stack[x][1]

				subarrayAnd := a & num

				if subarrayAnd == stack[stackSize-1][0] {
					if dp[start-1][c-1] < dp[stack[stackSize-1][1]-1][c-1] {
						stack[stackSize-1][1] = start
					}
				} else {
					stack[stackSize][0], stack[stackSize][1] = subarrayAnd, stack[x][1]
					stackSize++
				}

				if stack[stackSize-1][0] == targetAnd {
					minimumCost = min(minimumCost, dp[stack[stackSize-1][1]-1][c-1])
				}
			}

			if minimumCost != math.MaxInt {
				dp[i][c] = minimumCost + num
			}

			l, r = r, stackSize
		}
	}

	if dp[m][n] == math.MaxInt {
		return -1
	}

	return dp[m][n]
}

```