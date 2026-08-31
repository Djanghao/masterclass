# 👍Runtime 6 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/5365681/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/5365681/)

---

# Code
```
func minOperations(nums []int) int {
	n := len(nums)
	c := 0
	for _, num := range nums {
		if num == 1 {
			c++
		}
	}
	if c > 0 {
		return n - c
	}
	ans := math.MaxInt32
	for i := 0; i < n; i++ {
		num := nums[i]
		for j := i + 1; j < n; j++ {
			num = gcd(num, nums[j])
			if num == 1 {
				ans = min(ans, j-i)
				break
			}
		}
		if num != 1 {
			break
		}
	}
	if ans == math.MaxInt32 {
		return -1
	}
	return n - 1 + ans
}

func gcd(a, b int) int {
	if a == 0 {
		return b
	}
	return gcd(b%a, a)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```