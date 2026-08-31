# Go | Two Frogs | O(n), O(1)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/5387640/](https://leetcode.com/problems/frog-jump-ii/solutions/5387640/)

---

# Approach
Two Frogs, one for going forward, the other for going backward.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
## Go
``` Go
func maxJump(nums []int) int {
	n := len(nums)

	fi := []int{0, 0}
	idx := 0
	res := 0

	for i := 1; i < n; i++ {
		res = max(res, nums[i]-nums[fi[idx]])
		fi[idx] = i
		idx ^= 1
	}
	res = max(res, nums[n-1]-nums[fi[idx]])

	return res
}
```