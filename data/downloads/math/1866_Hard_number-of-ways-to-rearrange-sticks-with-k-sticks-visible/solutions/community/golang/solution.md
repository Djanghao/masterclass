# Go use DP

**Author:** khangtn1
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2850134/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2850134/)

---

# Complexity
- Time complexity: $$O(n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
package main

import (
	"fmt"
	"math"
)

func rearrangeSticks(n int, k int) int {
	if n == k {
		return 1
	}

	if k > n {
		return 0
	}

	dp := make([][]int, n+1)
	for i := n; i >= 0; i-- {
		dp[i] = make([]int, k+1)
	}

	MOD := int(math.Pow10(9) + 7)
	dp[1][1] = 1
	for i := 2; i <= n; i++ {
		for j := 1; j <= k; j++ {
			dp[i][j] = dp[i-1][j-1] + (i-1)*dp[i-1][j]
			dp[i][j] %= MOD
		}
	}

	return dp[n][k] % MOD
}

```