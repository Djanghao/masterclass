# Go solutiom with comment ✅✅✅

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581937/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581937/)

---

# Code
```go
func minFlips(grid [][]int) int {
	// flip1, all 0 or all 1, number of 1 divisible by 4
	flip1 := 0
	for i := 0; i < len(grid)/2; i++ {
		for j := 0; j < len(grid[0])/2; j++ {
			counter := 0
			counter += grid[i][j]
			counter += grid[len(grid)-1-i][j]
			counter += grid[i][len(grid[0])-1-j]
			counter += grid[len(grid)-1-i][len(grid[0])-1-j]
			switch counter {
			case 1, 3:
				flip1 += 1
			case 2:
				flip1 += 2
			default:
			}
		}
	}
	count1 := 0
	// flip2, make center row and center col palindromic
	flip2 := 0
	// make center row palindromic
	if len(grid)%2 == 1 {
		i := len(grid) / 2
		for j := 0; j < len(grid[0])/2; j++ {
			if grid[i][j] != grid[i][len(grid[0])-1-j] {
				flip2++
				count1 += 2
			} else {
				count1 += 2*grid[i][j]
			}
		}
	}
	// make center col palindromic
	if len(grid[0])%2 == 1 {
		j := len(grid[0]) / 2
		for i := 0; i < len(grid)/2; i++ {
			if grid[i][j] != grid[len(grid)-1-i][j] {
				flip2++
				count1 += 2
			} else {
				count1 += 2*grid[i][j]
			}
		}
	}
	// check if center point is 1, we should flip to 0
	if len(grid)%2 == 1 && len(grid[0])%2 == 1 {
		count1 += grid[len(grid)/2][len(grid[0])/2]
	}
	// flip3 make count1 divisible by 4
	flip3 := 0
	switch count1 % 4 {
	case 0:
		// nothing to do
	case 1:
		// flip center to 0
		flip3++
	case 2:
		// if flip2 is not 0, nothing to do
		// else, we should flip two 1 to 0
		if flip2 == 0 {
			flip3 += 2
		}
	case 3:
		// flip center to 0
		flip3++
		// same as case 2
		if flip2 == 0 {
			flip3 += 2
		}
	default:
	}
	return flip1 + flip2 + flip3
}
```