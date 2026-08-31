# 💯Faster✅💯Lesser✅2 Methods🧠Detailed Approach🎯BFS🔥DFS🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 75
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5047879/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5047879/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 2 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
In `Find All Groups of Farmland` problem we are given a binary matrix of size `M x N` where `0` represents forest land and `1` represents farmland. Our task is to return a list of coordinates representing the top-left and bottom-right corners of each rectangular farmland in the matrix.

To efficiently solve this problem, we can use a depth-first search (DFS) approach similar to the one used in the `Number of Islands` problem. However, unlike the standard `Number of Islands` problem where islands can have arbitrary shapes, here we exploit the fact that all farmlands are rectangular.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering two different methods to solve this problem:
1. Depth-First Search (DFS)
2.  Breadth-First Search (BFS)

# 1\uFE0F\u20E3 Depth-First Search (DFS): 

### Approach\uD83E\uDD13:

1. **Initialize:** Start by iterating over each cell in the grid.
2. **DFS Traversal:** When encountering a cell with the value `1` (indicating farmland), initiate a DFS from that cell to explore the entire connected region of farmland.
3. **Marking Farmland:** During the DFS traversal, mark all visited cells to avoid reprocessing.
4. **Recording Rectangles:** Keep track of the coordinates (top-left and bottom-right corners) of each identified rectangle.
5. **Output:** Once all regions are explored, return the list of identified rectangles.

### Algorithm\uD83E\uDD13:

1. Initialize an empty list to store rectangles.
2. Iterate through each cell in the grid:
   - If a cell contains `1` and hasn't been visited:
     - Initiate a DFS from that cell to explore the connected farmland.
     - During DFS, keep track of the boundaries (min/max row and column) of the current region.
     - Once DFS completes for a region, record the rectangle's coordinates.
3. Implement the DFS function recursively or using a stack to traverse adjacent cells.
4. Return the list of identified rectangles.

<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.
 -->
<!-- - \uD83D\uDE80 Space Complexity: `O(n)` for the HashSet. -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        def dfs(x, y):
            # This function performs DFS to mark all connected farmland and find the boundaries
            stack = [(x, y)]
            min_row, min_col = x, y
            max_row, max_col = x, y
            visited.add((x, y))
            
            while stack:
                cur_x, cur_y = stack.pop()
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = cur_x + dx, cur_y + dy
                    if 0 <= nx < rows and 0 <= ny < cols and (nx, ny) not in visited and land[nx][ny] == 1:
                        visited.add((nx, ny))
                        stack.append((nx, ny))
                        min_row = min(min_row, nx)
                        min_col = min(min_col, ny)
                        max_row = max(max_row, nx)
                        max_col = max(max_col, ny)
            
            return (min_row, min_col, max_row, max_col)
        
        rows, cols = len(land), len(land[0])
        visited = set()
        result = []
        
        for i in range(rows):
            for j in range(cols):
                if land[i][j] == 1 and (i, j) not in visited:
                    # Found a new piece of farmland
                    min_row, min_col, max_row, max_col = dfs(i, j)
                    result.append([min_row, min_col, max_row, max_col])
        
        return result
```
```Java []
class Solution {
    public int[][] findFarmland(int[][] land) {
        int rows = land.length;
        int cols = land[0].length;
        Set<String> visited = new HashSet<>();
        List<int[]> result = new ArrayList<>();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (land[i][j] == 1 && !visited.contains(i + "," + j)) {
                    int[] bounds = dfs(land, visited, i, j);
                    result.add(bounds);
                }
            }
        }

        return result.toArray(new int[result.size()][]);
    }

    private int[] dfs(int[][] land, Set<String> visited, int x, int y) {
        Stack<int[]> stack = new Stack<>();
        stack.push(new int[]{x, y});
        visited.add(x + "," + y);

        int minRow = x, minCol = y;
        int maxRow = x, maxCol = y;

        while (!stack.isEmpty()) {
            int[] current = stack.pop();
            int curX = current[0], curY = current[1];

            int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
            for (int[] dir : directions) {
                int nx = curX + dir[0];
                int ny = curY + dir[1];

                if (nx >= 0 && nx < land.length && ny >= 0 && ny < land[0].length &&
                    land[nx][ny] == 1 && !visited.contains(nx + "," + ny)) {
                    visited.add(nx + "," + ny);
                    stack.push(new int[]{nx, ny});
                    minRow = Math.min(minRow, nx);
                    minCol = Math.min(minCol, ny);
                    maxRow = Math.max(maxRow, nx);
                    maxCol = Math.max(maxCol, ny);
                }
            }
        }

        return new int[]{minRow, minCol, maxRow, maxCol};
    }
}

