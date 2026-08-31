# Golang two pointer solution with quick explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/1251127/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/1251127/)

---

This is solution is pretty simple:

* We first sort `nums`
* Then we loop through `0` to the mid (From `0` to `len(nums) / 2 - 1`)
* Then we check whether `nums[i] + nums[len(nums) - i - 1]` is greater than `res` (Note: `nums[i]` is the left pointer and `nums[len(nums) - i - 1]` is the right).

```
func minPairSum(nums []int) int {
	sort.Ints(nums)
	res := 0
	for i := 0; i < len(nums)/2; i++ {
		if nums[i] + nums[len(nums) - i - 1] > res {
			res = nums[i] + nums[len(nums) - i - 1]
		}
	}
	return res
}
```