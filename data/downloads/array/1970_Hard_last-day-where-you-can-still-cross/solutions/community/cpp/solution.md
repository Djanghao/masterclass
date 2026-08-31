# ✅BS + BFS || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 119
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698498/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698498/)

---

# Intuition:

The intuition behind the problem is to find the latest day where it is still possible to cross the grid by incrementally adding cells and checking if a path exists from the top row to the bottom row, utilizing binary search to optimize the search process.

# Explanation:
**Binary Search:**
1. Initialize `left` as 0 (representing the earliest day) and `right` as `row * col` (representing the latest possible day).
2. While `left` is less than `right - 1`, do the following:
   - Calculate the mid-day as `mid = (left + right) / 2`.
   - Check if it is possible to cross the grid on day `mid` by calling the `isPossible` function.
     - The `isPossible` function checks if it is possible to cross the grid by considering the first `mid` cells from the given list. It uses BFS to explore the grid and checks if the bottom row can be reached.
     - If it is possible to cross, update `left` to `mid` and store the latest possible day in a variable (let's call it `latestPossibleDay`).
     - If it is not possible to cross, update `right` to `mid`.
3. Return `latestPossibleDay` as the latest day where it is still possible to cross the grid.

**Breadth-First Search (BFS):**
The `isPossible` function:
1. Create a grid with dimensions `(m + 1)` x `(n + 1)` and initialize all cells to 0.
2. Mark the cells from the given list as blocked by setting their corresponding positions in the grid to 1.
3. Create a queue to perform BFS.
4. For each cell in the first row of the grid, if it is not blocked, add it to the queue and mark it as visited.
5. While the queue is not empty, do the following:
   - Dequeue a cell from the front of the queue.
   - Get the current cell's coordinates (row and column).
   - Explore the neighboring cells (up, down, left, and right) by checking their validity and whether they are blocked or not.
     - If a neighboring cell is valid, not blocked, and has not been visited, mark it as visited and enqueue it.
     - If a neighboring cell is in the last row, return `true` as it means a

 path to the bottom row has been found.
6. If we finish the BFS without finding a path to the bottom row, return `false`.


# Code
```C++ []
class Solution {
public:
    bool isPossible(int m, int n, int t, vector<vector<int>>& cells) {
        vector<vector<int>> grid(m + 1, vector<int>(n + 1, 0)); // Grid representation
        vector<pair<int, int>> directions {{1, 0}, {-1, 0}, {0, 1}, {0, -1}}; // Possible directions

        for (int i = 0; i < t; i++) {
            grid[cells[i][0]][cells[i][1]] = 1; // Mark cells from the given list as blocked
        }

        queue<pair<int, int>> q;
        
        for (int i = 1; i <= n; i++) {
            if (grid[1][i] == 0) {
                q.push({1, i}); // Start BFS from the top row
                grid[1][i] = 1; // Mark the cell as visited
            }
        }
        while (!q.empty()) {
            pair<int, int> p = q.front();
            q.pop();
            int r = p.first, c = p.second; // Current cell coordinates
            for (auto d : directions) {
                int nr = r + d.first, nc = c + d.second; // Neighbor cell coordinates
                if (nr > 0 && nc > 0 && nr <= m && nc <= n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1; // Mark the neighbor cell as visited
                    if (nr == m) {
                        return true; // Found a path to the bottom row
                    }
                    q.push({nr, nc}); // Add the neighbor cell to the queue for further exploration
                }
            }
        }
        return false; // Unable to find a path to the bottom row
    }

    int latestDayToCross(int row, int col, vector<vector<int>>& cells) {
        int left = 0, right = row * col, latestPossibleDay = 0;
        while (left < right - 1) {
            int mid = left + (right - left) / 2; // Calculate the mid-day
            if (isPossible(row, col, mid, cells)) {
                left = mid; // Update the left pointer to search in the upper half
                latestPossibleDay = mid; // Update the latest possible day
            } else {
                right = mid; // Update the right pointer to search in the lower half
            }
        }
        return latestPossibleDay;
    }
};
```
```Java []
class Solution {
    public boolean isPossible(int m, int n, int t, int[][] cells) {
        int[][] grid = new int[m + 1][n + 1]; // Grid representation
        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}}; // Possible directions

        for (int i = 0; i < t; i++) {
            grid[cells[i][0]][cells[i][1]] = 1; // Mark cells from the given list as blocked
        }

        Queue<int[]> queue = new LinkedList<>();
        
        for (int i = 1; i <= n; i++) {
            if (grid[1][i] == 0) {
                queue.offer(new int[]{1, i}); // Start BFS from the top row
                grid[1][i] = 1; // Mark the cell as visited
            }
        }
        
        while (!queue.isEmpty()) {
            int[] cell = queue.poll();
            int r = cell[0], c = cell[1]; // Current cell coordinates
            
            for (int[] dir : directions) {
                int nr = r + dir[0], nc = c + dir[1]; // Neighbor cell coordinates
                
                if (nr > 0 && nc > 0 && nr <= m && nc <= n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1; // Mark the neighbor cell as visited
                    
                    if (nr == m) {
                        return true; // Found a path to the bottom row
                    }
                    
                    queue.offer(new int[]{nr, nc}); // Add the neighbor cell to the queue for further exploration
                }
            }
        }
        
        return false; // Unable to find a path to the bottom row
    }

    public int latestDayToCross(int row, int col, int[][] cells) {
        int left = 0, right = row * col, latestPossibleDay = 0;
        
        while (left < right - 1) {
            int mid = left + (right - left) / 2; // Calculate the mid-day
            
            if (isPossible(row, col, mid, cells)) {
                left = mid; // Update the left pointer to search in the upper half
                latestPossibleDay = mid; // Update the latest possible day
            } else {
                right = mid; // Update the right pointer to search in the lower half
            }
        }
        
        return latestPossibleDay;
    }
}
```
```Python3 []
class Solution:
    def isPossible(self, row, col, cells, day):
        grid = [[0] * col for _ in range(row)]
        queue = collections.deque()
        
        for r, c in cells[:day]:
            grid[r - 1][c - 1] = 1
            
        for i in range(col):
            if not grid[0][i]:
                queue.append((0, i))
                grid[0][i] = -1

        while queue:
            r, c = queue.popleft()
            if r == row - 1:
                return True
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < row and 0 <= nc < col and grid[nr][nc] == 0:
                    grid[nr][nc] = -1
                    queue.append((nr, nc))
                    
        return False
    
    
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        left, right = 1, row * col
        
        while left < right:
            mid = right - (right - left) // 2
            if self.isPossible(row, col, cells, mid):
                left = mid
            else:
                right = mid - 1
                
        return left
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**