# Go. Golang.

**Author:** baba_dro
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1605602/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1605602/)

---

```
func minCost(startPos []int, homePos []int, rowCosts []int, colCosts []int) int {
	colChangeCost, rowChangeCost := 0, 0
	startCol, finishCol := startPos[1], homePos[1]
	startRow, finishRow := startPos[0], homePos[0]

	for col := startCol; col != finishCol; {
		if startCol < finishCol {
			col++
		} else {
			col--
		}

		colChangeCost += colCosts[col]
	}

	for row := startRow; row != finishRow; {
		if startRow < finishRow {
			row++
		} else {
			row--
		}

		rowChangeCost += rowCosts[row]
	}

	return colChangeCost + rowChangeCost
}
```