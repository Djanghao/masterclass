# My solution in Go with explanation

**Author:** bhargavsnv100
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/1328347/](https://leetcode.com/problems/decode-ways-ii/solutions/1328347/)

---

Code
====

```go
func numDecodings(s string) int {
	M := 1000000007
	n := len(s)

	dp := make([]int, n+1)

	dp[0] = 1
	if string(s[0]) == "*" {
		dp[1] = 9
	} else {
		if string(s[0]) == "0" {
			dp[1] = 0
		} else {
			dp[1] = 1
		}
	}

	for i := 1; i < n; i++ {
		num := string(s[i])

		if num == "*" {
			// Using star as an individual digit
			dp[i+1] = 9 * dp[i] % M

			// Using * in combination with previous digit
			if string(s[i-1]) == "1" {

				// If preceeding digit is 1, there are 9 additional
				// ways to to form 2 digit decodings (11-19)

				dp[i+1] = (dp[i+1] + 9*dp[i-1]) % M

			} else if string(s[i-1]) == "2" {

				// If preceeding digit is 1, there are 6 additional
				// ways to to form 2 digit decodings (21-16)

				dp[i+1] = (dp[i+1] + 6*dp[i-1]) % M

			} else if string(s[i-1]) == "*" {

				// If preceeding digit is 1, there are 9 + 6 additional
				// ways to to perform last 2 digit decodings

				dp[i+1] = (dp[i+1] + 15*dp[i-1]) % M

			}
		} else {
			// Using the individual digit, there are i-1
			// ways to perform single digit decoding
			if num != "0" {
				dp[i+1] = dp[i]
			}

			if string(s[i-1]) == "1" || string(s[i-1]) == "2" && num <= "6" {

				// If preceeding digit is 1, we have an additional
				// i-2 ways of decoding (last 2 digits as one letter)

				// Along with the existing i-1 ways of decoding with
				// last digit as one letter

				dp[i+1] = (dp[i+1] + dp[i-1]) % M

			} else if string(s[i-1]) == "*" {

				// If the preceeding digit is  * and the current digit is
				// less than 6, additonal of 2 * i-2 ways are possible:
				// (1x, 2x) where x is current digit

				// If x is > 6, we can have an additional of i-2 ways (1x)

				if num <= "6" {
					dp[i+1] = (dp[i+1] + 2*dp[i-1]) % M
				} else {
					dp[i+1] = (dp[i+1] + dp[i-1]) % M
				}
			}
		}
	}

	return dp[n]

}
```
