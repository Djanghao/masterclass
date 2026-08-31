# Go O(n) time and space solution using prefix/postfix sum

**Author:** firas5445
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-game/solutions/5553694/](https://leetcode.com/problems/grid-game/solutions/5553694/)

---

# Code
```
func gridGame(grid [][]int) int64 {
	// setup postfix and prefix arrays
	n := len(grid[0])
	prefix, postfix := make([]int64, n), make([]int64, n)
	row0, row1 := grid[0], grid[1]
	for i := 1; i < n; i++ {
		j := n - 1 - i
		prefix[i], postfix[j] = prefix[i-1]+int64(row1[i-1]), postfix[j+1]+int64(row0[j+1])

	}
	// actual logic, by checking every time the min points if robot2 plays optimally
	var res int64 = math.MaxInt64
	for robot1DownIdx := 0; robot1DownIdx < n; robot1DownIdx++ {
		res = min(res, max(postfix[robot1DownIdx], prefix[robot1DownIdx]))
	}
	return res
}
```