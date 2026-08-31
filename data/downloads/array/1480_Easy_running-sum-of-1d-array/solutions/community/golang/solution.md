# [Golang] Faster than 100% submissions o(n)

**Author:** yakomisar
**Votes:** 19
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2330765/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2330765/)

---

```
func runningSum(nums []int) []int {
    for i := 1; i < len(nums); i++ {
	    nums[i] = nums[i] + nums[i-1]
	}
	return nums
}
```