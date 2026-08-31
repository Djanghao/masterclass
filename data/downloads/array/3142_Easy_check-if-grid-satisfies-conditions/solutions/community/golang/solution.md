# Fastest solution Simply explained

**Author:** i-bond
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5151447/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5151447/)

---

# Complexity
- Time complexity: O(n*m)

# Code
```
func satisfiesConditions(grid [][]int) bool {	
    // 1st check row - current value should be different from the cell to its right 
	for i := 0; i < len(grid); i++ {
		row := grid[i]
		for j := 0; j < len(row)-1; j++ {		
			if row[j] == row[j+1] {	return false }
		}
	}
    // 2nd check column - current value should be equal to the cell below 
	for i := 0; i < len(grid)-1; i++ {
		row := grid[i]		
		for j := 0; j < len(row); j++ {			
			if row[j] != grid[i+1][j] { return false }
		}
	}
	
	return true
}

```