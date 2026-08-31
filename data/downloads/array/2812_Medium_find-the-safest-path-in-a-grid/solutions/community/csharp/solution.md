# C# Solution for Find the Safest Path In a Grid Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159117/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159117/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to first calculate the safeness factor for each cell in the grid using BFS from all thief cells. Then, perform a binary search to find the maximum safeness factor achievable for a valid path from the start cell to the end cell.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization: Convert the grid into a 2D array and mark thief cells as 0 and empty cells as -1. Enqueue thief cells into a queue for BFS.
2.	BFS for Safeness Factor Calculation: Perform BFS from each thief cell to calculate the safeness factor for each cell in the grid. Update the safeness factor of each cell as the minimum number of steps needed to reach the cell from any thief cell.
3.	Binary Search: Use binary search to find the maximum safeness factor that allows a valid path from the start cell to the end cell. The start value is 0 (minimum safeness factor possible), and the end value is the maximum safeness factor found in step 2. During each binary search iteration, perform BFS from the start cell to check if there exists a path with the current minimum safeness factor.
4.	BFS for Valid Path Checking: Perform BFS from the start cell with the current minimum safeness factor to check if there exists a valid path to the end cell. If a valid path is found, update the result and continue searching for a larger safeness factor.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	BFS for calculating the safeness factor: O(n^2) where n is the size of the grid, as each cell is processed once.
\u2022	Binary search: O(log(maximum safeness factor)) where maximum safeness factor is the maximum value in the grid.
\u2022	BFS for checking the validity of a path: O(n^2) in the worst case, as each cell may be visited once.
Overall, the time complexity is O(n^2 * log(maximum safeness factor)).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The 2D array to store safeness factors: O(n^2).
\u2022	The queue for BFS: O(n^2) in the worst case.
Overall, the space complexity is O(n^2).

# Code
```
public class Solution {
    // Directions for moving to neighboring cells: right, left, down, up
    int[][] dir = { new int[]{0, 1}, new int[]{0, -1}, new int[]{1, 0}, new int[]{-1, 0} };

    public int MaximumSafenessFactor(IList<IList<int>> grid) {
        int n = grid.Count;
        int[,] mat = new int[n, n];
        Queue<int[]> multiSourceQueue = new Queue<int[]>();

        // To make modifications and navigation easier, the grid is converted into a 2-d array.
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    // Push thief coordinates to the queue
                    multiSourceQueue.Enqueue(new int[]{i, j});
                    // Mark thief cell with 0
                    mat[i, j] = 0;
                } else {
                    // Mark empty cell with -1
                    mat[i, j] = -1;
                }
            }
        }

        // Calculate safeness factor for each cell using BFS
        while (multiSourceQueue.Count > 0) {
            int size = multiSourceQueue.Count;
            while (size-- > 0) {
                int[] curr = multiSourceQueue.Dequeue();
                // Check neighboring cells
                foreach (var d in dir) {
                    int di = curr[0] + d[0];
                    int dj = curr[1] + d[1];
                    int val = mat[curr[0], curr[1]];
                    // Check if the neighboring cell is valid and unvisited
                    if (IsValidCell(mat, di, dj) && mat[di, dj] == -1) {
                        // Update safeness factor and push to the queue
                        mat[di, dj] = val + 1;
                        multiSourceQueue.Enqueue(new int[]{di, dj});
                    }
                }
            }
        }

        // Binary search for maximum safeness factor
        int start = 0;
        int end = 0;
        int res = -1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                // Set end as the maximum safeness factor possible
                end = Math.Max(end, mat[i, j]);
            }
        }

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (IsValidSafeness(mat, mid)) {
                // Store valid safeness and search for larger ones 
                res = mid; 
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return res;
    }

    // Check if a path exists with given minimum safeness value
    private bool IsValidSafeness(int[,] grid, int minSafeness) {
        int n = grid.GetLength(0);

        // Check if the source and destination cells satisfy minimum safeness
        if (grid[0, 0] < minSafeness || grid[n - 1, n - 1] < minSafeness) {
            return false;
        }

        Queue<int[]> traversalQueue = new Queue<int[]>();
        traversalQueue.Enqueue(new int[]{0, 0});
        bool[,] visited = new bool[n, n];
        visited[0, 0] = true;

        // Breadth-first search to find a valid path
        while (traversalQueue.Count > 0) {
            int[] curr = traversalQueue.Dequeue();
            if (curr[0] == n - 1 && curr[1] == n - 1) {
                return true; // Valid path found
            }
            // Check neighboring cells
            foreach (var d in dir) {
                int di = curr[0] + d[0];
                int dj = curr[1] + d[1];
                // Check if the neighboring cell is valid, unvisited and satisfying minimum safeness
                if (IsValidCell(grid, di, dj) && !visited[di, dj] && grid[di, dj] >= minSafeness) {
                    visited[di, dj] = true;
                    traversalQueue.Enqueue(new int[]{di, dj});
                }
            }
        }

        return false; // No valid path found
    }

    // Check if a given cell lies within the grid
    private bool IsValidCell(int[,] mat, int i, int j) {
        int n = mat.GetLength(0);
        return i >= 0 && j >= 0 && i < n && j < n;
    }
}
```