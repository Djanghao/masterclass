# Go 100% time and 100% space | O(n)

**Author:** Dexes
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1663211/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1663211/)

---

```
func check(nums []int) bool {
	i := 1
	for ; i < len(nums) && nums[i-1] <= nums[i]; i++ {
	}

	if i == len(nums) {
		return true
	}

	for i++; i < len(nums) && nums[i-1] <= nums[i]; i++ {
	}

	return i == len(nums) && nums[i-1] <= nums[0]
}
```