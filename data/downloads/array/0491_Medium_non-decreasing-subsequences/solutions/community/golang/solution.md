# 40ms Golang recursion + backtracking

**Author:** akshaypatange
**Votes:** 3
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/1502764/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/1502764/)

---

```
func findSubsequences(nums []int) [][]int {
	res := [][]int{}
	var find func(int, []int)
	find = func(i int, list []int) {
		if len(list) > 1 {
			cp := make([]int, len(list))
			copy(cp, list)
			res = append(res, cp)
		}
		vis := map[int]bool{}
		for j := i; j < len(nums); j++ {
			if (i > 0 && nums[j] < nums[i-1]) || vis[nums[j]] {
				continue
			}
			vis[nums[j]] = true
			find(j+1, append(list, nums[j]))
		}
	}
	find(0, []int{})
	return res
}
```