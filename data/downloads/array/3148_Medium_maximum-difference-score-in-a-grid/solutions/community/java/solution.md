# [Java/C++/Python] DP, Minimum on Top-Left

**Author:** lee215
**Votes:** 98
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145704/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5145704/)

---

# **Intuition**
Move from `c1` to `ck` with path `c1,c2,..,ck`,
`res = (c2 - c1) + (c3 - c2) + .... = ck - c1`
<br>

# **Explanation**
To calculate the best score ending at a cell `ck`,
just need to find out the minimum `c1` on its top left area.

To do this, we can define `dp[i][j]` as the minimum in `A[i][j]` and its top-left.
`dp[i][j] = min(A[i][j], dp[i-1][j], dp[i][j-1]))`

Instead of create an array for DP,
we can also do it in-palce of `A`,
to same some codes and spaces.
<br>

# **Complexity**
Time `O(mn)`
Space `O(1)`
<br>

**Java**
```java
    public int maxScore(List<List<Integer>> A) {
        int res = -1000_000, m = A.size(), n = A.get(0).size();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int pre = Math.min(
                    i > 0 ? A.get(i - 1).get(j) : 1000_000,
                    j > 0 ? A.get(i).get(j - 1) : 1000_000
                );
                res = Math.max(res, A.get(i).get(j) - pre);
                if (pre < A.get(i).get(j)) {
                    A.get(i).set(j, pre);
                }
            }
        }
        return res;
    }
```
**C++**
```cpp
    int maxScore(vector<vector<int>>& A) {
        int res = -1e6, m = A.size(), n = A[0].size();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int pre = min(i > 0 ? A[i - 1][j] : 1e6, j > 0 ? A[i][j - 1] : 1e6);
                res = max(res, A[i][j] - pre);
                A[i][j] = min(A[i][j], pre);
            }
        }
        return res;
    }
```

**Python**
```py
    def maxScore(self, A: List[List[int]]) -> int:
        res, m, n = -inf, len(A), len(A[0])
        for i in range(m):
            for j in range(n):
                pre = min(A[i-1][j] if i else inf, A[i][j-1] if j else inf)
                res = max(res, A[i][j] - pre)
                A[i][j] = min(A[i][j], pre)
        return res
```

<br>

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3148. [Maximum Difference Score in a Grid](https://leetcode.com/problems/maximum-difference-score-in-a-grid/discuss/5145704/JavaC%2B%2BPython-Minimum-on-Top-Left)
- 3147. [Taking Maximum Energy From the Mystic Dungeon](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/discuss/5145723/JavaC%2B%2BPython-DP)
- 2920. [Maximum Points After Collecting Coins From All Nodes](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/discuss/4220643/JavaC%2B%2BPython-DP)
- 2919. [Minimum Increment Operations to Make Array Beautiful](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/discuss/4220717/JavaC%2B%2BPython-Easy-and-Concise-DP-O(1)-Space)
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
