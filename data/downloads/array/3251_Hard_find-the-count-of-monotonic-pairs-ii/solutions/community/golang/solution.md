# [Golang] DP and Prefix Sums easy to understand.

**Author:** anhtuanhoang0921
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5624063/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5624063/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
### 1. Dynamic Programming Arrays:
dp and dp2 arrays are used to keep track of the number of valid sequences up to the current element.

### 2. Prefix Sums:
The dp array is updated with prefix sums to allow efficient computation of valid sequences.

### 3. Transition Logic:
The transition between dp and dp2 handles the constraints given by x and y values in the input array v.

### 4. Final Summation:
The result is calculated by summing up all values in the dp array after processing all elements in the input array.

# Complexity
- Time complexity: O(N\u2217S)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(S)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const (
	S   = 1001
	MOD = 1000000007
)

func countOfPairs(nums []int) int {
	dp := make([]int, S)
	dp2 := make([]int, S)
	for i := 0; i <= nums[0]; i++ {
		dp[i] = 1
	}
	for i := 1; i < len(nums); i++ {
		x := nums[i-1]
		y := nums[i]
		for j := 1; j < S; j++ {
			dp[j] += dp[j-1]
			if dp[j] >= MOD {
				dp[j] -= MOD
			}
		}
		for j := 0; j <= y; j++ {
			p := min(j, x+j-y)
			dp2[j] = 0
			if p >= 0 {
				dp2[j] = dp[p]
			}
		}
		for j := y + 1; j < S; j++ {
			dp2[j] = 0
		}
		dp, dp2 = dp2, dp
	}
	var rs int
	for i := 0; i < S; i++ {
		rs += dp[i]
		if rs >= MOD {
			rs -= MOD
		}
	}
	return rs
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```