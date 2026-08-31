# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 145
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570296/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570296/)

---

# **Intuition**
Apply `dp` solution,
`dp[i][j]` means the maximum steps can go from the first cell.
Initial all `dp[i][j] = 0` at first,
and the smallest cell `A[i][j]` will start with `dp[i][j] = 1`.
<br>

# **Explanation**
Sort pairs `[i, j]` by value of `M[i][j]`,
and then iterate cells in increasing order.

For each `M[i][j]`,
find out the current maximum steps in the same row and col,
`dp[i][j] = max(max steps in row, max steps in col) + 1`.

To make this process efficient,
we use `res[i]` to record the maximum step for row `i`,
we use `res[m + j]` to record the maximum step for col `j`.

Repeat this process until we find the steps for all cells,
return the maximum one.
<br>

# **Complexity**
Time `O(mnlogmn)`
Space `O(mn)`
<br>

**Java**
```java
    public int maxIncreasingCells(int[][] M) {
        int m = M.length, n = M[0].length;
        Map<Integer, List<int[]>> A = new TreeMap<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int val = M[i][j];
                if (!A.containsKey(val)) {
                    A.put(val, new ArrayList<int[]>());
                }
                A.get(val).add(new int[] {i, j});
            }
        }
        int[][] dp = new int[m][n];
        int[] res = new int[n + m];
        for (int a : A.keySet()) {
            for (int[] pos : A.get(a)) {
                int i = pos[0], j = pos[1];
                dp[i][j] = Math.max(res[i], res[m + j]) + 1;
            }
            for (int[] pos : A.get(a)) {
                int i = pos[0], j = pos[1];
                res[m + j] = Math.max(res[m + j], dp[i][j]);
                res[i] = Math.max(res[i], dp[i][j]);
            }
        }
        int ans = 0;
        for (int a : res)
            ans = Math.max(ans, a);
        return ans;
    }
```

**C++**
```cpp
    int maxIncreasingCells(vector<vector<int>>& M) {
        int m = M.size(), n = M[0].size();
        map<int, vector<int>> A;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                A[M[i][j]].push_back(i * n + j);
        vector<vector<int>> dp(m, vector<int>(n, 0));
        vector<int> res(n + m, 0);
        for (auto& [a, pos] : A) {
            for (int p : pos) {
                int i = p / n, j = p % n;
                dp[i][j] = max(res[i], res[m + j]) + 1;
            }
            for (int p : pos) {
                int i = p / n, j = p % n;
                res[m + j] = max(res[m + j], dp[i][j]);
                res[i] = max(res[i], dp[i][j]);
            }
        }
        return *max_element(res.begin(), res.end());
    }
```

**Python**
```py
    def maxIncreasingCells(self, M: List[List[int]]) -> int:
        m, n = len(M), len(M[0])
        A = defaultdict(list)
        for i in range(m):
            for j in range(n):
                A[M[i][j]].append([i, j])
        dp = [[0] * n for i in range(m)]
        res = [0] * (n + m)
        for a in sorted(A):
            for i, j in A[a]:
                dp[i][j] = max(res[i], res[~j]) + 1
            for i, j in A[a]:
                res[~j] = max(res[~j], dp[i][j])
                res[i] = max(res[i], dp[i][j])
        return max(res)
```
