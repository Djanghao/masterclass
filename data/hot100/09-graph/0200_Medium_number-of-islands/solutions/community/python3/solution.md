# 【Video】Check 4 directions + Bonus Solutions

**Author:** niits
**Votes:** 225
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/5608697/](https://leetcode.com/problems/number-of-islands/solutions/5608697/)

---

# Intuition
Check 4 directions.

# Solution Video

https://youtu.be/HpinqiqiXUQ

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,265
Thank you for your support!

---

# Approach
Actually, there isn't much to explation. We will check `4 direcitons`(`top`, `right`, `bottom`, `left`) from each place.

If we find `"1"`, we will keep the place(`row` and `column`).

But one problem is that we will keep the places where we already visited, so to prevent revisiting the same places, we also keep the places where we already visited.


---

\u2B50\uFE0F Points

- Check `4 directions` from each place
- If we find `"1"` and `the place is not visited yet`, keep it.

**This algorithm will visit all `"1"` places with one BFS operation if the places are connected in the same island, that means every time we start new BFS operation, the place is one of new islands.**

---

Easy!\uD83D\uDE04
Let's see solution codes!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(r * c)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(r * c)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        visited = set()
        rows, cols = len(grid), len(grid[0])

        def bfs(r, c):
            q = deque()
            visited.add((r, c))
            q.append((r, c))

            while q:
                row, col = q.popleft()
                directions = [[1,0],[-1,0],[0,1],[0,-1]]

                for dr, dc in directions:
                    r, c = row + dr, col + dc
                    if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in visited:
                        q.append((r, c))
                        visited.add((r, c))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1" and (r, c) not in visited:
                    islands += 1
                    bfs(r, c)

        return islands
```
```javascript []
var numIslands = function(grid) {
    let islands = 0;
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        const q = [];
        visited.add(`${r},${c}`);
        q.push([r, c]);

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1" && !visited.has(`${nr},${nc}`)) {
                    q.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                islands += 1;
                bfs(r, c);
            }
        }
    }

    return islands;    
};
```
```java []
class Solution {
    public int numIslands(char[][] grid) {
        int islands = 0;
        int rows = grid.length;
        int cols = grid[0].length;
        Set<String> visited = new HashSet<>();

        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1' && !visited.contains(r + "," + c)) {
                    islands++;
                    bfs(grid, r, c, visited, directions, rows, cols);
                }
            }
        }

        return islands;        
    }

    private void bfs(char[][] grid, int r, int c, Set<String> visited, int[][] directions, int rows, int cols) {
        Queue<int[]> q = new LinkedList<>();
        visited.add(r + "," + c);
        q.add(new int[]{r, c});

        while (!q.isEmpty()) {
            int[] point = q.poll();
            int row = point[0], col = point[1];

            for (int[] direction : directions) {
                int nr = row + direction[0], nc = col + direction[1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1' && !visited.contains(nr + "," + nc)) {
                    q.add(new int[]{nr, nc});
                    visited.add(nr + "," + nc);
                }
            }
        }
    }    
}
```
```C++ []
class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int islands = 0;
        int rows = grid.size();
        int cols = grid[0].size();
        unordered_set<string> visited;

        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1' && visited.find(to_string(r) + "," + to_string(c)) == visited.end()) {
                    islands++;
                    bfs(grid, r, c, visited, directions, rows, cols);
                }
            }
        }

        return islands;        
    }

private:
    void bfs(vector<vector<char>>& grid, int r, int c, unordered_set<string>& visited, vector<pair<int, int>>& directions, int rows, int cols) {
        queue<pair<int, int>> q;
        visited.insert(to_string(r) + "," + to_string(c));
        q.push({r, c});

        while (!q.empty()) {
            auto [row, col] = q.front();
            q.pop();

            for (auto [dr, dc] : directions) {
                int nr = row + dr;
                int nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1' && visited.find(to_string(nr) + "," + to_string(nc)) == visited.end()) {
                    q.push({nr, nc});
                    visited.insert(to_string(nr) + "," + to_string(nc));
                }
            }
        }
    }
};    
```

# Step by Step Algorithm

**Step 1: Initialize Variables**
```python
class Solution:
def numIslands(self, grid: List[List[str]]) -> int:
    islands = 0
    visited = set()
    rows, cols = len(grid), len(grid[0])
```
- `islands`: A counter to keep track of the number of islands found.
- `visited`: A set to track the cells that have already been processed to avoid reprocessing them.
- `rows` and `cols`: Store the dimensions of the grid. `rows` is the number of rows, and `cols` is the number of columns.

**Step 2: Define the BFS Function**
```python
def bfs(r, c):
    q = deque()
    visited.add((r, c))
    q.append((r, c))
