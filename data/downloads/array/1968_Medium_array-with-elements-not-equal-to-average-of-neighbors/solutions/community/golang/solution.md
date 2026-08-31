# Very simple solution 80% speed and 80% memory

**Author:** sylkas
**Votes:** 2
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/3102991/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/3102991/)

---

# Intuition
This solution relies on the fact that average of 2 numbers is always between the range of those numbers, if we sort our array and then swap the higher boundary with the middle value then we can be sure that, there will be no such element

# Approach
1. Sort an array, to make it more predictable
2. Create a window and iterate through whole array
3. Check if middle number is in between bigger numbers, if yes replace higher boundary with middle element

# Complexity
- Time complexity:
O(nlogn) - Sorting

- Space complexity:
O(1)

# Code
```
func rearrangeArray(nums []int) []int {
	sort.Ints(nums)

	for i := 1; i < len(nums)-1; i++ {
		if nums[i-1] < nums[i] && nums[i] < nums[i+1] {
			nums[i], nums[i+1] = nums[i+1], nums[i]
		}
	}
	return nums
}
```