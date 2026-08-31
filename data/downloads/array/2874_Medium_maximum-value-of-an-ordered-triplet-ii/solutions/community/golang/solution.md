# GO | Linear time and linear space

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/5198122/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/5198122/)

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
func maximumTripletValue(nums []int) int64 {
	prefixMax, suffixMax := make([]int, len(nums)), make([]int, len(nums))
	preMax, sufMax := 0, 0
	for i, j := 0, len(nums)-1; i < len(nums) && j >= 0; i, j = i+1, j-1 {
		if preMax < nums[i] {
			preMax = nums[i]
		}
		if sufMax < nums[j] {
			sufMax = nums[j]
		}
		prefixMax[i] = preMax
		suffixMax[j] = sufMax
	}
	var ans int64
	for i := 1; i < len(nums)-1; i++ {
		if ans < int64(prefixMax[i-1]-nums[i])*int64(suffixMax[i+1]) {
			ans = int64(prefixMax[i-1]-nums[i]) * int64(suffixMax[i+1])
		}
	}
	return ans
}
```