# Simple Golang solution with Backtracking - Beats 100%

**Author:** ansuraj
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/2150439/](https://leetcode.com/problems/unique-paths-iii/solutions/2150439/)

---

```
func uniquePathsIII(grid [][]int) int {
    
    remaining := 0
    startX := 0 
    startY := 0 
    
    for i:=0 ; i<len(grid); i++ {
        for j:=0 ; j<len(grid[i]); j++ {
            if grid[i][j] == 0 {
                remaining += 1
            } else if grid[i][j] == 1 {
                startX = i
                startY = j
            }
        }
    }
    

    
    return uniquePathHelper(grid, remaining, startX, startY)
    
}

func uniquePathHelper(grid [][]int, remaining, i, j int) int {
    result := 0
    
    // value being -1 is obstacle or visited and 1 being the starting square
    if i<0 || i == len(grid) || j <0 || j == len(grid[i]) || grid[i][j] == -1 {
                
        return 0
                
        } else if grid[i][j] == 0 || grid[i][j] == 1 {
                
            grid[i][j] = -1

                result = uniquePathHelper(grid, remaining-1, i-1, j) + 
                        uniquePathHelper(grid, remaining-1, i+1, j) +
                        uniquePathHelper(grid, remaining-1, i, j+1) +
                        uniquePathHelper(grid, remaining-1, i, j-1)

            grid[i][j] = 0
                
            // the remaining is less than 0 because all the 0 cells are covered
            } else if grid[i][j] == 2 && remaining < 0 {
                
                return 1
            } 
    
    return result
}