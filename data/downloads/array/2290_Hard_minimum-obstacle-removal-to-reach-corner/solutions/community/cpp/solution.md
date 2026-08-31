# Minimum Obstacle Removal BFS Approach | ✅ Beats 100% | C++ | Python | Java | JavaScript

**Author:** BijoySingh7
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090483/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090483/)

---



# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F  

---

## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).

---


###### *Solution in C++, Python, Java, and JavaScript*

---


```cpp []
class Solution {
public:
    int minimumObstacles(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<vector<int>> distance(m, vector<int>(n, INT_MAX));
        deque<pair<int, int>> dq;

        distance[0][0] = 0;
        dq.push_front({0, 0});
        vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        while (!dq.empty()) {
            auto [x, y] = dq.front();
            dq.pop_front();
            for (auto [dx, dy] : directions) {
                int nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    int newDist = distance[x][y] + grid[nx][ny];
                    if (newDist < distance[nx][ny]) {
                        distance[nx][ny] = newDist;
                        if (grid[nx][ny] == 0) {
                            dq.push_front({nx, ny});
                        } else {
                            dq.push_back({nx, ny});
                        }
                    }
                }
            }
        }
        return distance[m-1][n-1];
    }
};
```

```python []
class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        distance = [[float('inf')] * n for _ in range(m)]
        dq = collections.deque()

        distance[0][0] = 0
        dq.appendleft((0, 0))
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        while dq:
            x, y = dq.popleft()
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < m and 0 <= ny < n:
                    newDist = distance[x][y] + grid[nx][ny]
                    if newDist < distance[nx][ny]:
                        distance[nx][ny] = newDist
                        if grid[nx][ny] == 0:
                            dq.appendleft((nx, ny))
                        else:
                            dq.append((nx, ny))
        return distance[m-1][n-1]
```

```java []
class Solution {
    public int minimumObstacles(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] distance = new int[m][n];
        for (int[] row : distance) Arrays.fill(row, Integer.MAX_VALUE);
        Deque<int[]> dq = new ArrayDeque<>();

        distance[0][0] = 0;
        dq.offerFirst(new int[] {0, 0});
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        while (!dq.isEmpty()) {
            int[] cell = dq.pollFirst();
            int x = cell[0], y = cell[1];
            for (int[] dir : directions) {
                int nx = x + dir[0], ny = y + dir[1];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    int newDist = distance[x][y] + grid[nx][ny];
                    if (newDist < distance[nx][ny]) {
                        distance[nx][ny] = newDist;
                        if (grid[nx][ny] == 0) {
                            dq.offerFirst(new int[] {nx, ny});
                        } else {
                            dq.offerLast(new int[] {nx, ny});
                        }
                    }
                }
            }
        }
        return distance[m-1][n-1];
    }
}
```

```javascript []
class Solution {
    minimumObstacles(grid) {
        const m = grid.length, n = grid[0].length;
        const distance = Array.from({ length: m }, () => Array(n).fill(Infinity));
        const dq = [];
        
        distance[0][0] = 0;
        dq.unshift([0, 0]);
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        
        while (dq.length > 0) {
            const [x, y] = dq.shift();
            for (const [dx, dy] of directions) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    const newDist = distance[x][y] + grid[nx][ny];
                    if (newDist < distance[nx][ny]) {
                        distance[nx][ny] = newDist;
                        if (grid[nx][ny] === 0) {
                            dq.unshift([nx, ny]);
                        } else {
                            dq.push([nx, ny]);
                        }
                    }
                }
            }
        }
        return distance[m-1][n-1];
    }
}
```

---


### Explanation:
1. **Initialization:**  
   - Start from the top-left corner `(0, 0)` with an initial `distance` of `0`.  
   - Use a deque (double-ended queue) to implement a **0-1 BFS** approach.  
   - Create a `distance` matrix of size `m x n` initialized with a large value (e.g., `INT_MAX` or `float('inf')`).  
   - Set the `distance` of the starting cell to `0`.  

2. **Priority-based BFS:**  
   - Use a deque to explore the grid.  
   - If moving to a neighboring cell doesn\u2019t require removing an obstacle (`grid[nx][ny] == 0`), push it to the **front** of the deque (higher priority).  
   - If moving to a neighboring cell requires removing an obstacle (`grid[nx][ny] == 1`), push it to the **back** of the deque (lower priority).  

3. **Update Distance:**  
   - For each neighbor `(nx, ny)`, calculate the new potential distance as `distance[x][y] + grid[nx][ny]`.  
   - If the new distance is smaller than the current `distance[nx][ny]`, update `distance[nx][ny]` and add the cell to the deque based on its priority.  

4. **Termination:**  
   - The BFS stops when all possible paths have been explored.  
   - The final `distance[m-1][n-1]` gives the minimum number of obstacles to be removed to reach the bottom-right corner `(m-1, n-1)`.  

---

### Approach (Step-by-Step):
1. **Grid and Matrix Setup:**  
   - Define the size of the grid `m x n`.  
   - Initialize the `distance` matrix to track the minimum number of obstacles removed for each cell.  

2. **Deque for BFS:**  
   - Use a deque to implement a **0-1 BFS** algorithm.  
   - Insert the starting cell `(0, 0)` into the deque with a `distance` of `0`.  

3. **Direction Movement:**  
   - Use a list of directional movements: `[(0, 1), (1, 0), (0, -1), (-1, 0)]` to explore all possible neighbors (up, down, left, right).  

4. **BFS Exploration:**  
   - While the deque is not empty:  
     - Pop the current cell `(x, y)` from the deque.  
     - For each neighbor `(nx, ny)`:  
       - Check if it\u2019s within the bounds of the grid.  
       - Calculate the new distance as `distance[x][y] + grid[nx][ny]`.  
       - If this distance is smaller than the current `distance[nx][ny]`:  
         - Update `distance[nx][ny]`.  
         - Push the neighbor to the **front** (if `grid[nx][ny] == 0`) or the **back** (if `grid[nx][ny] == 1`) of the deque.  

5. **Final Distance:**  
   - After BFS completes, return `distance[m-1][n-1]` as the result.

---


# Complexity
- **Time Complexity**: O(m \xD7 n)  
- **Space Complexity**: O(m \xD7 n)  

---

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*