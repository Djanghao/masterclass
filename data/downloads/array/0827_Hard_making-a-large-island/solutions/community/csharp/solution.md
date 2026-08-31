# 💥C# | Runtime beats 99.30%, Memory beats 71.13% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/5752121/](https://leetcode.com/problems/making-a-large-island/solutions/5752121/)

---

# Intuition
You have a grid with islands (1s) and water (0s). By flipping one 0 to 1, you want to find the largest possible island size.

# Approach
Track Islands:

Use Union-Find to group 1s into islands and keep track of their sizes.
Evaluate Flips:

Find the largest island initially.
For each 0, calculate the potential new island size by flipping it and merging with adjacent islands.

# Complexity
- Time complexity:
O(n2) for grid traversal and union-find operations.

- Space complexity:
O(n2) for Union-Find data structures.

# Code
```csharp []
public class Solution {
    private static readonly int[] directions = { 0, 1, 0, -1, 0 };

    public int LargestIsland(int[][] grid) {
        int n = grid.Length;
        int[] islandSize = new int[n * n + 2]; // Map islandId -> island size, max possible islandId is n * n
        int islandId = 2; // Start islandId from 2 since grid contains 0 and 1
        int maxIsland = 0;

        // 1. Mark all islands with unique IDs and calculate their sizes using DFS
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    int size = DFS(grid, i, j, islandId);
                    islandSize[islandId++] = size;
                    maxIsland = Math.Max(maxIsland, size); // Track the largest island found so far
                }
            }
        }

        // 2. Try changing each 0 to 1 and calculate the potential maximum island size
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) {
                    HashSet<int> seenIslands = new HashSet<int>(); // To avoid counting the same island twice
                    int newSize = 1; // Start by counting the newly added 1

                    // Check all 4 adjacent cells
                    for (int d = 0; d < 4; d++) {
                        int ni = i + directions[d];
                        int nj = j + directions[d + 1];

                        if (ni >= 0 && nj >= 0 && ni < n && nj < n && grid[ni][nj] > 1) {
                            int id = grid[ni][nj];
                            if (!seenIslands.Contains(id)) {
                                newSize += islandSize[id]; // Add the size of the neighboring island
                                seenIslands.Add(id); // Mark this island as seen
                            }
                        }
                    }
                    maxIsland = Math.Max(maxIsland, newSize); // Update the largest possible island size
                }
            }
        }

        return maxIsland == 0 ? n * n : maxIsland;
    }

    // DFS to mark island and calculate its size
    private int DFS(int[][] grid, int i, int j, int islandId) {
        int n = grid.Length;
        grid[i][j] = islandId; // Mark the cell with the islandId
        int size = 1;

        for (int d = 0; d < 4; d++) {
            int ni = i + directions[d];
            int nj = j + directions[d + 1];

            if (ni >= 0 && nj >= 0 && ni < n && nj < n && grid[ni][nj] == 1) {
                size += DFS(grid, ni, nj, islandId); // Accumulate the size of the island
            }
        }

        return size;
    }
}

```