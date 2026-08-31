# Straight Approach In Golang

**Author:** robinjoseph1998
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5911202/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5911202/)

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
func findSubarrays(nums []int) bool {
	sumMap := make(map[int]int)
	for i := 1; i < len(nums); i++ {
		sum := nums[i] + nums[i-1]
		sumMap[sum]++

		if sumMap[sum] == 2 {
			return true
		}
	}
	return false
}
```