# Go

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4813295/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4813295/)

---

![Screen Shot 2024-03-02 at 7.20.36 PM.png](./images/0.png)


# Code
```
func findColumnWidth(grid [][]int) []int {

	col_widths := make([]int, len(grid[0]))

	for _, row := range grid {

		for col_num, val := range row {

			col_len := len(strconv.Itoa(val))
			if col_widths[col_num] < col_len {
				col_widths[col_num] = col_len
			}
		}
	}
	return col_widths
}
```