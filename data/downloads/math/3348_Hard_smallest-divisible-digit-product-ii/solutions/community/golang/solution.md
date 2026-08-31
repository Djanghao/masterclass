# this wasn't fun

**Author:** Aglo
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-ii/solutions/6041413/](https://leetcode.com/problems/smallest-divisible-digit-product-ii/solutions/6041413/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
package main

import (
	"strings"
)

func smallestNumber(num string, t int64) string {
	// Helper function for GCD
	var gcd func(int64, int64) int64
	gcd = func(a, b int64) int64 {
		if a == 0 {
			return b
		}
		return gcd(b%a, a)
	}

	// Helper function to compare strings
	check := func(a, b string) bool {
		if len(a) > len(b) {
			return true
		}
		if len(a) < len(b) {
			return false
		}
		return a > b
	}

	n := len(num)
	remind := make([]int64, n+1)
	remind[0] = t
	end := n

	// First pass: calculate reminders
	for i := 0; i < n; i++ {
		if num[i] == '0' {
			end = i + 1
			break
		}
		remind[i+1] = remind[i] / gcd(remind[i], int64(num[i]-'0'))
	}
	if end == n && remind[n] == 1 {
		return num
	}

	// Convert num to byte slice for easier manipulation
	numBytes := []byte(num)

	// Try incrementing digits
	for i := end - 1; i >= 0; i-- {
		for numBytes[i] < '9' {
			tt := remind[i]
			numBytes[i]++
			tt /= gcd(tt, int64(numBytes[i]-'0'))

			for j := n - 1; j > i; j-- {
				for k := 9; k > 0; k-- {
					if tt%int64(k) == 0 {
						tt /= int64(k)
						numBytes[j] = byte('0' + k)
						break
					}
				}
			}
			if tt == 1 {
				return string(numBytes)
			}
		}
	}

	// If no solution found above, try constructing from factors
	var res strings.Builder
	for i := 9; t > 1 && i > 1; i-- {
		for t%int64(i) == 0 {
			res.WriteByte(byte('0' + i))
			t /= int64(i)
		}
	}
	if t != 1 {
		return "-1"
	}

	// Reverse the result
	resStr := []byte(res.String())
	for i, j := 0, len(resStr)-1; i < j; i, j = i+1, j-1 {
		resStr[i], resStr[j] = resStr[j], resStr[i]
	}
	result := string(resStr)

	if check(result, num) {
		return result
	}
	if len(result) == len(num) {
		return "1" + result
	}

	dif := len(num) - len(result)
	ones := strings.Repeat("1", dif)
	if check(ones+result, num) {
		return ones + result
	}
	return strings.Repeat("1", dif+1) + result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

```