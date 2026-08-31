# Go solution || Beat 100% Time and Memory || Sliding window

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4991171/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4991171/)

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
```
func minOperations(nums []int) int {
	slices.Sort(nums)
	var n = len(nums)
	nums = slices.Compact(nums)
	var ans, left int
	for i, num := range nums {
		for nums[left] < num-n+1 {
			left++
		}
		ans = max(ans, i-left+1)
	}
	return n - ans
}
```