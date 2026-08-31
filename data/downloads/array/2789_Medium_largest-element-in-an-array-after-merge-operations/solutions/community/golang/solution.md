# Golang solution

**Author:** yunshi
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/4873378/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/4873378/)

---



# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxArrayValue(nums []int) int64 {
	max, prev := 0, 0
	for i := len(nums) - 1; i >= 0; i-- {
		if prev >= nums[i] {
			prev += nums[i]
		} else {
			prev = nums[i]
		}
		if prev > max {
			max = prev
		}
	}
	return int64(max)
}
```