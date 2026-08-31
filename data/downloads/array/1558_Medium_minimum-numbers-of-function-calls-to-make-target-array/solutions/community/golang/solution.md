# Go | Count Bit | O(nlogM), O(1)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/5366793/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/5366793/)

---

# Complexity
$$n$$: Length of $$nums$$
$$M$$: Maximum number in $$nums$$
- Time complexity: $$O(nlogM)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
## Go
``` Go
func minOperations(nums []int) int {
	res := 0
	maxn := 0
	for i := range nums {
		maxn = max(maxn, nums[i])
		for nums[i] > 0 {
			nums[i] &= (nums[i] - 1)
			res++
		}
	}
	for maxn > 1 {
		maxn >>= 1
		res++
	}
	return res
}
```