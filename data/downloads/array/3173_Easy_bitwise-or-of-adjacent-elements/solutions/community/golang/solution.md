# ✅ 3173. Bitwise OR of Adjacent Elements

**Author:** tekashi
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5660816/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5660816/)

---

# Code
```golang []
func orArray(nums []int) []int {
	result := make([]int, len(nums)-1)
	for i := 0; i < len(nums)-1; i++ {
		result[i] = nums[i+1] | nums[i]
	}
	return result
}
```