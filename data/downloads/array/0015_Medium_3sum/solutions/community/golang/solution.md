# Go 768 ms, faster than 100.00%

**Author:** shikuan
**Votes:** 28
**Link:** [https://leetcode.com/problems/3sum/solutions/295224/](https://leetcode.com/problems/3sum/solutions/295224/)

---

```
func threeSum(nums []int) [][]int {
	var results [][]int
	sort.Ints(nums)
	for i := 0; i < len(nums)-2; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue//To prevent the repeat
		}
		target, left, right := -nums[i], i+1, len(nums)-1
		for left < right {
			sum := nums[left] + nums[right]
			if sum == target {
				results = append(results, []int{nums[i], nums[left], nums[right]})
				left++
				right--
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			} else if sum > target {
				right--
			} else if sum < target {
				left++
			}
		}
	}
	return results
}
```