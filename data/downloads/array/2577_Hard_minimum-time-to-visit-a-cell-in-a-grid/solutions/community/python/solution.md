# Dijkstra’s Magic | Find the Fastest Path | C++ | Java | Python | JavaScript 🚀

**Author:** BijoySingh7
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093663/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093663/)

---


# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F  

---

## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).

---


###### *Solution in C++, Python, Java, and JavaScript*

```cpp []
class Solution {
public:
    int minimumTime(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();

        // Check if it's impossible to reach the destination from the start
        if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

        vector<vector<int>> time(m + 1, vector<int>(n + 1, INT_MAX));
        vector<vector<int>> vis(m + 1, vector<int>(n + 1, 0));

        priority_queue<pair<int, pair<int, int>>, 
                        vector<pair<int, pair<int, int>>>, 
                        greater<pair<int, pair<int, int>>>> pq;
        pq.push({0, {0, 0}});  // Start from the top-left corner

        int x[] = {0, 0, 1, -1};
        int y[] = {1, -1, 0, 0};

        while (!pq.empty()) {
            auto p = pq.top();
            pq.pop();

            int t = p.first;
            int curx = p.second.first;
            int cury = p.second.second;

            // Return time if we reach the bottom-right corner
            if (curx == m - 1 && cury == n - 1) {
                return t;
            }

            if (vis[curx][cury]) continue;
            vis[curx][cury] = 1;

            for (int i = 0; i < 4; i++) {
                int newx = curx + x[i];
                int newy = cury + y[i];

                if (newx >= 0 && newx < m && newy >= 0 && newy < n) {
                    int needtime = t + 1;

                    // Adjust time based on grid values
                    if (grid[newx][newy] > t + 1) {
                        int diff = grid[newx][newy] - t;
                        needtime = (diff % 2) ? grid[newx][newy] : grid[newx][newy] + 1;
                    }

                    if (needtime < time[newx][newy]) {
                        time[newx][newy] = needtime;
                        pq.push({needtime, {newx, newy}});
                    }
                }
            }
        }

        return -1;
    }
};
```

```python []
class Solution:
    def minimumTime(self, grid):
        m = len(grid)
        n = len(grid[0])

        # Check if it's impossible to reach the destination from the start
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1

        time = [[float('inf')] * (n + 1) for _ in range(m + 1)]
        vis = [[0] * (n + 1) for _ in range(m + 1)]

        pq = []
        heapq.heappush(pq, (0, (0, 0)))  # Start from the top-left corner

        x = [0, 0, 1, -1]
        y = [1, -1, 0, 0]

        while pq:
            t, (curx, cury) = heapq.heappop(pq)

            # Return time if we reach the bottom-right corner
            if curx == m - 1 and cury == n - 1:
                return t

            if vis[curx][cury]:
                continue
            vis[curx][cury] = 1

            for i in range(4):
                newx = curx + x[i]
                newy = cury + y[i]

                if 0 <= newx < m and 0 <= newy < n:
                    needtime = t + 1

                    # Adjust time based on grid values
                    if grid[newx][newy] > t + 1:
                        diff = grid[newx][newy] - t
                        needtime = grid[newx][newy] if diff % 2 else grid[newx][newy] + 1

                    if needtime < time[newx][newy]:
                        time[newx][newy] = needtime
                        heapq.heappush(pq, (needtime, (newx, newy)))

        return -1
```

