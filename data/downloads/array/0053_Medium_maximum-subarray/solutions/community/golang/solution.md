# Go 4 ms 100.00% easy code

**Author:** shikuan
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/290007/](https://leetcode.com/problems/maximum-subarray/solutions/290007/)

---

```
func maxSubArray(nums []int) int {
	max, sum := nums[0],nums[0]
	for _, v := range nums[1:] {
		if sum < 0 {
			sum = v
		} else {
			sum += v
		}
		if max < sum {
			max = sum
		}
	}
	return max
}
```