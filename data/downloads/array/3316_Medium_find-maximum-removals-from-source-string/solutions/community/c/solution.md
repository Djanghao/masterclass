# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5904277/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5904277/)

---

# **Explanation**
`dp[i][j]` means the result from `A[i]` and `B[j]`.
(result for A[i:] and B[j:])

We can remove/skip `A[i]`,
`dp[i][j] = dp[i + 1][j] + (i in target)`,
If `A[i] == B[j]`
`dp[i][j] = max(dp[i][j], dp[i + 1][j + 1])`

return `dp[0][0]` for result.
<br>

# **Complexity**
Time `O(nm)`
Space `O(n)`
<br>

**Java**
```java
    public int maxRemovals(String A, String B, int[] targetIndices) {
        int n = A.length(), m = B.length();
        int[] target = new int[n], dp = new int[m + 1];
        for (int i : targetIndices)
            target[i] += 1;
        Arrays.fill(dp, Integer.MIN_VALUE);
        dp[m] = 0;
        for (int i = n - 1; i >= 0; --i) {
            for (int j = 0; j <= m; ++j) {
                dp[j] += target[i];
                if (j < m && A.charAt(i) == B.charAt(j)) {
                    dp[j] = Math.max(dp[j], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
```

**C++**
```cpp
    int maxRemovals(string A, string B, vector<int>& targetIndices) {
        int n = A.size(), m = B.size();
        unordered_set<int> target(targetIndices.begin(), targetIndices.end());

        vector<int> dp(m + 1, INT_MIN);
        dp[m] = 0;
        for (int i = n - 1; i >= 0; --i) {
            for (int j = 0; j <= m; ++j) {
                dp[j] += target.count(i);
                if (j < m && A[i] == B[j]) {
                    dp[j] = max(dp[j], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
```

**Python**
```py
    def maxRemovals(self, A: str, B: str, targetIndices: List[int]) -> int:
        n, m = len(A), len(B)
        target = set(targetIndices)

        dp = [-inf] * m + [0]
        for i in range(n - 1, -1, -1):
            for j in range(m + 1):
                dp[j] += i in target
                if j < m and A[i] == B[j]:
                    dp[j] = max(dp[j], dp[j + 1])
        return dp[0]
```
<br>

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3202. [Find the Maximum Length of Valid Subsequence II](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/discuss/5389350/JavaC%2B%2BPython-1d-DP)
- 3193. [Count the Number of Inversions](https://leetcode.com/problems/count-the-number-of-inversions/discuss/5353127/Python-DP)
- 3177. [Find the Maximum Length of a Good Subsequence II](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/discuss/5280172/JavaC%2B%2BPython-DP-Solution)
- 3148. [Maximum Difference Score in a Grid](https://leetcode.com/problems/maximum-difference-score-in-a-grid/discuss/5145704/JavaC%2B%2BPython-Minimum-on-Top-Left)
- 3147. [Taking Maximum Energy From the Mystic Dungeon](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/discuss/5145723/JavaC%2B%2BPython-DP)
- 2920. [Maximum Points After Collecting Coins From All Nodes](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/discuss/4220643/JavaC%2B%2BPython-DP)
- 2919. [Minimum Increment Operations to Make Array Beautiful](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/discuss/4220717/JavaC%2B%2BPython-Easy-and-Concise-DP-O(1)-Space)
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
<br>
