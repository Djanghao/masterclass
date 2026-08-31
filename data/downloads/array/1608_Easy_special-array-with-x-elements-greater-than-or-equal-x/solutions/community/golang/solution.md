# GO O(N)

**Author:** flk_go
**Votes:** 2
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/1147673/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/1147673/)

---

```
func specialArray(nums []int) int {
	var mp [1001]int
	for i := 0; i < len(nums); i++ {
		mp[nums[i]]++
	}
	var cnt int
	for i := 1000; i > 0; i-- {
		cnt += mp[i]
		if cnt == i {
			return i
		}
	}
	return -1
}
```