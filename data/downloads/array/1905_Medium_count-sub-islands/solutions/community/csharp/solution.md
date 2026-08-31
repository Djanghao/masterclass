# C# Solution for Count Sub Islands Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5700497/](https://leetcode.com/problems/count-sub-islands/solutions/5700497/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about identifying sub-islands in grid2 that are entirely contained within corresponding islands in grid1. The intuition behind the BFS approach is to iteratively explore each land cell in grid2 and check if the entire island it belongs to is also contained within an island in grid1. By using BFS, we can systematically explore the grid level by level, ensuring that we cover all parts of the island.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Traversal:
	\u2022	Iterate through each cell in grid2. If a cell contains land (1), it indicates the start of an unexplored island. Begin a BFS from this cell.
2.	BFS Exploration:
	\u2022	Use a queue to manage the exploration of the current island in grid2. For each cell, check if the corresponding cell in grid1 is also land (1).
	\u2022	If any cell in the current island in grid2 does not correspond to land in grid1, mark this island as not being a sub-island.
	\u2022	Mark each cell in grid2 as visited by setting it to 0 to avoid revisiting it.
	\u2022	Continue exploring all neighboring cells (up, down, left, right) until the entire island is processed.
3.	Counting Sub-Islands:
	\u2022	If BFS confirms that all parts of the island in grid2 correspond to land in grid1, increment the count of sub-islands.
	\u2022	Proceed with the next unvisited land cell in grid2 and repeat the process.
4.	Return the Result:
	\u2022	After processing all cells in grid2, return the total count of sub-islands.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Time Complexity: O(m x n)
	\u2022	Each cell in grid2 is visited exactly once. Since BFS processes each cell by visiting its neighbors (each of which is also visited only once), the overall time complexity is proportional to the number of cells in the grid, which is m * n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Space Complexity: O(min(m, n))
	\u2022	The space complexity is dominated by the maximum size of the queue used in BFS. In the worst case, the queue could hold cells from a single row or column (depending on the grid\u2019s layout), so the space complexity is O(\\min(m, n)).
	\u2022	Additionally, space is required for the directions array and a few variables, but these are negligible compared to the queue.

# Code
```csharp []
public class Solution {
    public int CountSubIslands(int[][] grid1, int[][] grid2) {
                int m = grid2.Length;
        int n = grid2[0].Length;
        int subIslandsCount = 0;

        // Directions array for moving up, down, left, and right
        int[][] directions = new int[][] {
            new int[] {0, 1},   // Right
            new int[] {1, 0},   // Down
            new int[] {0, -1},  // Left
            new int[] {-1, 0}   // Up
        };

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // If the current cell in grid2 is land, check if it forms a sub-island
                if (grid2[i][j] == 1) {
                    if (BFS(grid1, grid2, i, j, directions)) {
                        subIslandsCount++;
                    }
                }
            }
        }

        return subIslandsCount;
    }

    private bool BFS(int[][] grid1, int[][] grid2, int startX, int startY, int[][] directions) {
        int m = grid2.Length;
        int n = grid2[0].Length;
        Queue<int[]> queue = new Queue<int[]>();
        queue.Enqueue(new int[] { startX, startY });

        // Assume the current island is a sub-island unless proven otherwise
        bool isSubIsland = true;
        
        // Mark the starting cell as visited
        grid2[startX][startY] = 0;

        while (queue.Count > 0) {
            int[] cell = queue.Dequeue();
            int x = cell[0], y = cell[1];

            // If the corresponding cell in grid1 is not land, this island is not a sub-island
            if (grid1[x][y] == 0) {
                isSubIsland = false;
            }

            // Explore the 4 possible directions
            foreach (var dir in directions) {
                int newX = x + dir[0];
                int newY = y + dir[1];

                // If the new cell is within bounds and is land in grid2, explore it
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid2[newX][newY] == 1) {
                    queue.Enqueue(new int[] { newX, newY });
                    grid2[newX][newY] = 0; // Mark the cell as visited
                }
            }
        }

        return isSubIsland;
    }
}
```