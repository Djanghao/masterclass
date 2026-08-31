# Golang Two Pointer Solution, Highly Readable

**Author:** rafee
**Votes:** 4
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/647345/](https://leetcode.com/problems/interval-list-intersections/solutions/647345/)

---

```
func intervalIntersection(A [][]int, B [][]int) [][]int {
	result := make([][]int, 0)
	for i, j := 0, 0; i < len(A) && j < len(B); {
		start, end := getInterval(A[i], B[j])
		if start <= end {
			result = append(result, []int{start, end})
		}
		if A[i][1] == end {
			i++
		}
		if B[j][1] == end {
			j++
		}
	}
	return result
}

func getInterval(A []int, B []int) (int, int) {
	start := max(A[0], B[0])
	end := min(A[1], B[1])
	return start, end
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}
```