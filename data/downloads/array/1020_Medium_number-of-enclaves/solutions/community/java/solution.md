# ✅✅Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand🔥

**Author:** cohesk
**Votes:** 146
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388131/](https://leetcode.com/problems/number-of-enclaves/solutions/3388131/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers this week. I planned to give for next 10,000 Subscribers as well. So **DON'T FORGET** to Subscribe

**Search \uD83D\uDC49`Tech Wired leetcode` on YouTube to Subscribe**
# OR 
**Click the Link in my Leetcode Profile to Subscribe**


Happy Learning, Cheers Guys \uD83D\uDE0A

# Video Solution
**Search \uD83D\uDC49 `Number of Enclaves by Tech Wired` on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (11).png](./images/0.png)


# Approach:

We can solve this problem using a depth-first search (DFS) algorithm. We start by iterating over the edges of the grid (i.e., the first and last row and column), and for each 1 we find, we perform a DFS starting from that cell. During the DFS, we mark each visited cell as 0 (to indicate that it's no longer part of the enclave), and we continue exploring neighboring cells that are also part of the enclave. Finally, we count the number of remaining 1s in the grid (which correspond to cells that are part of enclaves that are not connected to the edges).

# Intuition:

The problem asks us to count the number of enclaves in a given grid. An enclave is a group of 1s that is surrounded by 0s, either on the edges of the grid or by other 1s. Therefore, we can start by looking at the edges of the grid (i.e., the first and last row and column), since any 1 that is found on these edges cannot be part of an enclave (since it's not fully surrounded by 0s). For any 1 that we find on the edges, we perform a DFS starting from that cell, marking all visited cells as 0. The remaining 1s in the grid correspond to cells that are part of enclaves that are not connected to the edges, and we can count them to get the final answer.

```Python []
class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        def dfs(i, j):
            grid[i][j] = 0
            for x, y in (i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1):
                if 0 <= x < m and 0 <= y < n and grid[x][y]:
                    dfs(x, y)
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1 and (i == 0 or j == 0 or i == m - 1 or j == n - 1):
                    dfs(i, j)
        return sum(sum(row) for row in grid)

```
```Java []
class Solution {
    public int numEnclaves(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && grid[i][j] == 1) {
                    dfs(grid, i, j);
                }
            }
        }
        return Arrays.stream(grid).mapToInt(row -> Arrays.stream(row).sum()).sum();
    }
    
    private void dfs(int[][] grid, int i, int j) {
        grid[i][j] = 0;
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int[] direction : directions) {
            int x = i + direction[0];
            int y = j + direction[1];
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] == 1) {
                dfs(grid, x, y);
            }
        }
    }
}

```
```C++ []
class Solution {
public:
    int numEnclaves(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && grid[i][j] == 1) {
                    dfs(grid, i, j);
                }
            }
        }
        return accumulate(begin(grid), end(grid), 0, [](int sum, auto row) { return sum + accumulate(begin(row), end(row), 0); });
    }
    
private:
    void dfs(vector<vector<int>>& grid, int i, int j) {
        grid[i][j] = 0;
        vector<vector<int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (vector<int>& direction : directions) {
            int x = i + direction[0];
            int y = j + direction[1];
            if (x >= 0 && x < grid.size() && y >= 0 && y < grid[0].size() && grid[x][y] == 1) {
                dfs(grid, x, y);
            }
        }
    }
};

```
![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D