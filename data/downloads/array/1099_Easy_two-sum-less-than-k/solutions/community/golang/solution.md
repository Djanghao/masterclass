# Go - Easy

**Author:** P_A_R_U_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/5449617/](https://leetcode.com/problems/two-sum-less-than-k/solutions/5449617/)

---

# Code
```
func twoSumLessThanK(nums []int, k int) int {
	result := -1
	sort.Ints(nums)

	for l, r := 0, len(nums)-1; l < r; {
		sum := nums[l] + nums[r]
		if sum < k {
			if result < sum {
				result = nums[l] + nums[r]
			}

			l++
		} else {
			r--
		}
	}

	return result
}

```