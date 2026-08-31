# Go | Binary Search | O(nlogn+nlogd), O(1)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5357720/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5357720/)

---

# Complexity
- Time complexity: $$O(nlogn+nlogd)$$
    - $$n$$: Length of array
    - $$d$$: Difference between maximum and minimum numbers

- Space complexity: $$O(1)$$ 

# Code
## Go
``` Go
func maximumTastiness(nums []int, k int) int {
	n := len(nums)

	sort.Ints(nums)

	start, end := 0, nums[n-1]-nums[0]
	res := 0
	var mid int
	var matched bool
	for start <= end {
		mid = (start + end) / 2
		matched = match(nums, mid, k)
		if matched {
			res = mid
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return res
}

func match(nums []int, target, k int) bool {
	n := len(nums)

	k--

	prev := nums[0]
	for i := 0; k > 0 && i < n; i++ {
		if nums[i]-prev >= target {
			prev = nums[i]
			k--
		}
	}
	return k <= 0
}
```