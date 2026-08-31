# Easy to understand ✅ Python, C# 🔥 | Great runtime ✨

**Author:** kotto
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619043/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the minimum number of days needed to disconnect a land mass in a grid. My initial thought is to explore whether the grid is already disconnected, and if not, determine how quickly it can be split into separate land masses by removing cells. The key lies in understanding the concept of connected components and simulating the removal of land cells to observe their effect on connectivity.

# Approach
<!-- Describe your approach to solving the problem. -->

\u2705 **Initial Check for Disconnection**
The first step is to determine if the grid is already disconnected. This can be done by counting the number of connected land components. If there is more than one component or no land at all, the grid is already disconnected, and the answer is 0 days.

\u2705 **Simulate Cell Removals**  
If the grid is initially connected, the next step is to simulate the removal of each land cell, one by one. After each removal, we check if the grid becomes disconnected. If removing a single cell causes the land to disconnect, it means it takes `1` day to achieve the disconnection.

\u2705 **Worst-Case Scenario**
If removing one land cell does not disconnect the island, it indicates that the grid is more resilient and requires at least `2` days for complete disconnection. This happens when the island remains connected despite the removal of a single land cell, implying that further cell removals are necessary.

\u2705 **Result**  
The solution is designed to return `0`, `1`, or `2` days based on whether the grid is already disconnected, can be disconnected by removing one cell, or needs additional removals to achieve disconnection. This approach effectively and efficiently solves the problem by considering all possible scenarios.

# Code
**C#**
```
public class Solution {
    // Arrays for direction vectors: up, down, left, right
    private int[] xDir = {0, 0, -1, 1};
    private int[] yDir = {-1, 1, 0, 0};

    // Checks if the cell (i, j) is within bounds, unvisited, and is land (1)
    public bool IsSafe(int[][] grid, int i, int j, bool[][] visited)
    {
        return (i >= 0 && j >= 0 && i < grid.Length && j < grid[0].Length && !visited[i][j] && grid[i][j] == 1);
    }

    // Recursive DFS function to mark all connected parts of land as visited
    public void IslandCount(int[][] grid, int i, int j, bool[][] visited)
    {
        // Mark the current cell as visited
        visited[i][j] = true;
        
        // Traverse all four possible directions
        for (int k = 0; k < 4; k++)
        {
            int newRow = i + xDir[k];
            int newCol = j + yDir[k];
            // If the new cell is safe, continue the DFS
            if (IsSafe(grid, newRow, newCol, visited))
            {
                IslandCount(grid, newRow, newCol, visited);
            }
        }
    }

    // Function to count the number of connected land components in the grid
    public int CountLand(int[][] grid, bool[][] visited)
    {
        int count = 0;
        // Iterate through all cells in the grid
        for (int i = 0; i < grid.Length; i++)
        {
            for (int j = 0; j < grid[0].Length; j++)
            {
                // If we find unvisited land, start a new DFS
                if (grid[i][j] == 1 && !visited[i][j])
                {
                    IslandCount(grid, i, j, visited);
                    count++;
                }
            }
        }
        return count;
    }

    // Main function to solve the problem
    public int MinDays(int[][] grid)
    {
        int rows = grid.Length;
        int cols = grid[0].Length;
        
        // Initialize a visited array to track visited cells
        bool[][] visited = new bool[rows][];
        for (int i = 0; i < rows; i++)
        {
            visited[i] = new bool[cols];
        }

        // Check how many connected land components exist initially
        int count = CountLand(grid, visited);
        
        // If more than one island or no land, no days are needed
        if (count > 1 || count == 0) return 0;

        // Simulate the removal of each land cell and check if it splits the island
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                if (grid[i][j] == 1)
                {
                    // Temporarily remove the land cell
                    grid[i][j] = 0;
                    
                    // Check the number of components after removal
                    bool[][] mat = new bool[rows][];
                    for (int k = 0; k < rows; k++)
                    {
                        mat[k] = new bool[cols];
                    }

                    int count2 = CountLand(grid, mat);
                    
                    // Restore the removed cell
                    grid[i][j] = 1;
                    
                    // If the island is now split or there is no land, only one day is needed
                    if (count2 > 1 || count2 == 0)
                    {
                        return 1;   
                    }
                }
            }
        }

        // If removing one cell does not split the island, two days are needed
        return 2;
    }
}


```

**Python**

```
class Solution:
    # Direction vectors for moving up, down, left, and right
    def __init__(self):
        self.xDir = [0, 0, -1, 1]
        self.yDir = [-1, 1, 0, 0]

    # Check if the cell (i, j) is within bounds, unvisited, and is land (1)
    def is_safe(self, grid, i, j, visited):
        return (0 <= i < len(grid) and 0 <= j < len(grid[0]) and not visited[i][j] and grid[i][j] == 1)

    # Recursive DFS function to mark all connected parts of land as visited
    def island_count(self, grid, i, j, visited):
        # Mark the current cell as visited
        visited[i][j] = True
        
        # Traverse all four possible directions
        for k in range(4):
            newRow = i + self.xDir[k]
            newCol = j + self.yDir[k]
            # If the new cell is safe, continue the DFS
            if self.is_safe(grid, newRow, newCol, visited):
                self.island_count(grid, newRow, newCol, visited)

    # Function to count the number of connected land components in the grid
    def count_land(self, grid, visited):
        count = 0
        # Iterate through all cells in the grid
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                # If we find unvisited land, start a new DFS
                if grid[i][j] == 1 and not visited[i][j]:
                    self.island_count(grid, i, j, visited)
                    count += 1
        return count

    # Main function to solve the problem
    def minDays(self, grid):
        rows = len(grid)
        cols = len(grid[0])
        
        # Initialize a visited array to track visited cells
        visited = [[False] * cols for _ in range(rows)]

        # Check how many connected land components exist initially
        count = self.count_land(grid, visited)
        
        # If more than one island or no land, no days are needed
        if count > 1 or count == 0:
            return 0

        # Simulate the removal of each land cell and check if it splits the island
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    # Temporarily remove the land cell
                    grid[i][j] = 0
                    
                    # Check the number of components after removal
                    mat = [[False] * cols for _ in range(rows)]
                    count2 = self.count_land(grid, mat)
                    
                    # Restore the removed cell
                    grid[i][j] = 1
                    
                    # If the island is now split or there is no land, only one day is needed
                    if count2 > 1 or count2 == 0:
                        return 1   

        # If removing one cell does not split the island, two days are needed
        return 2

```