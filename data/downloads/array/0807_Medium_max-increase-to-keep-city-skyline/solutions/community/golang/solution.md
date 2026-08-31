# Golang solution

**Author:** levanto_0
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/514716/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/514716/)

---

My solution. Using Math.max/min would make the code crisp.. but i don't want to use it.

```
func maxIncreaseKeepingSkyline(grid [][]int) int {
    row_line := make([]int, len(grid))
    col_line := make([]int, len(grid[0]))
    
    // Find max value in row/column  
    for i := 0; i < len(grid); i++{
        for j := 0; j < len(grid[0]); j++{
            if grid[i][j] > row_line[i] {
                row_line[i] = grid[i][j]
            }
            if grid[i][j] > col_line[j] {
                col_line[j] = grid[i][j]
            }
        }
    }
    
    addOn := 0
    heightLine := 0
    for i := 0; i < len(grid); i++{
        for j := 0; j < len(grid[0]); j++{
            if row_line[i] < col_line[j]{
                heightLine = row_line[i]
            }else{
                heightLine = col_line[j]
            }
            
            addOn += (heightLine - grid[i][j])
        }
    }
    
    return addOn
}
```