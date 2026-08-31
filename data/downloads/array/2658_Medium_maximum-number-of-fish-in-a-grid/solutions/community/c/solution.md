# Explained | C++ | Java | DFS | BFS | Beginner Friendly Code |

**Author:** Rishabhsinghal12
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466637/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466637/)

---

**DFS Approach**

```
1. Define a helper function dfs that takes the grid, the row index r, and the column index c as arguments. The function returns the total number of fish caught starting from the cell (r, c).
2. In the dfs function, check if the current cell is out of bounds or a land cell. If so, return 0 (base case).
3. Otherwise, catch the fish at the current cell by storing its value in a variable fishCaught.
4. Mark the current cell as caught by setting its value to 0 in the grid.
5. Define an array moves that contains the possible movements of the fisherman. Each movement is defined as an array of two integers, representing the change in row and column indices, respectively.
6. For each possible movement in moves, calculate the new cell coordinates by adding the movement to the current cell coordinates.
7. Recursively call the dfs function with the new cell coordinates, and add the result to fishCaught.
8. Return fishCaught.
9. In the findMaxFish function, initialize a variable maxFish to 0 to keep track of the maximum number of fish caught by the fisherman.
10. Iterate over every cell in the grid.
11. For each water cell (i.e., cells with a positive value), start a DFS search using the dfs function to find the maximum number of fish that can be caught starting from this cell.
12. Update maxFish to the maximum value between maxFish and the number of fish caught starting from the current water cell.
13. Return maxFish.
```

**C++ Code For DFS Approach**
```
int dfs(vector<vector<int>>& grid, int r, int c) {
    if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() || grid[r][c] == 0) {
        return 0; // Base case: out of bounds or land cell
    }
    int fishCaught = grid[r][c]; // Catch fish at current cell
    grid[r][c] = 0; // Mark cell as caught
    int moves[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}; // Possible movements
    for (int i = 0; i < 4; i++) {
        int newR = r + moves[i][0];
        int newC = c + moves[i][1];
        fishCaught += dfs(grid, newR, newC); // Recursively search adjacent cells
    }
    return fishCaught;
}

int findMaxFish(vector<vector<int>>& grid) {
    int maxFish = 0;
    for (int i = 0; i < grid.size(); i++) {
        for (int j = 0; j < grid[0].size(); j++) {
            if (grid[i][j] > 0) { // Start DFS search from water cell
                int fishCaught = dfs(grid, i, j);
                maxFish = max(maxFish, fishCaught);
            }
        }
    }
    return maxFish;
}
```

**Java Code For DFS Approach**
```
public int dfs(int[][] grid, int r, int c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == 0) {
        return 0; // Base case: out of bounds or land cell
    }
    int fishCaught = grid[r][c]; // Catch fish at current cell
    grid[r][c] = 0; // Mark cell as caught
    int[][] moves = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}; // Possible movements
    for (int[] move : moves) {
        int newR = r + move[0];
        int newC = c + move[1];
        fishCaught += dfs(grid, newR, newC); // Recursively search adjacent cells
    }
    return fishCaught;
}

public int findMaxFish(int[][] grid) {
    int maxFish = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) { // Start DFS search from water cell
                int fishCaught = dfs(grid, i, j);
                maxFish = Math.max(maxFish, fishCaught);
            }
        }
    }
    return maxFish;
}
```

**BFS Approach:**
```
1. Initialize a variable maxFish to 0 to keep track of the maximum number of fish caught by the fisherman.
2. Get the size of the grid m x n.
3. Define a 2D array moves that contains the possible movements of the fisherman. Each movement is defined as an array of two integers, representing the change in row and column indices, respectively.
4. Iterate over every cell in the grid.
5. For each water cell (i.e., cells with a positive value), start a BFS search to find the maximum number of fish that can be caught starting from this cell.
6. Initialize a queue and add the current water cell coordinates to the queue.
7. Initialize a variable fishCaught to 0 to keep track of the number of fish caught starting from the current water cell.
8. While the queue is not empty, do the following:
	a. Dequeue the front element of the queue, representing the current water cell coordinates.
	b. If the current cell contains fish (i.e., has a positive value), catch the fish and add its value to fishCaught. Set the     cell value to 0 to mark it as caught.
	c. Iterate over every possible movement in the moves array.
	d. Calculate the new cell coordinates by adding the movement to the current cell coordinates.
	e. If the new cell is within the bounds of the grid and is a water cell (i.e., has a positive value), add its coordinates     to the queue.
9. Update maxFish to the maximum value between maxFish and fishCaught.
10. Return maxFish.
```

**C++ Code For BFS Approach**
```
int findMaxFish(vector<vector<int>>& grid) {
    int maxFish = 0;
    int m = grid.size();
    int n = grid[0].size();
    
    vector<vector<int>> moves = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}; // Possible moves
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] > 0) { // Start at a water cell
                queue<pair<int, int>> q;
                q.push({i, j});
                int fishCaught = 0;
                while (!q.empty()) {
                    int r = q.front().first;
                    int c = q.front().second;
                    q.pop();
                    if (grid[r][c] > 0) { // Catch fish at current cell
                        fishCaught += grid[r][c];
                        grid[r][c] = 0; // Mark cell as caught
                    }
                    for (auto& move : moves) { // Iterate over possible moves
                        int newR = r + move[0];
                        int newC = c + move[1];
                        if (newR >= 0 && newR < m && newC >= 0 && newC < n && grid[newR][newC] > 0) {
                            q.push({newR, newC}); // Add new water cell to queue
                        }
                    }
                }
                maxFish = max(maxFish, fishCaught);
            }
        }
    }
    
    return maxFish;
}
```

**Java Code For BFS Approach**

```
public int findMaxFish(int[][] grid) {
    int maxFish = 0;
    int[][] moves = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}; // Possible movements
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) { // Start BFS search from water cell
                int fishCaught = 0;
                Queue<int[]> queue = new LinkedList<>(); // Queue for BFS
                queue.offer(new int[]{i, j}); // Enqueue current cell
                while (!queue.isEmpty()) {
                    int[] curr = queue.poll(); // Dequeue first cell
                    int r = curr[0];
                    int c = curr[1];
                    if (grid[r][c] > 0) { // Catch fish at current cell
                        fishCaught += grid[r][c];
                        grid[r][c] = 0; // Mark cell as caught
                    }
                    for (int[] move : moves) {
                        int newR = r + move[0];
                        int newC = c + move[1];
                        if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && grid[newR][newC] > 0) {
                            queue.offer(new int[]{newR, newC}); // Enqueue adjacent water cell
                        }
                    }
                }
                maxFish = Math.max(maxFish, fishCaught);
            }
        }
    }
    return maxFish;
}
```

**PLEASE DO UPVOTE**