```java []
class Solution {
    public int minimumTime(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        // Check if it's impossible to reach the destination from the start
        if (grid[0][1] > 1 && grid[1][0] > 1)
            return -1;

        int[][] time = new int[m + 1][n + 1];
        int[][] vis = new int[m + 1][n + 1];

        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                vis[i][j] = 0;
                time[i][j] = Integer.MAX_VALUE;
            }
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.add(new int[]{0, 0, 0});  // Start from the top-left corner

        int[] x = {0, 0, 1, -1};
        int[] y = {1, -1, 0, 0};

        while (!pq.isEmpty()) {
            int[] p = pq.poll();
            int t = p[0];
            int curx = p[1];
            int cury = p[2];

            // Return time if we reach the bottom-right corner
            if (curx == m - 1 && cury == n - 1) {
                return t;
            }

            if (vis[curx][cury] == 1) continue;
            vis[curx][cury] = 1;

            for (int i = 0; i < 4; i++) {
                int newx = curx + x[i];
                int newy = cury + y[i];

                if (newx >= 0 && newx < m && newy >= 0 && newy < n) {
                    int needtime = t + 1;

                    // Adjust time based on grid values
                    if (grid[newx][newy] > t + 1) {
                        int diff = grid[newx][newy] - t;
                        if (diff % 2 == 1)
                            needtime = grid[newx][newy];
                        else
                            needtime = grid[newx][newy] + 1;
                    }

                    if (needtime < time[newx][newy]) {
                        time[newx][newy] = needtime;
                        pq.add(new int[]{needtime, newx, newy});
                    }
                }
            }
        }

        return -1;
    }
}
```

```javascript []
class Solution {
    minimumTime(grid) {
        const m = grid.length;
        const n = grid[0].length;

        // Check if it's impossible to reach the destination from the start
        if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

        const time = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));
        const vis = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        const pq = [];
        pq.push([0, 0, 0]);  // Start from the top-left corner

        const x = [0, 0, 1, -1];
        const y = [1, -1, 0, 0];

        while (pq.length) {
            pq.sort((a, b) => a[0] - b[0]);
            const [t, curx, cury] = pq.shift();

            // Return time if we reach the bottom-right corner
            if (curx === m - 1 && cury === n - 1) {
                return t;
            }

            if (vis[curx][cury]) continue;
            vis[curx][cury] = 1;

            for (let i = 0; i < 4; i++) {
                const newx = curx + x[i];
                const newy = cury + y[i];

                if (newx >= 0 && newx < m && newy >= 0 && newy < n) {
                    let needtime = t + 1;

                    // Adjust time based on grid values
                    if (grid[newx][newy] > t + 1) {
                        const diff = grid[newx][newy] - t;
                        needtime = diff % 2 ? grid[newx][newy] : grid[newx][newy] + 1;
                    }

                    if (needtime < time[newx][newy]) {
                        time[newx][newy] = needtime;
                        pq.push([

needtime, newx, newy]);
                    }
                }
            }
        }

        return -1;
    }
}
```


---

# Intuition
The problem is about finding the minimum time required to travel from the top-left corner to the bottom-right corner of a grid, where each cell has a time delay that varies based on the previous time spent. The goal is to determine the shortest time by navigating through the grid while respecting these delays.

We can treat this problem as a shortest path problem on a weighted graph. Each grid cell is a node, and the edges between nodes are the possible movements between adjacent cells, with edge weights determined by the time constraints of the grid.

# Approach
We will use **Dijkstra's algorithm**, a well-known algorithm for finding the shortest path in a graph with non-negative edge weights. The key idea is:
1. Initialize a priority queue to store the current minimum time to reach each cell.
2. Start from the top-left corner (0,0) and initialize the time taken to reach it as 0.
3. For each cell, explore its neighboring cells (up, down, left, right) and update their minimum travel time.
4. If a cell's new computed time is less than its previously computed time, update it and push the new time into the priority queue.
5. Stop when we reach the bottom-right corner, at which point the accumulated time will be the minimum time.

# Complexity
- **Time complexity**: $$O(E \\log V)$$  
  Where \\(E\\) is the number of edges (which is approximately \\(4 \	imes m \	imes n\\)) and \\(V\\) is the number of vertices (which is \\(m \	imes n\\)). The log factor arises from the priority queue operations.

- **Space complexity**: $$O(m \	imes n)$$  
  We use two \\(m \	imes n\\) matrices: one for the `time` array (storing the shortest times to reach each cell) and one for the `visited` array.

---
# Feel free to comment! \uD83D\uDE0A
### *If you have any questions or need further clarification, feel free to drop a comment below! I'm happy to help!*