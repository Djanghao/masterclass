# [Go] Solution BFS || 100% memory || 90+% runtime

**Author:** user9647qb
**Votes:** 7
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2835220/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2835220/)

---

# Code
```
func nearestExit(maze [][]byte, entrance []int) int {
	q := [][2]int{{entrance[0], entrance[1]}}
	m, n := len(maze), len(maze[0])
	maze[entrance[0]][entrance[1]] = '+'

	steps := 0
	for len(q) > 0 {
		for _, v := range q {
			q = q[1:]
			if (v[0] == m-1 || v[1] == n-1 || v[0] == 0 || v[1] == 0) && !(v[0] == entrance[0] && v[1] == entrance[1]) {
				return steps
			}
			for _, div := range [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
				x, y := v[0]+div[0], v[1]+div[1]
				if x >= 0 && y >= 0 && x < m && y < n && maze[x][y] != '+' {
					q = append(q, [2]int{x, y})
					maze[x][y] = '+'
				}
			}
		}
		steps++
	}
	return -1
}

```