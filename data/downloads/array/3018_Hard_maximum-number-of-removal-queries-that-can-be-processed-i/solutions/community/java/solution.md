# DP in C++, java, and Python.

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4621532/](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4621532/)

---

# Intuition
Let dp[i][j] be the maximum number of queries we can proess when nums[i..(j - 1)] are NOT removed (remained) (note: it's a left-close, right-open range [i, j)).

Then we have
dp[x][y] = max(dp[x - 1][y], dp[x][y + 1]) (since we can just keep the original result without remove any more integers).
Importantly, we have 

dp[x][y] = max(dp[x][y], dp[x - 1][y] + 1) when x > 0 && dp[x][y] < queries.size() && nums[x - 1] >= queries[dp[x - 1][y]], this time we remove nums[x - 1].

dp[x][y] = max(dp[x][y], dp[x][y + 1] + 1) when y + 1 < n && dp[x][y + 1] < queries.size() && nums[y] >= queries[dp[x][y + 1]], this time we remove nums[y].

Finally the answer is max(dp[i][i]) for all i.


I think the difficult part is the prove.
If [x, y] is the remaining part, to have the maximum matched queries,
the number of queries it can match relies on the answer of [x, y + 1] or [x - 1, y]. Note though the query "offset"/"indices" may be changed, if we use sub-optimal result of [x, y + 1] or [x - 1, y], meaning it matches at least 1 less queries then the maximum value, using nums[x - 1] or nums[y + 1] (note matter which query it matches) can match at most 1 query, so the answer of [x, y] is at most the same as the optimal value of [x, y + 1] or [x - 1, y], which means we should just select the optimal value of the previous state without worrying aobut the query "offset". 

# Complexity
- Time complexity:
O(n ^ 2)

- Space complexity:
O(n ^ 2)

# Code

C++
```
class Solution {
    int dfs(const vector<int> &v, const vector<int> &q, int x, int y, vector<vector<int>> &dp) {
        if (dp[x][y] >= 0) return dp[x][y];
        const int t1 = x ? dfs(v, q, x - 1, y, dp) : -1;
        const int t2 = y < v.size() ? dfs(v, q, x, y + 1, dp) : -1;
        dp[x][y] = max(max(t1, t2), 0);
        if (t1 >= 0 && t1 < q.size() && v[x - 1] >= q[t1]) {
            dp[x][y] = max(dp[x][y], t1 + 1);
        }
        if (t2 >= 0 && t2 < q.size() && v[y] >= q[t2]) {
            dp[x][y] = max(dp[x][y], t2 + 1);
        }
        return dp[x][y];
    }
public:
    int maximumProcessableQueries(vector<int>& nums, vector<int>& queries) {
        const int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(n + 1, -1));
        dp[0][n] = 0;
        int r = 0;
        for (int i = 0; i < n; ++i) {
            r = max(r, dfs(nums, queries, i, i, dp));
        }
        return r;
    }
};
```


Java
```
public class Solution {
    private int dfs(int[] v, int[] q, int x, int y, int[][] dp) {
        if (dp[x][y] >= 0) return dp[x][y];
        
        int t1 = (x > 0) ? dfs(v, q, x - 1, y, dp) : -1;
        int t2 = (y < v.length) ? dfs(v, q, x, y + 1, dp) : -1;
        
        dp[x][y] = Math.max(Math.max(t1, t2), 0);
        
        if (t1 >= 0 && t1 < q.length && v[x - 1] >= q[t1]) {
            dp[x][y] = Math.max(dp[x][y], t1 + 1);
        }
        
        if (t2 >= 0 && t2 < q.length && v[y] >= q[t2]) {
            dp[x][y] = Math.max(dp[x][y], t2 + 1);
        }
        
        return dp[x][y];
    }

    public int maximumProcessableQueries(int[] nums, int[] queries) {
        int n = nums.length;
        int[][] dp = new int[n][n + 1];
        
        for (int i = 0; i < n; ++i) {
            Arrays.fill(dp[i], -1);
        }
        dp[0][n] = 0;
        
        int result = 0;
        
        for (int i = 0; i < n; ++i) {
            result = Math.max(result, dfs(nums, queries, i, i, dp));
        }
        
        return result;
    }
}
```

Python
```
class Solution:
    def dfs(self, v: List[int], q: List[int], x: int, y: int, dp: List[List[int]]):
        if dp[x][y] >= 0:
            return dp[x][y]

        t1 = self.dfs(v, q, x - 1, y, dp) if x > 0 else -1
        t2 = self.dfs(v, q, x, y + 1, dp) if y < len(v) else -1

        dp[x][y] = max(max(t1, t2), 0)

        if t1 >= 0 and t1 < len(q) and v[x - 1] >= q[t1]:
            dp[x][y] = max(dp[x][y], t1 + 1)

        if t2 >= 0 and t2 < len(q) and v[y] >= q[t2]:
            dp[x][y] = max(dp[x][y], t2 + 1)

        return dp[x][y]

    def maximumProcessableQueries(self, nums: List[int], queries: List[int]) -> int:
        n = len(nums)
        dp = [[-1] * (n + 1) for _ in range(n)]
        dp[0][n] = 0
        result = 0

        for i in range(n):
            result = max(result, self.dfs(nums, queries, i, i, dp))

        return result

```

