# Day 41 || C++ || BFS || Easiest Beginner Friendly Approach || O(n^2) time and O(n^2) approach

**Author:** singhabhinash
**Votes:** 226
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166138/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166138/)

---

# Intuition of this Problem:
Below Diagram will help to understand how bfs work to solve this problem.
![image.png](./images/0.png)

<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize a queue and add all the land cells to the queue.
2. If the queue is empty or contains all the cells in the grid, return -1. This means there are no water cells or all cells are land cells.
3. Perform a BFS from the land cells and update the distance of each water cell to the nearest land cell.
4. The final answer is the maximum distance among all the water cells, which is the number of iterations in the BFS.
<!-- Describe your approach to solving the problem. -->


# Code:
```C++ []
class Solution {
public:
    int maxDistance(vector<vector<int>>& grid) {
        int n = grid.size();
        queue<pair<int, int>> q;
        //Note: The copy matrix visited can be avoided by updating the original matrix grid but changing the input parameter is not considered under good practices. That's why we are taking extra 2d matrix visited
        vector<vector<int>> visited = grid;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (visited[i][j] == 1) 
                    q.push({i, j});
            }
        }
        if (q.empty() || q.size() == n * n) 
            return -1;
        int distance = -1;
        // visit all four direction i.e. right, left, up, down
        vector<pair<int, int>> dirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        while (!q.empty()) {
            int size = q.size();
            while (size--) {
                auto [x, y] = q.front();
                q.pop();
                for (auto [dx, dy] : dirs) {
                    int i = x + dx, j = y + dy;
                    if (i >= 0 && i < n && j >= 0 && j < n && visited[i][j] == 0) {
                        visited[i][j] = 1;
                        q.push({i, j});
                    }
                }
            }
            distance++;
        }
        return distance;
    }
};
```
```Java []
class Solution {
    public int maxDistance(int[][] grid) {
        int n = grid.length;
        Queue<int[]> q = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) q.offer(new int[]{i, j});
            }
        }
        if (q.isEmpty() || q.size() == n * n) return -1;
        int res = -1;
        int[][] dirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        while (!q.isEmpty()) {
            int size = q.size();
            res++;
            while (size-- > 0) {
                int[] cell = q.poll();
                int x = cell[0], y = cell[1];
                for (int[] dir : dirs) {
                    int i = x + dir[0], j = y + dir[1];
                    if (i >= 0 && i < n && j >= 0 && j < n && grid[i][j] == 0) {
                        grid[i][j] = 1;
                        q.offer(new int[]{i, j});
                    }
                }
            }
        }
        return res;
    }
}

```
```Python []
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        n = len(grid)
        q = collections.deque()
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1: q.append((i, j))
        if not q or len(q) == n * n: return -1
        res = -1
        dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        while q:
            size = len(q)
            res += 1
            while size:
                size -= 1
                x, y = q.popleft()
                for dx, dy in dirs:
                    i, j = x + dx, y + dy
                    if 0 <= i < n and 0 <= j < n and grid[i][j] == 0:
                        grid[i][j] = 1
                        q.append((i, j))
        return res

```

# Time Complexity and Space Complexity:
- Time complexity: **O(n^2)**, where n is the size of the grid. In the worst case, we need to visit all the cells in the grid.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n^2)**, as we need to store all the cells in the queue.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->