# Golang O(n)/O(n) solution

**Author:** rison
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3887877/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3887877/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findPrefixScore(nums []int) []int64 {
	prevMax := nums[0]
	ans := make([]int64, len(nums))
	ans[0]=int64(nums[0]*2)
	for i := 1; i < len(nums); i++ {
		prevMax = max(nums[i], prevMax)
		ans[i] = int64(nums[i] + prevMax)+ans[i-1]
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```