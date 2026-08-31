# Straight Soultion In GO

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4683422/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4683422/)

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
	sum := 0
	for i := 0; i < len(nums)-2; i++ {
		for j := i + 1; j < len(nums)-1; j++ {
			for k := j + 1; k < len(nums); k++ {
				total := (nums[i] - nums[j]) * nums[k]
				if total > sum {
					sum = total
				}
			}
		}
	}
	return int64(sum)
}
```