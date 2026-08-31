# ✅👇Clean & Concise✅||Dijikstra, Binary search✅👇Beginner Friendly👇||Easy to understand Code✅👇

**Author:** singhhh_sidhantttt
**Votes:** 31
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/4049787/](https://leetcode.com/problems/path-with-minimum-effort/solutions/4049787/)

---

# We will use 2 Approach Please see the code->\uD83D\uDC47
<!-- Describe your first thoughts on how to solve this problem. -->
# **\u2714\uFE0F Solution 1: Dijikstra**

- **If we observe, this problem is to find the shortest path from a source cell (0, 0) to a destination cell (m-1, n-1)**. Here, total path cost is defined as **maximum absolute difference in heights between two consecutive cells of the path.**
- **Thus, we could use Dijikstra's algorithm** which is used to find the shortest path in a weighted graph with a slight modification of **criteria for the shortest path,** which costs **O(E log V)**, where E is number of edges **E = 4*M*N,** V is number of veritices **V = M*N**

```C++ []
#include <vector>
#include <queue>
#include <climits>

class Solution {
public:
    std::vector<int> DIR = {0, 1, 0, -1, 0};
    
    int minimumEffortPath(std::vector<std::vector<int>>& heights) {
        int m = heights.size();
        int n = heights[0].size();
        
        // Initialize a 2D array to store distances with max values.
        std::vector<std::vector<int>> dist(m, std::vector<int>(n, INT_MAX));
        
        // Create a min-heap to store distance, row, and column values.
        std::priority_queue<std::vector<int>, std::vector<std::vector<int>>, std::greater<std::vector<int>>> minHeap;
        
        // Initialize the min heap with starting point (distance, row, col).
        minHeap.push({0, 0, 0});
        
        // Set the distance to the starting point as 0.
        dist[0][0] = 0;
        
        while (!minHeap.empty()) {
            std::vector<int> top = minHeap.top();
            minHeap.pop();
            
            int d = top[0];
            int r = top[1];
            int c = top[2];
            
            // If this is an outdated version, skip it.
            if (d > dist[r][c]) continue;
            
            // If we reach the bottom right, return the distance.
            if (r == m - 1 && c == n - 1) return d;
            
            // Explore neighboring cells.
            for (int i = 0; i < 4; i++) {
                int nr = r + DIR[i];
                int nc = c + DIR[i + 1];
                
                // Check if the neighbor is within bounds.
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                    // Calculate the new distance.
                    int newDist = std::max(d, std::abs(heights[nr][nc] - heights[r][c]));
                    
                    // If the new distance is smaller, update the distance and add to the heap.
                    if (dist[nr][nc] > newDist) {
                        dist[nr][nc] = newDist;
                        minHeap.push({dist[nr][nc], nr, nc});
                    }
                }
            }
        }
        
        return 0;
    }
};

```
```Java []
class Solution {
    int[] DIR = new int[]{0, 1, 0, -1, 0};
    public int minimumEffortPath(int[][] heights) {
        int m = heights.length, n = heights[0].length;
        int[][] dist = new int[m][n];
        for (int i = 0; i < m; i++) Arrays.fill(dist[i], Integer.MAX_VALUE);
        
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        minHeap.offer(new int[]{0, 0, 0}); // distance, row, col
        dist[0][0] = 0;
        
        while (!minHeap.isEmpty()) {
            int[] top = minHeap.poll();
            int d = top[0], r = top[1], c = top[2];
            if (d > dist[r][c]) continue; // this is an outdated version -> skip it
            if (r == m - 1 && c == n - 1) return d; // Reach to bottom right
            for (int i = 0; i < 4; i++) {
                int nr = r + DIR[i], nc = c + DIR[i + 1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                    int newDist = Math.max(d, Math.abs(heights[nr][nc] - heights[r][c]));
                    if (dist[nr][nc] > newDist) {
                        dist[nr][nc] = newDist;
                        minHeap.offer(new int[]{dist[nr][nc], nr, nc});
                    }
                }
            }
        }
        return 0; // Unreachable code, Java require to return interger value.
    }
}
```
```Python []
class Solution(object):
    def minimumEffortPath(self, heights):
        m, n = len(heights), len(heights[0])
        dist = [[math.inf] * n for _ in range(m)]
        dist[0][0] = 0
        minHeap = [(0, 0, 0)] # distance, row, col
        DIR = [0, 1, 0, -1, 0]

        while minHeap:
            d, r, c = heappop(minHeap)
            if d > dist[r][c]: continue  # this is an outdated version -> skip it
            if r == m - 1 and c == n - 1:
                return d  # Reach to bottom right
            
            for i in range(4):
                nr, nc = r + DIR[i], c + DIR[i+1]
                if 0 <= nr < m and 0 <= nc < n:
                    newDist = max(d, abs(heights[nr][nc] - heights[r][c]))
                    if dist[nr][nc] > newDist:
                        dist[nr][nc] = newDist
                        heappush(minHeap, (dist[nr][nc], nr, nc))
```

---


# Complexity

- **Time: O(ElogV)** = O(M*N log M*N), where M <= 100 is the number of rows and N <= 100 is the number of columns in the matrix.
- **Space: O(M*N)**

---





# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---


# **\u2714\uFE0F Solution 2: Binary Search + DFS**

- **Using binary search to choose a minimum threadshold so that we can found a route which absolute difference in heights between two consecutive cells of the route always less or equal to threadshold.**
```C++ []
#include <vector>

class Solution {
public:
    std::vector<int> DIR = {0, 1, 0, -1, 0};
    
    bool dfs(int r, int c, std::vector<std::vector<bool>>& visited, int threshold, const std::vector<std::vector<int>>& heights) {
        int m = heights.size();
        int n = heights[0].size();
        
        if (r == m - 1 && c == n - 1) return true; // Reach destination
        visited[r][c] = true;
        
        for (int i = 0; i < 4; i++) {
            int nr = r + DIR[i];
            int nc = c + DIR[i + 1];
            
            if (nr < 0 || nr == m || nc < 0 || nc == n || visited[nr][nc]) continue;
            
            if (std::abs(heights[nr][nc] - heights[r][c]) <= threshold && dfs(nr, nc, visited, threshold, heights)) {
                return true;
            }
        }
        return false;
    }
    
    int minimumEffortPath(std::vector<std::vector<int>>& heights) {
        int m = heights.size();
        int n = heights[0].size();
        
        int left = 0;
        int ans = 0;
        int right = 1e6;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            std::vector<std::vector<bool>> visited(m, std::vector<bool>(n, false));
            
            if (dfs(0, 0, visited, mid, heights)) {
                right = mid - 1; // Try to find a better result on the left side
                ans = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return ans;
    }
};

```
```Java []
class Solution {
    private final int[] DIR = {0, 1, 0, -1, 0};
    
    private boolean dfs(int r, int c, boolean[][] visited, int threshold, int[][] heights) {
        int m = heights.length;
        int n = heights[0].length;
        
        if (r == m - 1 && c == n - 1) return true; // Reach destination
        visited[r][c] = true;
        
        for (int i = 0; i < 4; i++) {
            int nr = r + DIR[i];
            int nc = c + DIR[i + 1];
            
            if (nr < 0 || nr == m || nc < 0 || nc == n || visited[nr][nc]) continue;
            
            if (Math.abs(heights[nr][nc] - heights[r][c]) <= threshold && dfs(nr, nc, visited, threshold, heights)) {
                return true;
            }
        }
        return false;
    }
    
    public int minimumEffortPath(int[][] heights) {
        int m = heights.length;
        int n = heights[0].length;
        
        int left = 0;
        int ans = 0;
        int right = 1_000_000;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            boolean[][] visited = new boolean[m][n];
            
            if (dfs(0, 0, visited, mid, heights)) {
                right = mid - 1; // Try to find a better result on the left side
                ans = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return ans;
    }
}

```
```Python []
class Solution(object):
    def minimumEffortPath(self, heights):
        m, n = len(heights), len(heights[0])
        DIR = [0, 1, 0, -1, 0]
        
        def dfs(r, c, visited, threadshold):
            if r == m-1 and c == n-1: return True # Reach destination
            visited[r][c] = True
            for i in range(4):
                nr, nc = r+DIR[i], c+DIR[i+1]
                if nr < 0 or nr == m or nc < 0 or nc == n or visited[nr][nc]: continue
                if abs(heights[nr][nc]-heights[r][c]) <= threadshold and dfs(nr, nc, visited, threadshold): 
                    return True
            return False
        
        def canReachDestination(threadshold):
            visited = [[False] * n for _ in range(m)]
            return dfs(0, 0, visited, threadshold)
        
        left = 0
        ans = right = 10**6
        while left <= right:
            mid = left + (right-left) // 2
            if canReachDestination(mid):
                right = mid - 1 # Try to find better result on the left side
                ans = mid
            else:
                left = mid + 1
        return ans
```

---
# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A
![upvotememe.png](./images/0.png)


