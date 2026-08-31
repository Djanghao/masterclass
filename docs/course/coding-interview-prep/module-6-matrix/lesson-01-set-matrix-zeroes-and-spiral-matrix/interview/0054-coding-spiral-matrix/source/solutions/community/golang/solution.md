# Go solution || TC: O(m*n)

**Author:** maxyzli
**Votes:** 18
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/329836/](https://leetcode.com/problems/spiral-matrix/solutions/329836/)

---

```go
func spiralOrder(matrix [][]int) []int {
	if matrix == nil || len(matrix) == 0 {
		return []int{}
	}

	result := make([]int, 0)
	top, bottom, left, right := 0, len(matrix)-1, 0, len(matrix[0])-1

	for {
		// right
		for i := left; i <= right; i++ {
			result = append(result, matrix[top][i])
		}
		top++
		if top > bottom {
			break
		}

		// down
		for i := top; i <= bottom; i++ {
			result = append(result, matrix[i][right])
		}
		right--
		if left > right {
			break
		}

		// left
		for i := right; i >= left; i-- {
			result = append(result, matrix[bottom][i])
		}
		bottom--
		if top > bottom {
			break
		}

		// up
		for i := bottom; i >= top; i-- {
			result = append(result, matrix[i][left])
		}
		left++
		if left > right {
			break
		}
	}

	return result
}
```

