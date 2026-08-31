# 👍Runtime 2 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/5503627/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/5503627/)

---

# Code
```
var ans int

func tilingRectangle(n int, m int) int {
	ans = math.MaxInt32
	rect := make([][]bool, n)
	for i := range rect {
		rect[i] = make([]bool, m)
	}
	dfs(0, 0, rect, 0)
	return ans
}

func dfs(r, c int, rect [][]bool, cnt int) {
	n := len(rect)
	m := len(rect[0])

	if cnt >= ans {
		return
	}

	if r >= n {
		ans = cnt
		return
	}

	if c >= m {
		dfs(r+1, 0, rect, cnt)
		return
	}

	if rect[r][c] {
		dfs(r, c+1, rect, cnt)
		return
	}

	for k := min(n-r, m-c); k >= 1 && isAvailable(rect, r, c, k); k-- {
		cover(rect, r, c, k)
		dfs(r, c+1, rect, cnt+1)
		uncover(rect, r, c, k)
	}
}

func isAvailable(rect [][]bool, r, c, k int) bool {
	for i := 0; i < k; i++ {
		for j := 0; j < k; j++ {
			if rect[r+i][c+j] {
				return false
			}
		}
	}
	return true
}

func cover(rect [][]bool, r, c, k int) {
	for i := 0; i < k; i++ {
		for j := 0; j < k; j++ {
			rect[r+i][c+j] = true
		}
	}
}

func uncover(rect [][]bool, r, c, k int) {
	for i := 0; i < k; i++ {
		for j := 0; j < k; j++ {
			rect[r+i][c+j] = false
		}
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```