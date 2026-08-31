# C# Solution for Regions Cut By Slashes Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615465/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires counting distinct regions formed by slashes (/), backslashes (\\), and blank spaces ( ) in a grid. The solution involves transforming the grid into a larger grid where each cell is expanded into a 3x3 block. Each block is filled based on the content of the corresponding cell in the original grid, representing how slashes and backslashes divide the regions.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Grid Expansion:
	\u2022	Each cell in the original n x n grid is transformed into a 3x3 block in a new grid. This block represents the divisions caused by slashes and backslashes:
	    \u2022	/ creates two distinct regions within the 3x3 block.
	    \u2022	\\ also creates two distinct regions within the block.
	    \u2022	  creates a single connected region within the block.
	\u2022	Fill the 3x3 blocks accordingly based on the character in the original grid.
2.	DFS Traversal:
	\u2022	After expanding the grid, perform Depth-First Search (DFS) to count the number of connected components in the expanded grid.
	\u2022	Each unvisited cell in the expanded grid starts a new DFS, representing a new region.
3.	Count Regions:
	\u2022	Count the number of DFS initiations. Each initiation corresponds to a new distinct region.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Grid Expansion:
	\u2022	Expanding the grid takes O(n^2) time, where n is the number of rows/columns in the original grid. Each cell in the original grid is transformed into a 3x3 block.
\u2022	DFS Traversal:
	\u2022	Each cell in the expanded 3n x 3n grid is visited once. Therefore, the time complexity of DFS is O((3n)^2), which simplifies to O(n^2).
\u2022	Overall Time Complexity:
	\u2022	The time complexity is O(n^2) due to both the grid expansion and DFS traversal.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Expanded Grid:
	\u2022	The space required for the expanded grid is O((3n)^2), which simplifies to O(n^2).
\u2022	DFS Stack:
	\u2022	The space required for the DFS stack is proportional to the number of cells in the expanded grid, which is also O(n^2).
\u2022	Overall Space Complexity:
	\u2022	The space complexity is O(n^2) due to the expanded grid and the DFS stack.

# Code
```
public class Solution {
    public int RegionsBySlashes(string[] grid) {
        int n = grid.Length;
        int size = n * 3;
        int[,] expandedGrid = new int[size, size];

        // Expand the grid by filling the expandedGrid based on the slashes in the original grid
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                char c = grid[i][j];
                int r = i * 3;
                int c1 = j * 3;
                if (c == '/') {
                    expandedGrid[r, c1 + 2] = 1;
                    expandedGrid[r + 1, c1 + 1] = 1;
                    expandedGrid[r + 2, c1] = 1;
                } else if (c == '\\\\') {
                    expandedGrid[r, c1] = 1;
                    expandedGrid[r + 1, c1 + 1] = 1;
                    expandedGrid[r + 2, c1 + 2] = 1;
                }
            }
        }

        // Now count the regions using DFS
        int regions = 0;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (expandedGrid[i, j] == 0) {
                    regions++;
                    DFS(expandedGrid, i, j, size);
                }
            }
        }

        return regions;
    }

    private void DFS(int[,] grid, int r, int c, int size) {
        if (r < 0 || r >= size || c < 0 || c >= size || grid[r, c] != 0) {
            return;
        }

        grid[r, c] = 1; // Mark the cell as visited

        // Visit all 4 adjacent cells
        DFS(grid, r - 1, c, size);
        DFS(grid, r + 1, c, size);
        DFS(grid, r, c - 1, size);
        DFS(grid, r, c + 1, size);
    }
}
```