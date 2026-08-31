# Easy idiomatic Go solution. Beats 100%. 0ms

**Author:** evleria
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1155210/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1155210/)

---

```
func constructArray(n int, k int) []int {
	result := make([]int, 0, n)
	left, right := 1, n
	for ; left < n-k; left++ {
		result = append(result, left)
	}
	for i := 0; i <= k; i++ {
		if i%2 == 0 {
			result, left = append(result, left), left+1
		} else {
			result, right = append(result, right), right-1
		}
	}

	return result
}
```