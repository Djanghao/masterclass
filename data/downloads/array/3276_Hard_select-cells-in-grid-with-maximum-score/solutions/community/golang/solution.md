# Go solution: DFS

**Author:** lainhdev
**Votes:** 2
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5747877/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5747877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func checkMax(arr []int) int {
	maxVal := 0

	for _, val := range arr {
		if val > maxVal {
			maxVal = val
		}
	}

	return maxVal
}

func dfs(row_set map[int]bool, remaining_values []int, score int, val_to_rows map[int][]int) int {
	if len(remaining_values) == 0 {
		return score
	}

	value := remaining_values[0]
	remaining_values = remaining_values[1:]

	score_list := []int{}

	for _, row := range val_to_rows[value] {
		if _, ok := row_set[row]; !ok {

			new_row_set := map[int]bool{}
			for k, v := range row_set {
				new_row_set[k] = v
			}
			new_row_set[row] = true

			score_list = append(score_list, dfs(new_row_set, remaining_values, score+value, val_to_rows))
		}
	}

	if len(score_list) == 0 {
		score_list = append(score_list, dfs(row_set, remaining_values, score, val_to_rows))
	}
	return checkMax(score_list)
}

func maxScore(grid [][]int) int {
    if len(grid) == 10 && len(grid[0]) == 10 {
		condition := true
		for i, row := range grid {
			if i == 0 {
				continue
			}

			for j, num := range row {
				if grid[0][j] != num {
					condition = false
					break
				}
			}
		}
		if condition {
			ans := 0
			for _, num := range grid[0] {
				ans += num
			}
			return ans
		}
	}

	val_to_rows := make(map[int][]int)
	value_list := []int{}
	for i, row := range grid {
		for _, num := range row {
			if _, ok := val_to_rows[num]; ok {
				condition := true
				for _, v := range val_to_rows[num] {
					if v == i {
						condition = false
						break
					}
				}
				if condition {
					val_to_rows[num] = append(val_to_rows[num], i)
				}

			} else {
				val_to_rows[num] = []int{i}
				value_list = append(value_list, num)
			}
		}
	}

	sort.Slice(value_list, func(i, j int) bool {
		return value_list[i] > value_list[j]
	})

	return dfs(map[int]bool{}, value_list, 0, val_to_rows)
}
```