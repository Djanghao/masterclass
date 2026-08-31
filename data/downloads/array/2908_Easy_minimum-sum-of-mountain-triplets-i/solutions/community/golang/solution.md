# Straight Approach In GO

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4707826/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4707826/)

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

func minimumSum(nums []int) int {
	result := math.MaxInt64
	for i := 0; i <= len(nums)-2; i++ {
		for j := i + 1; j <= len(nums)-1; j++ {
			for k := j + 1; k < len(nums); k++ {
				if nums[i] < nums[j] && nums[j] > nums[k] {
					sum := nums[i] + nums[j] + nums[k]
					if sum < result {
						result = sum
					}
				}
			}
		}
	}
	if result == math.MaxInt64 {
		return -1
	}
	return result
}

```