# Go, binary search

**Author:** viktor_komarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/3699780/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/3699780/)

---

# Code
```
func missingNumber(arr []int) int {
	first, last := arr[0], arr[len(arr)-1]
	d := (last - first) / (len(arr))

	left, right := 0, len(arr)-1
	for left+1 < right {
		mid := left + (right-left)/2
		if first+d*mid != arr[mid] {
			right = mid
		} else {
			left = mid
		}
	}

	return arr[left] + d
}

```