```
- `bfs(r, c)`: A helper function that uses Breadth-First Search (BFS) to explore and mark all cells of the island starting from cell `(r, c)`.
- `q = deque()`: Initialize a queue to process cells. `deque` is used for efficient popping from the front.
- `visited.add((r, c))`: Mark the starting cell `(r, c)` as visited.
- `q.append((r, c))`: Add the starting cell to the queue.

**Step 3: Process the Queue**
```python
while q:
    row, col = q.popleft()
    directions = [[1,0],[-1,0],[0,1],[0,-1]]
```
- `while q`: Process cells in the queue until it\u2019s empty.
- `row, col = q.popleft()`: Dequeue the front cell.
- `directions = [[1,0],[-1,0],[0,1],[0,-1]]`: Define the four possible movement directions (down, up, right, left).

**Step 4: Explore Neighbors**
```python
for dr, dc in directions:
    r, c = row + dr, col + dc
    if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in visited:
        q.append((r, c))
        visited.add((r, c))
```
- `for dr, dc in directions`: Iterate through each direction.
- `r, c = row + dr, col + dc`: Compute the new cell\u2019s coordinates.
- `if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in visited`: Check if the new cell is within bounds, is land (`"1"`), and has not been visited.
  - If true, add the new cell to the queue and mark it as visited.

**Step 5: Process Each Cell in Grid**
```python
for r in range(rows):
    for c in range(cols):
        if grid[r][c] == "1" and (r, c) not in visited:
            islands += 1
            bfs(r, c)
```
- `for r in range(rows)`: Loop through each row.
- `for c in range(cols)`: Loop through each column in the current row.
- `if grid[r][c] == "1" and (r, c) not in visited`: Check if the cell is land and hasn\u2019t been visited.
  - If true, increment the `islands` counter and call `bfs(r, c)` to mark all connected land cells of this island.

**Step 6: Return the Result**
```python
return islands
```
- After processing all cells, return the total count of `islands`.

---

# Bonus

If we can update `grid` directly, we can write solutions below.

```python []
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        rows, cols = len(grid), len(grid[0])

        def bfs(r, c):
            q = deque()
            q.append((r, c))
            grid[r][c] = "0"

            while q:
                row, col = q.popleft()
                directions = [[1,0],[-1,0],[0,1],[0,-1]]

                for dr, dc in directions:
                    r, c = row + dr, col + dc
                    if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1":
                        q.append((r, c))
                        grid[r][c] = "0"

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    islands += 1
                    bfs(r, c)

        return islands
```
```javascript []
var numIslands = function(grid) {
    let islands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        const q = [];
        q.push([r, c]);
        grid[r][c] = "0";

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1") {
                    q.push([nr, nc]);
                    grid[nr][nc] = "0";
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islands += 1;
                bfs(r, c);
            }
        }
    }

    return islands;    
};
```
```java []
class Solution {
    public int numIslands(char[][] grid) {
        int islands = 0;
        int rows = grid.length;
        int cols = grid[0].length;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    islands++;
                    bfs(grid, r, c, rows, cols);
                }
            }
        }

        return islands;        
    }

    private void bfs(char[][] grid, int r, int c, int rows, int cols) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{r, c});
        grid[r][c] = '0';

        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!q.isEmpty()) {
            int[] point = q.poll();
            int row = point[0], col = point[1];

            for (int[] direction : directions) {
                int nr = row + direction[0];
                int nc = col + direction[1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1') {
                    q.add(new int[]{nr, nc});
                    grid[nr][nc] = '0';
                }
            }
        }
    }    
}
```
```C++ []
class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int islands = 0;
        int rows = grid.size();
        int cols = grid[0].size();

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    islands++;
                    bfs(grid, r, c, rows, cols);
                }
            }
        }

        return islands;        
    }

private:
    void bfs(vector<vector<char>>& grid, int r, int c, int rows, int cols) {
        queue<pair<int, int>> q;
        q.push({r, c});
        grid[r][c] = '0';

        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!q.empty()) {
            auto [row, col] = q.front();
            q.pop();

            for (auto [dr, dc] : directions) {
                int nr = row + dr;
                int nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1') {
                    q.push({nr, nc});
                    grid[nr][nc] = '0';
                }
            }
        }
    }
};    
```
---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous video - #217 Contains Duplicate

https://youtu.be/3iHn7KBuX-0