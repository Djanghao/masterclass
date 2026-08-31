# Golang 53 ms 8.39 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290767/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290767/)

---

```
func maximumElementAfterDecrementingAndRearranging(arr []int) int {
	sort.Ints(arr)
	result := 1
	for i := 1; i < len(arr); i++ {
		if arr[i] > result {
			result++
		}
	}
	return result
}
```