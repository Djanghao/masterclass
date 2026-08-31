# Golang DP

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5785221/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5785221/)

---

```
package main

var frequencies = make([]int, 'z'+1)
var dp = make([]int, 1e3+1)

func minimumSubstringsInPartition(s string) int {
	n := len(s)
	dp[0] = 0

	for i := 1; i <= n; i++ {
		clear(frequencies)

		dp[i] = dp[i-1] + 1
		maxFreq, distinct := 0, 0

		for j := i; j > 0; j-- {
			ch := s[j-1]

			if frequencies[ch] == 0 {
				distinct++
			}

			frequencies[ch]++
			maxFreq = max(maxFreq, frequencies[ch])

			if i-j+1 == maxFreq*distinct {
				dp[i] = min(dp[i], dp[j-1]+1)
			}
		}
	}
	return dp[n]
}

```