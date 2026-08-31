# binary search

**Author:** Alex0M
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/3849569/](https://leetcode.com/problems/fixed-point/solutions/3849569/)

---

# Complexity
- Time complexity:
O(logN)

- Space complexity:
O(1)

# Code
```
func fixedPoint(arr []int) int {
	left := 0
	right := len(arr) - 1
	res := -1

	for left <= right {
		mid := (left + right) / 2
		if arr[mid] == mid {
			res = mid
            //keep looking for smaller index on the left part
			right = mid - 1
		} else if arr[mid] < mid {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return res
}
```