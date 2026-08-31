# ✔💯 DAY 394  | DFS vs BFS | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 💫

**Author:** ManojKumarPatnaik
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466649/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466649/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
##### \u2022	We are given a 2D matrix grid representing land cells and water cells containing fish.
##### \u2022	We need to find the maximum number of fish that can be caught by a fisher starting from any water cell.
##### \u2022	We can start by iterating over all water cells in the grid and using a depth-first search (DFS) to explore all adjacent water cells and calculate the maximum number of fish that can be caught starting from that cell.
##### \u2022	In the DFS, we start with the current water cell and explore all adjacent water cells using a 2D array  dr that contains the four possible directions. For each adjacent water cell, we calculate the total number of fish that can be caught starting from the current cell and add it to the maximum number of fish caught so far. We also remove each water cell from the map as we visit it to avoid visiting the same cell twice.
##### \u2022	We keep track of the maximum number of fish caught so far and return it as the answer.
##### \u2022	Since we explore each water cell in the grid only once and perform constant time operations for each cell, the time complexity of this solution is O(n), where n is the total number of cells in the grid.
##### \u2022	We can also optimize the solution by using memoization to avoid recomputing the maximum number of fish caught starting from a water cell that has already been visited.



# Code
```java []
public int findFish(int[][] grid) {
    int n = grid.length;
    int m = grid[0].length;
    int maxFish = 0; // variable to store the maximum number of fish caught
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(grid[i][j] > 0) { // if the current cell contains fish
                maxFish = Math.max(maxFish, dfs(i, j, grid, n, m)); // update the maximum number of fish caught
            }
        }
    }
    return maxFish; // return the maximum number of fish caught
}

// array to store the four possible directions
private final int[] dr = {0, 1, 0, -1, 0};

// function to perform DFS and count the number of fish caught
int dfs(int i, int j, int[][] grid, int n, int m) {
    int fish = grid[i][j]; // count the number of fish caught in the current cell
    grid[i][j] = 0; // mark the current cell as visited by setting its value to 0
    for(int k = 0; k < 4; k++) { // iterate over the four possible directions
        int nr = i + dr[k], nc = j + dr[k + 1]; // calculate the coordinates of the adjacent cell
        if(nr < n && nr >= 0 && nc < m && nc >= 0 && grid[nr][nc] > 0) { // if the adjacent cell contains fish and is within the grid
            fish += dfs(nr, nc, grid, n, m); // count the number of fish caught in the adjacent cell
        }
    }
    return fish; // return the total number of fish caught
}
```
```c++ []
int findMaxFish(vector<vector<int>>& grid) {
    int n = grid.size();
    int m = grid[0].size();
    int ans = 0;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(grid[i][j] > 0) {
                ans = max(ans, dfs(i, j, grid, n, m));
            }
        }
    }
    return ans;
}
int dfs(int i, int j, vector<vector<int>>& grid, int n, int m) {
    int f = grid[i][j];
    grid[i][j] = 0;
    int dr[] = {0, 1, 0, -1, 0};
    for(int k = 0; k < 4; k++) {
        int nr = i + dr[k];
        int nc = j + dr[k + 1];
        if(nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] > 0) {
            f += dfs(nr, nc, grid, n, m);
        }
    }
    return f;
}
```
```python []
def findMaxFish(self, grid: List[List[int]]) -> int:
    n = len(grid)
    m = len(grid[0])
    ans = 0
    for i in range(n):
        for j in range(m):
            if grid[i][j] > 0:
                ans = max(ans, self.dfs(i, j, grid, n, m))
    return ans

def dfs(self, i: int, j: int, grid: List[List[int]], n: int, m: int) -> int:
    f = grid[i][j]
    grid[i][j] = 0
    dr = [0, 1, 0, -1, 0]
    for k in range(4):
        nr = i + dr[k]
        nc = j + dr[k + 1]
        if nr >= 0 and nr < n and nc >= 0 and nc < m and grid[nr][nc] > 0:
            f += self.dfs(nr, nc, grid, n, m)
    return f
```

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99


