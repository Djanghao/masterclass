# Go Binary Search Solution

**Author:** evleria
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/1437460/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/1437460/)

---

```
func findMin(nums []int) int {
	left, right := 0, len(nums)-1
	for left < right {
		mid := (left + right) / 2
		if nums[mid] > nums[right] {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return nums[left]
}
```