# Easy and fast C# solution with explanation

**Author:** dr41n
**Votes:** 5
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/3546536/](https://leetcode.com/problems/shortest-bridge/solutions/3546536/)

---

# Intuition
The problem can be solved using a combination of Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms.

The general idea is to find the first island using DFS and mark all its cells as visited. Then, starting from the cells of the first island, perform a BFS to expand the island and find the second island. The minimum number of flips required to connect the two islands is the number of steps taken in the BFS.

# Approach
1. Initialize a boolean array **visited** of size **n x n** to keep track of visited cells.
2. Initialize a queue to store the cells during BFS.
3. Define the four directions to explore neighboring cells: up, down, left, and right.
4. Find the first island:
    - Iterate over each cell in the grid.
    - If a cell with a value of 1 is found and it has not been visited, perform a DFS to mark all connected cells as visited. Enqueue each visited cell into the queue.
    - Break the loop once the first island is found.
5. Perform a BFS to expand the first island and find the second island:
    - Initialize a variable **steps** to keep track of the number of steps taken.
    - While the queue is not empty:
        - Get the current size of the queue.
        - Iterate size times:
            - Dequeue a cell from the queue.
            - Check if the dequeued cell is adjacent to the second island (i.e., has a value of 1). If so, return the number of steps taken.
            - Explore the neighboring cells in the four directions:
                - If a neighboring cell is within the grid boundaries, has not been visited, and contains a value of 0, mark it as visited and enqueue it into the queue.
            - Increment **steps** by 1 after processing each level of the BFS.
6. If the BFS completes without finding the second island, return -1 to indicate that it is not possible to connect the two islands.

# Complexity
- Time complexity: $$O(n^2)$$, where **n** is the size of the grid. We perform a DFS to find the first island, which takes $$O(n^2$$) time. Then, we perform a BFS to expand the first island, which also takes $$O(n^2)$$ time in the worst case.

- Space complexity: $$O(n^2)$$, where **n** is the size of the grid. We use a boolean array **visited** of size **n x n** to keep track of visited cells, and a queue to store the cells during BFS. Both require $$O(n^2)$$ space.

# Code
```
public class Solution {
    public int ShortestBridge(int[][] grid) {
        int n = grid.Length;
        bool[][] visited = new bool[n][];
        for (int i = 0; i < n; i++) {
            visited[i] = new bool[n];
        }

        int[][] dirs = new int[][] {
            new int[] {0, 1},
            new int[] {0, -1},
            new int[] {1, 0},
            new int[] {-1, 0}
        };

        Queue<int[]> queue = new Queue<int[]>();
        bool found = false;

        for (int i = 0; i < n; i++) {
            if (found) break;
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    DFS(grid, visited, queue, dirs, i, j);
                    found = true;
                    break;
                }
            }
        }

        int steps = 0;
        while (queue.Count > 0) {
            int size = queue.Count;
            for (int i = 0; i < size; i++) {
                int[] curr = queue.Dequeue();
                int row = curr[0];
                int col = curr[1];

                for (int k = 0; k < 4; k++) {
                    int newRow = row + dirs[k][0];
                    int newCol = col + dirs[k][1];

                    if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && !visited[newRow][newCol]) {
                        if (grid[newRow][newCol] == 1) {
                            return steps;
                        }
                        visited[newRow][newCol] = true;
                        queue.Enqueue(new int[] {newRow, newCol});
                    }
                }
            }
            steps++;
        }

        return -1;
    }

    private void DFS(int[][] grid, bool[][] visited, Queue<int[]> queue, int[][] dirs, int row, int col) {
        int n = grid.Length;
        if (row < 0 || row >= n || col < 0 || col >= n || visited[row][col] || grid[row][col] != 1) {
            return;
        }

        visited[row][col] = true;
        queue.Enqueue(new int[] {row, col});

        foreach (int[] dir in dirs) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];
            DFS(grid, visited, queue, dirs, newRow, newCol);
        }
    }
}
```