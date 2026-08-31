# GO | Using Hint | Beats 100%

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5759189/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5759189/)

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
func findMaximumScore(nums []int) int64 {
	maxScore := int64(0)
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[j] > nums[i] {
				maxScore += int64(nums[i]) * int64(j-i)
				i = j - 1
				break
			}
			if j == len(nums)-1 {
				maxScore += int64(nums[i]) * int64(j-i)
				i = j
			}
		}
	}
	return maxScore
}

// TLE
// func findMaximumScore(nums []int) int64 {
// 	memo := make([]int64, len(nums))
// 	for idx := range memo {
// 		memo[idx] = -1
// 	}
// 	return solve(0, nums, &memo)
// }

// func solve(idx int, nums []int, memo *[]int64) int64 {
// 	if idx >= len(nums)-1 {
// 		return 0
// 	}
// 	if (*memo)[idx] != -1 {
// 		return (*memo)[idx]
// 	}
// 	maxScore := int64(math.MinInt32)
// 	for j := idx + 1; j < len(nums); j++ {
// 		maxScore = max(maxScore, (int64(nums[idx])*int64(j-idx))+solve(j, nums, memo))
// 	}
// 	(*memo)[idx] = maxScore
// 	return (*memo)[idx]
// }
```