```
```C++ []
class Solution {
public:
    vector<vector<int>> findFarmland(vector<vector<int>>& land) {
        int rows = land.size();
        int cols = land[0].size();
        unordered_set<string> visited;
        vector<vector<int>> result;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (land[i][j] == 1 && visited.find(to_string(i) + "," + to_string(j)) == visited.end()) {
                    vector<int> bounds = dfs(land, visited, i, j);
                    result.push_back(bounds);
                }
            }
        }

        return result;
    }

    vector<int> dfs(vector<vector<int>>& land, unordered_set<string>& visited, int x, int y) {
        stack<pair<int, int>> stack;
        stack.push({x, y});
        visited.insert(to_string(x) + "," + to_string(y));

        int minRow = x, minCol = y;
        int maxRow = x, maxCol = y;

        while (!stack.empty()) {
            auto current = stack.top();
            stack.pop();
            int curX = current.first, curY = current.second;

            vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
            for (auto& dir : directions) {
                int nx = curX + dir.first;
                int ny = curY + dir.second;

                if (nx >= 0 && nx < land.size() && ny >= 0 && ny < land[0].size() &&
                    land[nx][ny] == 1 && visited.find(to_string(nx) + "," + to_string(ny)) == visited.end()) {
                    visited.insert(to_string(nx) + "," + to_string(ny));
                    stack.push({nx, ny});
                    minRow = min(minRow, nx);
                    minCol = min(minCol, ny);
                    maxRow = max(maxRow, nx);
                    maxCol = max(maxCol, ny);
                }
            }
        }

        return {minRow, minCol, maxRow, maxCol};
    }
};

