# Easy 2760

**Author:** Farruhbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5749229/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5749229/)

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
func longestAlternatingSubarray(nums []int, threshold int) int {
	maxLength := 0
	n := len(nums)

	for i := 0; i < n; i++ {
		// Subarray faqat juft raqamdan boshlanishi kerak
		if nums[i]%2 == 0 && nums[i] <= threshold {
			// O'ngga kengaytiramiz va alternatsiyalangan juft/toqlikni tekshiramiz
			length := 1
			for j := i + 1; j < n && nums[j] <= threshold && nums[j]%2 != nums[j-1]%2; j++ {
				length++
			}
			// Maksimal uzunlikni yangilaymiz
			if length > maxLength {
				maxLength = length
			}
		}
	}

	return maxLength
}
```