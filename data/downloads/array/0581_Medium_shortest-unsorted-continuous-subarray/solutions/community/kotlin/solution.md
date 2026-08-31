# Kotlin Clean Two Pointers Solution

**Author:** taobit
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/707508/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/707508/)

---

```
class TwoPointers {
	fun findUnsortedSubarray(nums: IntArray): Int {
		var left = 0;	var right = nums.lastIndex

		while (left < nums.lastIndex && nums[left] <= nums[left + 1]) {
			left++
		}
		if (left == nums.lastIndex)	return 0
		while (right > 0 && nums[right] >= nums[right - 1]) {
			right--
		}

		var max = Int.MIN_VALUE;	var min = Int.MAX_VALUE
		for (i in left .. right) {
			max = maxOf(max, nums[i])
			min = minOf(min, nums[i])
		}

		while (left > 0 && nums[left - 1] > min) {
			left--
		}
		while (right < nums.lastIndex && nums[right + 1] < max) {
			right++
		}


		return right - left + 1
	}
}
```