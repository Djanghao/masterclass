# Maximum Difference Score in a Grid 🚦 Optimal Dynamic Programming Approach

**Author:** lebon
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5158800/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5158800/)

---


## Intuition
The **goal** is to find the maximum difference between the value of a cell and the minimum value of its adjacent upper or left cell in a given grid. 

The **challenge** is to efficiently calculate this maximum difference while updating the grid in place to keep track of the minimum values encountered so far. This can be achieved by iterating through the grid and applying **dynamic programming principles** to store and update intermediate results.

## Approach
1. **Initialization**:
   - Initialize `res` with a very small value (`-1000000`) to store the maximum score found during the iteration.
   - Determine the number of rows (`m`) and columns (`n`) in the grid.
   - Create a mutable copy of the input grid to allow modifications.

2. **Iterate Through the Grid**:
   - Use nested loops to traverse each cell in the grid. The outer loop iterates through each row (`i`), and the inner loop iterates through each column (`j`).

3. **Calculate `pre`**:
   - For each cell, calculate the minimum value (`pre`) between the cell above (`grid[i-1][j]`) if it exists and the cell to the left (`grid[i][j-1]`) if it exists.
   - If there is no cell above (`i == 0`) or no cell to the left (`j == 0`), use a large value (`1000000`) instead.

4. **Update the Result `res`**:
   - Update `res` with the maximum value between the current `res` and the difference between the current cell value (`grid[i][j]`) and `pre`.

5. **Update the Current Cell Value**:
   - If `pre` is less than the current cell value, update the current cell value to `pre`. This ensures that future calculations consider the minimum path values.

6. **Return the Result**:
   - After iterating through the entire grid, return the maximum score (`res`).

## Complexity
- **Time complexity**:
  - The time complexity is  $$O(m \	imes n)$$, where $$m$$ is the number of rows and $$n$$ is the number of columns in the grid. This is because each cell in the grid is visited once.

- **Space complexity**:
  - The space complexity is $$O(1)$$ beyond the input storage. The input grid is modified in place, and only a few additional variables are used.

![Screenshot 2024-05-15 at 02.16.42.png](./images/0.png)


## Code
```swift []
class Solution {
    func maxScore(_ grid: [[Int]]) -> Int {
        // Initialize the result with a very small value
        var res = -1000000
        // Get the number of rows and columns in the matrix
        let m = grid.count
        let n = grid[0].count
        
        // Create a mutable copy of the input matrix
        var grid = grid
        
        // Iterate through each cell in the matrix
        for i in 0..<m {
            for j in 0..<n {
                // Determine the minimum value between the cell above (if exists) and the cell to the left (if exists)
                let pre = min(
                    i > 0 ? grid[i - 1][j] : 1000000, // If i > 0, take the value from the cell above; otherwise, use a large value
                    j > 0 ? grid[i][j - 1] : 1000000  // If j > 0, take the value from the cell to the left; otherwise, use a large value
                )
                
                // Update the result with the maximum difference found so far
                res = max(res, grid[i][j] - pre)
                
                // If the previous minimum value is less than the current cell value, update the current cell value
                if pre < grid[i][j]) {
                    grid[i][j] = pre
                }
            }
        }
        
        // Return the maximum difference found
        return res
    }
}
