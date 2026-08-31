# C# Solution for Minimum Obstacle Removal to Reach Corner Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090538/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is similar to finding the shortest path in an unweighted graph, but each step can have a \u201Ccost\u201D based on whether the path goes through an obstacle (1) or not (0). The goal is to minimize the number of obstacles removed to move from the top-left (0, 0) to the bottom-right (m-1, n-1).

A regular BFS would treat all steps equally, but in this case, moving to a cell with an obstacle is more expensive. 0-1 BFS is ideal because it prioritizes paths with fewer removals using a double-ended queue (deque) to process less costly paths first.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Deque (Double-Ended Queue):
	\u2022	Use a deque to simulate a priority queue where:
	\u2022	Moving to a 0 (empty cell) is \u201Cfree\u201D and added to the front of the deque.
	\u2022	Moving to a 1 (obstacle) costs \u201C1\u201D and is added to the back of the deque.
2.	Visited Array:
	\u2022	Use a 2D array visited[m][n] to keep track of the minimum number of obstacles removed to reach each cell.
	\u2022	If a new path with fewer removals is found, update visited and continue exploring.
3.	Directional Movement:
	\u2022	Move in four possible directions: right, down, left, and up.
	\u2022	For each move, calculate the new cost based on the value of the cell (0 or 1).
4.	Early Exit:
	\u2022	If the bottom-right corner (m-1, n-1) is reached, return the number of obstacles removed immediately.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m \xD7 n):
\u2022	Each cell is processed at most once.
\u2022	Each cell can be added to the deque at most twice: once if the cell is a 0 and once if it\u2019s a 1.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m \xD7 n):
\u2022	The visited array stores the minimum number of obstacles removed for each cell, requiring O(m x n) space.
\u2022	The deque also holds at most O(m x n) elements at a time in the worst case.

# Code
```csharp []
public class Solution {
    public int MinimumObstacles(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        
        int[][] directions = new int[][] {
            new int[] {0, 1},   
            new int[] {1, 0},   
            new int[] {0, -1},  
            new int[] {-1, 0}   
        };
        var deque = new LinkedList<int[]>();
        deque.AddFirst(new int[] {0, 0, 0}); 
        int[,] visited = new int[m, n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                visited[i, j] = int.MaxValue;
            }
        }
        visited[0, 0] = 0;

        while (deque.Count > 0) {
            var current = deque.First.Value;
            deque.RemoveFirst();
            int x = current[0], y = current[1], obstaclesRemoved = current[2];

            if (x == m - 1 && y == n - 1) {
                return obstaclesRemoved;
            }
            foreach (var dir in directions) {
                int newX = x + dir[0];
                int newY = y + dir[1];
                if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                    int newObstaclesRemoved = obstaclesRemoved + grid[newX][newY];

                    if (newObstaclesRemoved < visited[newX, newY]) {
                        visited[newX, newY] = newObstaclesRemoved;

                        if (grid[newX][newY] == 0) {
                            deque.AddFirst(new int[] {newX, newY, newObstaclesRemoved});
                        } else {
                            deque.AddLast(new int[] {newX, newY, newObstaclesRemoved});
                        }
                    }
                }
            }
        }

        return -1;
    }
}
```