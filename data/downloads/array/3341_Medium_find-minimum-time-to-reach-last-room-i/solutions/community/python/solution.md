# [Java/C++/Python] Priority Queue

**Author:** lee215
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6000267/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6000267/)

---

# **Intuition**
Use priority queue.
<br>

# **Explanation**
The key is `[t, i, j]`,
where it takes `t` seconds to arrive `(i, j)`,
<br>

# **Complexity**
Time `O(mnlogmn)`
Space `O(mn)`
<br>

```Java [Java]
    public int minTimeToReach(int[][] A) {
        int n = A.length, m = A[0].length, inf = Integer.MAX_VALUE;
        int[][] dp = new int[n][m];
        for (int i = 0; i < n; i++) {
            Arrays.fill(dp[i], inf);
        }
        PriorityQueue<int[]> h = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        h.offer(new int[]{0, 0, 0}); // arrive time, i, j
        A[0][0] = -1;

        while (!h.isEmpty()) {
            int[] cur = h.poll();
            int t = cur[0], i = cur[1], j = cur[2];
            if (t >= dp[i][j]) continue;
            if (i == n - 1 && j == m - 1) return t;
            dp[i][j] = t;

            int[][] dirs = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
            for (int[] dir : dirs) {
                int x = i + dir[0], y = j + dir[1];
                if (0 <= x && x < n && 0 <= y && y < m && dp[x][y] == inf) {
                    h.offer(new int[]{Math.max(A[x][y], t) + 1, x, y});
                }
            }
        }
        return -1;
    }
```

```C++ [C++]
    int minTimeToReach(vector<vector<int>>& A) {
        int n = A.size(), m = A[0].size(), inf = INT_MAX;
        vector<vector<int>> dp(n, vector<int>(m, inf));
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> h;
        h.push({0, 0, 0}); // arrive time, i, j
        A[0][0] = -1;

        vector<vector<int>> dirs = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
        while (!h.empty()) {
            vector<int> cur = h.top();
            h.pop();
            int t = cur[0], i = cur[1], j = cur[2];
            if (t >= dp[i][j]) continue;
            if (i == n - 1 && j == m - 1) return t;
            dp[i][j] = t;

            for (auto& dir : dirs) {
                int x = i + dir[0], y = j + dir[1];
                if (0 <= x && x < n && 0 <= y && y < m && dp[x][y] == inf) {
                    h.push({max(A[x][y], t) + 1, x, y});
                }
            }
        }
        return -1;
    }
```

```py [Python3]
    def minTimeToReach(self, A: List[List[int]]) -> int:
        n, m = len(A), len(A[0])
        dp = [[inf] * m for i in range(n)]
        h = [[0, 1, 0, 0]] # arrive time, next cost, i, j
        A[0][0] = -1
        while h:
            t, c, i, j = heappop(h)
            if t >= dp[i][j]: continue
            if i == n - 1 and j == m - 1: return t
            dp[i][j] = t
            for di, dj in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                x, y = i + di, j + dj
                if 0 <= x < n and 0 <= y < m and dp[x][y] == inf:
                    heappush(h, [max(A[x][y] + c, t + c), 2 - c, x, y])
```
