# Golang | Bitmask

**Author:** user4863og
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123581/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123581/)

---

```
package main

import (
	"math"
	"math/bits"
)

var dp [1 << 8]int

func findMinimumTime(strengths []int, K int) int {
	n := len(strengths)

	for i := 1; i < 1<<n; i++ {
		dp[i] = math.MaxInt
	}

	for mask := uint(0); mask < 1<<n; mask++ {
		broken := bits.OnesCount(mask)

		for i, strength := range strengths {
			if mask&(1<<i) == 1 {
				continue
			}

			X := 1 + K*broken
			T := (strength + X - 1) / X

			dp[mask|(1<<i)] = min(dp[mask|(1<<i)], T+dp[mask])
		}
	}

	return dp[(1<<n)-1]
}

```