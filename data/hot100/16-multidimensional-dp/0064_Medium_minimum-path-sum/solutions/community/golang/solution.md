# Go /Golang solution

**Author:** TH0OO
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/23610/](https://leetcode.com/problems/minimum-path-sum/solutions/23610/)

---

    func minPathSum(grid [][]int) int {
        var m int = len(grid)
        var n int = len(grid[0])
        for i := 1; i < m; i++{
        	grid[i][0] += grid[i-1][0];
        }
        for j := 1; j < n; j++{
            grid[0][j] += grid[0][j-1];
        }
        for i:= 1; i < m; i++{
            for j:=1; j<n; j++{
                grid[i][j] += min(grid[i-1][j], grid[i][j-1]);
            }
        }
        return grid[m-1][n-1];
        
    }
    func min(a, b int) int {
        if a < b {
            return a
        }
        return b
    }