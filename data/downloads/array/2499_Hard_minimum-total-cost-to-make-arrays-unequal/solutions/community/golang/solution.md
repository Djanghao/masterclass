# 👌Runtime 106 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/5025830/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/5025830/)

---

# Code
```
func minimumTotalCost(nums1 []int, nums2 []int) int64 {
	var sum int64 = 0
	var maxCount, maxVal, totalCount, needSwap int

	counter := make([]int, len(nums1)+1)

	for i := 0; i < len(nums1); i++ {
		if nums1[i] == nums2[i] {
			sum += int64(i)
			totalCount++
			counter[nums1[i]]++

			if counter[nums1[i]] > maxCount {
				maxCount = counter[nums1[i]]
				maxVal = nums1[i]
			}
		}
	}

	needSwap = (maxCount << 1) - totalCount

	for i := 0; i < len(nums1) && needSwap > 0; i++ {
		if nums1[i] != nums2[i] && nums1[i] != maxVal && nums2[i] != maxVal {
			needSwap--
			sum += int64(i)
		}
	}

	if needSwap > 0 {
		return -1
	}
	return sum
}
```