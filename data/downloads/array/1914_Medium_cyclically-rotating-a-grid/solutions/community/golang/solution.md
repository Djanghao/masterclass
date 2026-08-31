# Golang simulation

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1318201/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1318201/)

---

```go
func rotateGrid(grid [][]int, k int) [][]int {
	m := len(grid)
	n := len(grid[0])
	rotate := make([][]int, len(grid))
	for i := range rotate {
		rotate[i] = make([]int, len(grid[0]))
	}
	baseX, baseY := 0, 0
	for m > 0 && n > 0 {
		circle := (m+n-2)*2
		move := k % circle
		for i := 0; i < circle; i++ {
			x1, y1 := getDest(m, n, i)
			x2, y2 := getDest(m, n, (i+move)%circle)
			rotate[x2+baseX][y2+baseY] = grid[x1+baseX][y1+baseY]
		}
		m -= 2
		n -= 2
		baseX += 1
		baseY += 1
	}
	return rotate
}

func getDest(m, n, step int) (int, int) {
	if step <= m-1 {
		return step, 0
	}
	if step <= m-1+n-1 {
		return m-1, step-(m-1)
	}
	if step <= m-1+n-1+m-1 {
		return (m-1)-(step-(m-1)-(n-1)), n-1
	}
	return 0, (m+n-2)*2-step
}
```