# GO

**Author:** Saravanakumar1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5890792/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5890792/)

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
func getFinalState(nums []int, k int, multiplier int) []int {
    index := 0
	value := 0
	for i := 0; i < k; i++ {

		value = nums[0]
		index = 0

		for j := 1; j < len(nums); j++ {

			if value > nums[j] {
				index = j
				value = nums[j]
			}
		}
		nums[index] = value * multiplier

	}

	return nums
}
```