# BFS 

We start by iterating over all water cells in the grid and checking if they contain fish. If a water cell contains fish, we add it to a queue and start the BFS. We also set the value of the current water cell to 0 to mark it as visited.

In the BFS, we explore all adjacent water cells using two arrays  dr and  dc that contain the four possible directions. For each adjacent water cell, we add the number of fish it contains to the total number of fish caught so far and mark it as visited by setting its value to 0. We also add it to the queue to explore its adjacent water cells in the next iteration.

After the BFS is complete, we update the maximum number of fish caught so far and continue iterating over the remaining water cells.

Since we explore each water cell in the grid only once and perform constant time operations for each cell, the time complexity of this solution is O(n), where n is the total number of cells in the grid.
```java []
int findMaxFish[][] grid) {
    int n = grid.length;
    int m = grid[0].length;
    int ans = 0; // variable to store the maximum number of fish caught
    int[] dr = {0, 1, 0, -1}; // array to store the four possible directions
    int[] dc = {1, 0, -1, 0};
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(grid[i][j] > 0) { // if the current cell contains fish
                Queue<int[]> q = new LinkedList<>(); // create a queue to perform BFS
                q.offer(new int[]{i, j}); // add the current cell to the queue
                int f = grid[i][j]; // count the number of fish caught in the current cell
                grid[i][j] = 0; // mark the current cell as visited by setting its value to 0
                while(!q.isEmpty()) { // while there are cells in the queue
                    int[] curr = q.poll(); // remove the first cell from the queue
                    for(int k = 0; k < 4; k++) { // iterate over the four possible directions
                        int nr = curr[0] + dr[k]; // calculate the coordinates of the adjacent cell
                        int nc = curr[1] + dc[k];
                        if(nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] > 0) { // if the adjacent cell contains fish and is within the grid
                            f += grid[nr][nc]; // count the number of fish caught in the adjacent cell
                            grid[nr][nc] = 0; // mark the adjacent cell as visited by setting its value to 0
                            q.offer(new int[]{nr, nc}); // add the adjacent cell to the queue
                        }
                    }
                }
                ans = Math.max(ans, f); // update the maximum number of fish caught so far
            }
        }
    }
    return ans; // return the maximum number of fish caught
}
```
```c++ []
class Solutionpublic:
    int findMaxFish(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int ans = 0;
        vector<int> dr = {0, 1, 0, -1};
        vector<int> dc = {1, 0, -1, 0};
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(grid[i][j] > 0) {
                    queue<pair<int, int>> q;
                    q.push({i, j});
                    int f = grid[i][j];
                    grid[i][j] = 0;
                    while(!q.empty()) {
                        auto curr = q.front();
                        q.pop();
                        for(int k = 0; k < 4; k++) {
                            int nr = curr.first + dr[k];
                            int nc = curr.second + dc[k];
                            if(nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] > 0) {
                                f += grid[nr][nc];
                                grid[nr][nc] = 0;
                                q.push({nr, nc});
                            }
                        }
                    }
                    ans = max(ans, f);
                }
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        ans = 0
        dr = [0, 1, 0, -1]
        dc = [1, 0, -1, 0]
        for i in range(n):
            for j in range(m):
                if grid[i][j] > 0:
                    q = deque()
                    q.append((i, j))
                    f = grid[i][j]
                    grid[i][j] = 0
                    while q:
                        curr = q.popleft()
                        for k in range(4):
                            nr = curr[0] + dr[k]
                            nc = curr[1] + dc[k]
                            if nr >= 0 and nr < n and nc >= 0 and nc < m and grid[nr][nc] > 0:
                                f += grid[nr][nc]
                                grid[nr][nc] = 0
                                q.append((nr, nc))
                    ans = max(ans, f)
        return ans
```

![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466649/day-394-100-0ms-python-java-c-explained-approach/
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A