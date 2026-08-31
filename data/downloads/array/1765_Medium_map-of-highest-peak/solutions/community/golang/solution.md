# 👍Runtime 251 ms Beats 50.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/5015495/](https://leetcode.com/problems/map-of-highest-peak/solutions/5015495/)

---

# Code
```
var dRow = []int{-1, 1, 0, 0}
var dCol = []int{0, 0, -1, 1}

func highestPeak(isWater [][]int) [][]int {
	m, n := len(isWater), len(isWater[0])
	heights := make([][]int, m)
	for i := range heights {
		heights[i] = make([]int, n)
	}

	queue := make([][2]int, 0)
	for row := 0; row < m; row++ {
		for col := 0; col < n; col++ {
			if isWater[row][col] == 1 {
				queue = append(queue, [2]int{row, col})
			}
		}
	}

	for len(queue) > 0 {
		arr := queue[0]
		queue = queue[1:]

		row, col := arr[0], arr[1]
		for i := 0; i < 4; i++ {
			adjR, adjC := row+dRow[i], col+dCol[i]
			if adjR >= 0 && adjC >= 0 && adjR < m && adjC < n && isWater[adjR][adjC] == 0 {
				heights[adjR][adjC] = heights[row][col] + 1
				isWater[adjR][adjC] = 1
				queue = append(queue, [2]int{adjR, adjC})
			}
		}
	}

	return heights
}
```