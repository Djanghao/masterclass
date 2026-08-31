# 👍Runtime 36 ms  Beats 90.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/5182495/](https://leetcode.com/problems/remove-boxes/solutions/5182495/)

---

# Code
```
func removeBoxes(boxes []int) int {
	dp := make([][][]int, len(boxes))
	for i := range dp {
		dp[i] = make([][]int, len(boxes))
		for j := range dp[i] {
			dp[i][j] = make([]int, len(boxes))
		}
	}
	return dfs(boxes, 0, len(boxes)-1, 0, dp)
}

func dfs(boxes []int, start, end, prefix int, dp [][][]int) int {
	if start > end {
		return 0
	}
	if start == end {
		return (prefix + 1) * (prefix + 1)
	}
	if dp[start][end][prefix] != 0 {
		return dp[start][end][prefix]
	}

	res := 0
	count := 0
	index := start
	for index <= end && boxes[index] == boxes[start] {
		index++
		count++
	}
	newStart := index
	res = (count + prefix) * (count + prefix) + dfs(boxes, newStart, end, 0, dp)

	for index <= end {
		if boxes[index] == boxes[start] && boxes[index-1] != boxes[start] {
			res = max(res, dfs(boxes, newStart, index-1, 0, dp)+dfs(boxes, index, end, count+prefix, dp))
		}
		index++
	}
	dp[start][end][prefix] = res
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```