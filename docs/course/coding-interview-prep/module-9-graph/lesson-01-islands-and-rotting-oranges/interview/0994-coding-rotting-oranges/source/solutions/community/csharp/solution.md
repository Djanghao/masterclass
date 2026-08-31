# 🚀 Easy & Simple || 💯 Beats 100% || 🔄 BFS + Queue

**Author:** mansimittal935
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/6119887/](https://leetcode.com/problems/rotting-oranges/solutions/6119887/)

---

# \uD83C\uDF4A Problem Intuition:
Simulate the spread of rot among oranges in a grid. Rotten oranges (2) infect fresh ones (1) in 4 directions per minute. Use BFS to track time and determine if all oranges rot or if it's impossible.

---

# \uD83D\uDE80 Approach:
## Find Rotten Oranges \uD83E\uDDD0:

- Add all rotten oranges (2) to a queue and mark them as visited.
## BFS Spread \uD83C\uDF10:

- Process each orange in the queue, infecting its fresh neighbors (1) in 4 directions.
- Count BFS levels to track time (count).
## Final Check \u2705:

- If fresh oranges (1) remain, return -1.
- Otherwise, return count (time taken).

---

# Complexity
##  \u23F1\uFE0F Time Complexity: *O(n * m)*
- Traverse the grid once, process each cell at most once.

##  \uD83D\uDCBE Space Complexity: *O(n * m)*
- Space for queue and visited matrix.

---

# Code
```cpp []
class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int n = grid.size(), m = grid[0].size();
        queue<pair<int, int>> q;
        vector<vector<bool>> vis (n, vector<bool> (m, false));

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(grid[i][j] == 2) {
                    q.push({i, j});
                    vis[i][j] = true;
                }
            }
        }

        int count = -1;
        vector<pair<int, int>> dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; 
        while(!q.empty()) {
            int size = q.size();
            count++;
            for(int i = 0; i < size; i++) {
                int row = q.front().first;
                int col = q.front().second;
                q.pop();

                if(grid[row][col] == 1) {
                    grid[row][col] = 2;
                }

                for(auto [dx, dy]: dir) {
                    int nx = row + dx, ny = col + dy;
                    if(nx >= 0 && nx < n && ny >= 0 && ny < m 
                        && !vis[nx][ny] && grid[nx][ny] == 1) {
                        vis[nx][ny] = true;
                        q.push({nx, ny});
                    } 
                }
            }
        }

        for(int row = 0; row < n; row++) {
            for(int col = 0; col < m; col++) {
                if(grid[row][col] == 1) {
                    return -1;
                }
            }
        }
        if(count == -1) return 0;
        return count;
    }
};
```

```java []
class Solution {
    public int orangesRotting(int[][] grid) {
        int n = grid.length, m = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visited = new boolean[n][m];

        // Step 1: Enqueue all rotten oranges
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 2) {
                    queue.add(new int[]{i, j});
                    visited[i][j] = true;
                }
            }
        }

        int count = -1;
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        // Step 2: BFS to rot fresh oranges
        while (!queue.isEmpty()) {
            int size = queue.size();
            count++;
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                int row = cell[0], col = cell[1];

                for (int[] dir : directions) {
                    int nx = row + dir[0];
                    int ny = col + dir[1];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m 
                        && !visited[nx][ny] && grid[nx][ny] == 1) {
                        visited[nx][ny] = true;
                        grid[nx][ny] = 2;  // Rot the fresh orange
                        queue.add(new int[]{nx, ny});
                    }
                }
            }
        }

        // Step 3: Check for remaining fresh oranges
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    return -1;  // Fresh orange remains
                }
            }
        }

        return count == -1 ? 0 : count;  // Return time or 0 if no fresh oranges
    }
}

```
```javascript []
class Solution {
    orangesRotting(grid) {
        const n = grid.length, m = grid[0].length;
        const queue = [];
        const visited = Array.from({ length: n }, () => Array(m).fill(false));

        // Step 1: Enqueue all rotten oranges
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }

        let count = -1;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // Step 2: BFS to rot fresh oranges
        while (queue.length > 0) {
            const size = queue.length;
            count++;
            for (let i = 0; i < size; i++) {
                const [row, col] = queue.shift();

                for (const [dx, dy] of directions) {
                    const nx = row + dx;
                    const ny = col + dy;
                    if (
                        nx >= 0 && nx < n && ny >= 0 && ny < m &&
                        !visited[nx][ny] && grid[nx][ny] === 1
                    ) {
                        visited[nx][ny] = true;
                        grid[nx][ny] = 2; // Rot the fresh orange
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        // Step 3: Check for remaining fresh oranges
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    return -1; // Fresh orange remains
                }
            }
        }

        return count === -1 ? 0 : count; // Return time or 0 if no fresh oranges
    }
}

```
```python []
from collections import deque

class Solution:
    def orangesRotting(self, grid: list[list[int]]) -> int:
        n, m = len(grid), len(grid[0])
        queue = deque()
        visited = [[False] * m for _ in range(n)]

        # Step 1: Enqueue all rotten oranges
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 2:
                    queue.append((i, j))
                    visited[i][j] = True

        count = -1
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        # Step 2: BFS to rot fresh oranges
        while queue:
            size = len(queue)
            count += 1
            for _ in range(size):
                row, col = queue.popleft()

                for dx, dy in directions:
                    nx, ny = row + dx, col + dy
                    if (
                        0 <= nx < n and 0 <= ny < m and
                        not visited[nx][ny] and grid[nx][ny] == 1
                    ):
                        visited[nx][ny] = True
                        grid[nx][ny] = 2  # Rot the fresh orange
                        queue.append((nx, ny))

        # Step 3: Check for remaining fresh oranges
        for row in grid:
            if 1 in row:
                return -1  # Fresh orange remains

        return 0 if count == -1 else count  # Return time or 0 if no fresh oranges

```
```ruby []
class Solution
  def oranges_rotting(grid)
    n = grid.length
    m = grid[0].length
    queue = []
    visited = Array.new(n) { Array.new(m, false) }

    # Step 1: Enqueue all rotten oranges
    (0...n).each do |i|
      (0...m).each do |j|
        if grid[i][j] == 2
          queue << [i, j]
          visited[i][j] = true
        end
      end
    end

    count = -1
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    # Step 2: BFS to rot fresh oranges
    while !queue.empty?
      size = queue.size
      count += 1
      size.times do
        row, col = queue.shift

        directions.each do |dx, dy|
          nx, ny = row + dx, col + dy
          if nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && grid[nx][ny] == 1
            visited[nx][ny] = true
            grid[nx][ny] = 2 # Rot the fresh orange
            queue << [nx, ny]
          end
        end
      end
    end

    # Step 3: Check for remaining fresh oranges
    grid.each do |row|
      return -1 if row.include?(1)
    end

    count == -1 ? 0 : count # Return time or 0 if no fresh oranges
  end
end

```
```c# []
using System;
using System.Collections.Generic;

public class Solution {
    public int OrangesRotting(int[][] grid) {
        int n = grid.Length, m = grid[0].Length;
        var queue = new Queue<(int, int)>();
        bool[,] visited = new bool[n, m];

        // Step 1: Enqueue all rotten oranges
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 2) {
                    queue.Enqueue((i, j));
                    visited[i, j] = true;
                }
            }
        }

        int count = -1;
        int[][] directions = new int[][] {
            new int[] { -1, 0 },
            new int[] { 1, 0 },
            new int[] { 0, -1 },
            new int[] { 0, 1 }
        };

        // Step 2: BFS to rot fresh oranges
        while (queue.Count > 0) {
            int size = queue.Count;
            count++;
            for (int i = 0; i < size; i++) {
                var (row, col) = queue.Dequeue();

                foreach (var dir in directions) {
                    int nx = row + dir[0];
                    int ny = col + dir[1];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m 
                        && !visited[nx, ny] && grid[nx][ny] == 1) {
                        visited[nx, ny] = true;
                        grid[nx][ny] = 2; // Rot the fresh orange
                        queue.Enqueue((nx, ny));
                    }
                }
            }
        }

        // Step 3: Check for remaining fresh oranges
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    return -1; // Fresh orange remains
                }
            }
        }

        return count == -1 ? 0 : count; // Return time or 0 if no fresh oranges
    }
}

```
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn oranges_rotting(grid: Vec<Vec<i32>>) -> i32 {
        let mut grid = grid;
        let n = grid.len();
        let m = grid[0].len();
        let mut queue = VecDeque::new();
        let mut visited = vec![vec![false; m]; n];

        // Step 1: Enqueue all rotten oranges
        for i in 0..n {
            for j in 0..m {
                if grid[i][j] == 2 {
                    queue.push_back((i, j));
                    visited[i][j] = true;
                }
            }
        }

        let mut count = -1;
        let directions = [(-1, 0), (1, 0), (0, -1), (0, 1)];

        // Step 2: BFS to rot fresh oranges
        while !queue.is_empty() {
            let size = queue.len();
            count += 1;
            for _ in 0..size {
                let (row, col) = queue.pop_front().unwrap();

                for &(dx, dy) in &directions {
                    let nx = row as isize + dx;
                    let ny = col as isize + dy;

                    if nx >= 0 && nx < n as isize && ny >= 0 && ny < m as isize {
                        let nx = nx as usize;
                        let ny = ny as usize;
                        if !visited[nx][ny] && grid[nx][ny] == 1 {
                            visited[nx][ny] = true;
                            grid[nx][ny] = 2; // Rot the fresh orange
                            queue.push_back((nx, ny));
                        }
                    }
                }
            }
        }

        // Step 3: Check for remaining fresh oranges
        for row in &grid {
            if row.contains(&1) {
                return -1; // Fresh orange remains
            }
        }

        if count == -1 {
            0
        } else {
            count
        }
    }
}

```
```typescript []
class Solution {
    orangesRotting(grid: number[][]): number {
        const n = grid.length;
        const m = grid[0].length;
        const queue: [number, number][] = [];
        const visited: boolean[][] = Array.from({ length: n }, () => Array(m).fill(false));

        // Step 1: Enqueue all rotten oranges
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }

        let count = -1;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        // Step 2: BFS to rot fresh oranges
        while (queue.length > 0) {
            const size = queue.length;
            count++;
            for (let i = 0; i < size; i++) {
                const [row, col] = queue.shift()!;

                for (const [dx, dy] of directions) {
                    const nx = row + dx;
                    const ny = col + dy;
                    if (
                        nx >= 0 &&
                        nx < n &&
                        ny >= 0 &&
                        ny < m &&
                        !visited[nx][ny] &&
                        grid[nx][ny] === 1
                    ) {
                        visited[nx][ny] = true;
                        grid[nx][ny] = 2; // Rot the fresh orange
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        // Step 3: Check for remaining fresh oranges
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    return -1; // Fresh orange remains
                }
            }
        }

        return count === -1 ? 0 : count; // Return time or 0 if no fresh oranges
    }
}

```
