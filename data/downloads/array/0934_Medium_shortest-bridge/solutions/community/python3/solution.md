# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 24
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/3546474/](https://leetcode.com/problems/shortest-bridge/solutions/3546474/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. This is only for first 10,000 Subscribers.  **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe


# or


# Click the Link in my Profile

# Approach:

- Perform a depth-first search (DFS) to find the first island in the grid. Mark the visited cells as you traverse through the island.
- Start a breadth-first search (BFS) from the visited cells of the first island. Keep expanding to neighboring cells until you find the second island or exhaust all possible cells.
- During the BFS, maintain the level (distance) from the first island. Return the level when you encounter the second island.
- If no second island is found, return -1 to indicate that no bridge exists between the two islands.
# Intuition:

- We start by finding the first island using a DFS approach. We traverse the grid until we find the first cell with a value of 1, indicating the start of the island.
- Once we find the first island, we mark all the visited cells in a set to keep track of them.
- Next, we use a BFS approach starting from the visited cells of the first island. We explore the neighboring cells and check if they are part of the second island or not.
- We continue BFS until we find the second island or exhaust all possible cells.
- By using BFS, we can ensure that we find the shortest bridge between the two islands, as we traverse the grid layer by layer.
- The distance (level) of each layer in the BFS represents the shortest path from the first island to the second island.
- If we find the second island during BFS, we return the level as the shortest distance. Otherwise, if no second island is found, we return -1 to indicate that no bridge exists between the two islands.

```Python []
class Solution:
    def shortestBridge(self, grid):
        m, n = len(grid), len(grid[0])
        start_i, start_j = next((i, j) for i in range(m) for j in range(n) if grid[i][j])
        
        
        stack = [(start_i, start_j)]
        visited = set(stack)
        while stack:
            i, j = stack.pop()
            visited.add((i, j))  
            for ii, jj in (i-1, j), (i, j-1), (i, j+1), (i+1, j):
                if 0 <= ii < m and 0 <= jj < n and grid[ii][jj] and (ii, jj) not in visited:
                    stack.append((ii, jj))
                    visited.add((ii, jj))
        
        
        ans = 0
        queue = list(visited)
        while queue:
            new_queue = []
            for i, j in queue:
                for ii, jj in (i-1, j), (i, j-1), (i, j+1), (i+1, j):
                    if 0 <= ii < m and 0 <= jj < n and (ii, jj) not in visited:
                        if grid[ii][jj] == 1:
                            return ans
                        new_queue.append((ii, jj))
                        visited.add((ii, jj))
            queue = new_queue
            ans += 1

```
```Java []

class Solution {
    private int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int shortestBridge(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int startI = -1;
        int startJ = -1;
        boolean found = false;

        // Step 1: Find the first island using DFS
        for (int i = 0; i < m; i++) {
            if (found) {
                break;
            }
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    startI = i;
                    startJ = j;
                    found = true;
                    break;
                }
            }
        }

        Set<Integer> visited = new HashSet<>();
        dfs(grid, startI, startJ, visited);

        // Step 2: Perform BFS from the first island to find the shortest bridge
        Queue<Integer> queue = new ArrayDeque<>(visited);
        int level = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                int currI = curr / n;
                int currJ = curr % n;

                for (int[] dir : directions) {
                    int ni = currI + dir[0];
                    int nj = currJ + dir[1];
                    int neighbor = ni * n + nj;

                    if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited.contains(neighbor)) {
                        if (grid[ni][nj] == 1) {
                            return level;
                        }
                        queue.offer(neighbor);
                        visited.add(neighbor);
                    }
                }
            }
            level++;
        }

        return -1; // No bridge found
    }

    private void dfs(int[][] grid, int i, int j, Set<Integer> visited) {
        int m = grid.length;
        int n = grid[0].length;
        int curr = i * n + j;

        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1 || visited.contains(curr)) {
            return;
        }

        visited.add(curr);

        for (int[] dir : directions) {
            int ni = i + dir[0];
            int nj = j + dir[1];
            dfs(grid, ni, nj, visited);
        }
    }
}

```
```C++ []
class Solution {
public:
    int shortestBridge(vector<vector<int>>& A) {
        int m = A.size();
        int n = A[0].size();

        // Step 1: Find the first island using DFS and mark its cells as visited
        bool found = false;
        unordered_set<int> visited;
        for (int i = 0; i < m; i++) {
            if (found) {
                break;
            }
            for (int j = 0; j < n; j++) {
                if (A[i][j] == 1) {
                    dfs(A, i, j, visited);
                    found = true;
                    break;
                }
            }
        }

        // Step 2: Perform BFS to find the shortest bridge to the second island
        queue<int> q;
        for (int cell : visited) {
            q.push(cell);
        }

        vector<vector<int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int level = 0;

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int curr = q.front();
                q.pop();

                int currI = curr / n;
                int currJ = curr % n;

                for (auto dir : directions) {
                    int ni = currI + dir[0];
                    int nj = currJ + dir[1];
                    int neighbor = ni * n + nj;

                    if (ni >= 0 && ni < m && nj >= 0 && nj < n && visited.find(neighbor) == visited.end()) {
                        if (A[ni][nj] == 1) {
                            return level;
                        }
                        q.push(neighbor);
                        visited.insert(neighbor);
                    }
                }
            }
            level++;
        }

        return -1; // No bridge found
    }

private:
    void dfs(vector<vector<int>>& A, int i, int j, unordered_set<int>& visited) {
        int m = A.size();
        int n = A[0].size();

        if (i < 0 || i >= m || j < 0 || j >= n || A[i][j] != 1 || visited.find(i * n + j) != visited.end()) {
            return;
        }

        visited.insert(i * n + j);
        vector<vector<int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        for (auto dir : directions) {
            int ni = i + dir[0];
            int nj = j + dir[1];
            dfs(A, ni, nj, visited);
        }
    }
};
```


# An Upvote will be encouraging \uD83D\uDC4D