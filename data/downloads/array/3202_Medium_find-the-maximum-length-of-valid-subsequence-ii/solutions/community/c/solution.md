# [Java/C++/Python] 1d DP

**Author:** lee215
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389350/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389350/)

---

# Solution 0: 2d DP
Step 0: Read my solution in [3201. Find the Maximum Length of Valid Subsequence I](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/discuss/5389361/JavaC%2B%2BPython-DP).
Step 1: Copy and paste.

Time `O(nk)`
Space `O(kk)`

**Java**
```java
    public int maximumLength(int[] A) {
        int res = 0, k = 2, dp[][] = new int[k][k];
        for (int a : A) {
            for (int b = 0; b < k; b++) {
                dp[b][a % k] = dp[a % k][b] + 1;
                res = Math.max(res, dp[b][a % k]);
            }
        }
        return res;
    }
```

**C++**
```cpp
    int maximumLength(vector<int>& A, int k) {
        vector<vector<int>> dp(k, vector<int>(k, 0));
        int res = 0;
        for (int a : A)
            for (int b = 0; b < k; b++)
                res = max(res, dp[b][a % k] = dp[a % k][b] + 1);
        return res;
    }
```

**Python**
```py
    def maximumLength(self, A: List[int], k) -> int:
        dp = defaultdict(Counter)
        for a in A:
            for b in range(k):
                dp[b][a % k] = dp[a % k][b] + 1
        return max(max(dp[a].values()) for a in range(k))
```
<br>

# **Explanation**
Just reverse two for loops:

Enumearet the sub sum `v = (sub[0] + sub[1]) % k`.
`dp[a % k]` means the longest of subarray ending with `a % k`.

For each `a` in `A`,
`a` can be the next element after `(v - a) % k`,
So we can have the eqaution `dp[a % k] = max(dp[a % k], dp[(v - a) % k] + 1)`.

Finally return the maximum of `max(dp)`
<br>

# **Complexity**
Time `O(nk)`
Space `O(k)`
<br>

**Java**
```java
    public int maximumLength(int[] A, int k) {
        int res = 0;
        for (int v = 0; v < k; v++) {
            int[] dp = new int[k];
            for (int a : A) {
                dp[a % k] = dp[(v + k - a % k) % k] + 1;
                res = Math.max(res, dp[a % k]);
            }
        }
        return res;
    }
```

**C++**
```cpp
    int maximumLength(vector<int>& A, int k) {
        int res = 0;
        for (int v = 0; v < k; v++) {
            vector<int> dp(k);
            for (int a : A) {
                dp[a % k] = dp[(v + k - a % k) % k] + 1;
                res = max(res, dp[a % k]);
            }
        }
        return res;
    }
```

**Python**
```py
    def maximumLength(self, A: List[int], k: int) -> int:
        res = 0
        for v in range(k):
            dp = [0] * k
            for a in A:
                dp[a % k] = dp[(v - a) % k] + 1
            res = max(res, max(dp))
        return res
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