```

# 2\uFE0F\u20E3  Breadth-First Search (BFS):
### Approach\uD83D\uDE0E:

1. **Initialize:** Traverse through each cell of the grid.
2. **BFS Traversal:** When encountering a cell with the value `1` (indicating farmland) and not visited:
   - Use BFS to explore the entire connected region of farmland starting from this cell.
   - During BFS traversal, use a queue to process cells level by level.
   - Keep track of the boundaries (min/max row and column) of the current region.
3. **Marking Farmland:** Mark visited cells to avoid reprocessing.
4. **Recording Rectangles:** Record the boundaries of each identified rectangle.
5. **Output:** Once all regions are explored, return the list of identified rectangles.

### Algorithm\uD83D\uDE0E:

1. Initialize a queue (`queue`) to perform BFS and a set (`visited`) to keep track of visited cells.
2. Iterate through each cell `(i, j)` in the grid:
   - If `land[i][j]` is `1` and `(i, j)` is not visited:
     - Initialize `min_row`, `min_col`, `max_row`, `max_col` to the current cell `(i, j)`.
     - Enqueue `(i, j)` into the queue and mark it as visited.
     - While the queue is not empty:
       - Dequeue a cell `(cur_i, cur_j)` from the queue.
       - Explore its four neighboring cells `(nx, ny)` (up, down, left, right).
       - If `(nx, ny)` is within the grid bounds and `land[nx][ny]` is `1` and not visited:
         - Enqueue `(nx, ny)`.
         - Mark `(nx, ny)` as visited.
         - Update `min_row`, `min_col`, `max_row`, `max_col` based on `(nx, ny)`.
     - After BFS completes for the current region, record the rectangle `[min_row, min_col, max_row, max_col]`.
3. Return the list of identified rectangles.

<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.

- \uD83D\uDE80 Space Complexity: `O(n)` for the two lists. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        rows, cols = len(land), len(land[0])
        result = []
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        visited = set()
        
        def bfs(start_row, start_col):
            queue = deque([(start_row, start_col)])
            visited.add((start_row, start_col))
            min_row, min_col, max_row, max_col = start_row, start_col, start_row, start_col
            
            while queue:
                cur_row, cur_col = queue.popleft()
                
                for dr, dc in directions:
                    new_row, new_col = cur_row + dr, cur_col + dc
                    
                    if 0 <= new_row < rows and 0 <= new_col < cols and (new_row, new_col) not in visited and land[new_row][new_col] == 1:
                        visited.add((new_row, new_col))
                        queue.append((new_row, new_col))
                        min_row = min(min_row, new_row)
                        min_col = min(min_col, new_col)
                        max_row = max(max_row, new_row)
                        max_col = max(max_col, new_col)
            
            return [min_row, min_col, max_row, max_col]
        
        for i in range(rows):
            for j in range(cols):
                if land[i][j] == 1 and (i, j) not in visited:
                    farmland = bfs(i, j)
                    result.append(farmland)
        
        return result

```
```Java []
class Solution {
    public int[][] findFarmland(int[][] land) {
        int rows = land.length;
        int cols = land[0].length;
        List<int[]> result = new ArrayList<>();
        boolean[][] visited = new boolean[rows][cols];
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        Queue<int[]> queue = new LinkedList<>();
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (land[i][j] == 1 && !visited[i][j]) {
                    int[] farmland = {i, j, i, j}; // [min_row, min_col, max_row, max_col]
                    queue.offer(new int[]{i, j});
                    visited[i][j] = true;
                    
                    while (!queue.isEmpty()) {
                        int[] curr = queue.poll();
                        int curRow = curr[0];
                        int curCol = curr[1];
                        
                        for (int[] dir : directions) {
                            int newRow = curRow + dir[0];
                            int newCol = curCol + dir[1];
                            
                            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                                land[newRow][newCol] == 1 && !visited[newRow][newCol]) {
                                queue.offer(new int[]{newRow, newCol});
                                visited[newRow][newCol] = true;
                                farmland[2] = Math.max(farmland[2], newRow); // update max_row
                                farmland[3] = Math.max(farmland[3], newCol); // update max_col
                            }
                        }
                    }
                    
                    result.add(farmland);
                }
            }
        }
        
        return result.toArray(new int[result.size()][]);
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> findFarmland(vector<vector<int>>& land) {
        int rows = land.size();
        int cols = land[0].size();
        vector<vector<int>> result;
        vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        set<pair<int, int>> visited;
        
        auto bfs = [&](int start_row, int start_col) -> vector<int> {
            queue<pair<int, int>> q;
            q.push({start_row, start_col});
            visited.insert({start_row, start_col});
            int min_row = start_row, min_col = start_col, max_row = start_row, max_col = start_col;
            
            while (!q.empty()) {
                auto [cur_row, cur_col] = q.front();
                q.pop();
                
                for (auto [dr, dc] : directions) {
                    int new_row = cur_row + dr;
                    int new_col = cur_col + dc;
                    
                    if (new_row >= 0 && new_row < rows && new_col >= 0 && new_col < cols && visited.find({new_row, new_col}) == visited.end() && land[new_row][new_col] == 1) {
                        visited.insert({new_row, new_col});
                        q.push({new_row, new_col});
                        min_row = min(min_row, new_row);
                        min_col = min(min_col, new_col);
                        max_row = max(max_row, new_row);
                        max_col = max(max_col, new_col);
                    }
                }
            }
            
            return {min_row, min_col, max_row, max_col};
        };
        
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (land[i][j] == 1 && visited.find({i, j}) == visited.end()) {
                    vector<int> farmland = bfs(i, j);
                    result.push_back(farmland);
                }
            }
        }
        
        return result;
    }
};
```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA