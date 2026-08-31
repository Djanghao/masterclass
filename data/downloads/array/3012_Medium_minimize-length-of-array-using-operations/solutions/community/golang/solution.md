# [Go] O(n*log n) Shrinking Window Approach

**Author:** andrewsaputra
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4599300/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4599300/)

---

There are other faster solutions. Sharing this as an alternative approach I attempted without hints.

# Approach
<!-- Describe your approach to solving the problem. -->
Concepts :
- Sort the input array.
- Maintain left and right position markers. Left marker represents current smallest element, right marker represents current largest element.
- Guaranteed `nums[right] % nums[left] < nums[left]` as long as `mod result != 0`. In this case, we shrink the right marker and update nums[left] to mod result (new smallest value).
- Guaranteed `nums[left] % nums[right] == nums[left]` as long as `nums[left] != nums[right]`. In this case only right markers need to be shrinked.
- If `mod result == 0` is unavoidable, shrink both left and right markers and increment the result.
- Lastly, don't forget to account for scenario where there is a single leftover element left in the array since there won't be any element pair left for mod operation with it.

# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumArrayLength(nums []int) int {
	sort.Ints(nums)

	result := 0
	left, right := 0, len(nums)-1
	for left < right {
		mod := nums[right] % nums[left]
		if mod == 0 {
			mod = nums[left] % nums[right]
		}

		if mod == 0 {
			result++
			left++
			right--
		} else {
			nums[left] = mod
			right--
		}
	}

	if left == right {
		result++
	}

	return result
}
```