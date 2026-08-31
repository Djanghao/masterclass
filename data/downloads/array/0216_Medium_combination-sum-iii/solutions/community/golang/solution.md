# Golang 0ms

**Author:** harshawasthi90
**Votes:** 4
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/1686893/](https://leetcode.com/problems/combination-sum-iii/solutions/1686893/)

---

```
func combinationSum3(k int, n int) [][]int {
	ans := make([][]int, 0)
	current := make([]int, k)

	dfs216(&ans, current, n, k-1, 1)

	return ans
}
```

```
func dfs216(ans *[][]int, current []int, target, index, start int) {
	if index < 0 {
		if target == 0 {
			*ans = append(*ans, append([]int{}, current...))
		}
		return
	}

	for i := start; i <= 9 && target >= i; i++ {
		current[index] = i
		dfs216(ans, current, target-i, index-1, i+1)
	}
}
```