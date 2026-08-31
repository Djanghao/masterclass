# [Java/C++/Python] 2D - DP

**Author:** lee215
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5973616/](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5973616/)

---

# **Explanation**
`dp[i][j]` means the total number of pairs.,
thet `seq1` gcd is `i` and `seq2` gcd is `j`.
Initially `dp[i][j] = 0` and `dp[0][0] = 1`

For an element `a` in `A`,
append to `seq1`: `dp2[gcd(i, a)][j] += dp[i][j]`
append to `seq2`: dp2[i][gcd(j, a)] += dp[i][j]
append to no seq: `dp2[i][j] += dp[i][j]`

Finally return `sum(dp[i][i])`
<br>

# **Complexity**
Time `O(nmmlogm)`, where `m = max(A)`
Space `O(mm)`
<br>

```Java [Java]
    public int subsequencePairCount(int[] A) {
        int mod = 1000000007, M = 0;
        for (int a: A)
            if (a > M)
                M = a;
        int[][] dp = new int[M + 1][M + 1];
        dp[0][0] = 1;

        for (int a : A) {
            int[][] dp2 = new int[M + 1][M + 1];
            for (int i = M; i >= 0; --i) {
                for (int j = M; j >= 0; --j) {
                    int i2 = gcd(i, a);
                    int j2 = gcd(j, a);
                    dp2[i2][j] = (dp2[i2][j] + dp[i][j]) % mod;
                    dp2[i][j2] = (dp2[i][j2] + dp[i][j]) % mod;
                    dp2[i][j] = (dp2[i][j] + dp[i][j]) % mod;
                }
            }
            dp = dp2;
        }

        int res = 0;
        for (int i = 1; i <= M; ++i) {
            res = (res + dp[i][i]) % mod;
        }
        return res;
    }

    private int gcd(int a, int b) {
        return b > 0 ? gcd(b, a % b) : a
    }
```

```C++ [C++]
    int subsequencePairCount(vector<int>& A) {
        int mod = 1e9 + 7, M = *max_element(A.begin(), A.end());
        vector<vector<int>> dp(M + 1, vector<int>(M + 1, 0));
        dp[0][0] = 1;

        for (int a : A) {
            vector<vector<int>> dp2(M + 1, vector<int>(M + 1, 0));
            for (int i = M; i >= 0; --i) {
                for (int j = M; j >= 0; --j) {
                    int v = dp[i][j];
                    int i2 = gcd(i, a);
                    int j2 = gcd(j, a);
                    dp2[i2][j] = (dp2[i2][j] + v) % mod;
                    dp2[i][j2] = (dp2[i][j2] + v) % mod;
                    dp2[i][j] = (dp2[i][j] + v) % mod;
                }
            }
            dp = move(dp2);
        }

        int res = 0;
        for (int i = 1; i <= M; ++i) {
            res = (res + dp[i][i]) % mod;
        }
        return res;
    }
```

```py [Python3]
    def subsequencePairCount(self, A: List[int]) -> int:
        mod = 10 ** 9 + 7
        M = max(A)
        dp = [[0] * (M + 1) for i in range(M + 1)]
        dp[0][0] = 1
        for a in A:
            dp2 = [[0] * (M + 1) for i in range(M + 1)]
            for i in range(M, -1, -1):
                for j in range(M, -1, -1):
                    i2 = gcd(i, a)
                    j2 = gcd(j, a)
                    dp2[i2][j] = (dp2[i2][j] + dp[i][j]) % mod
                    dp2[i][j2] = (dp2[i][j2] + dp[i][j]) % mod
                    dp2[i][j] = (dp2[i][j] + dp[i][j]) % mod
            dp = dp2
        return sum(dp[i][i] for i in range(1, M + 1)) % mod
```

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3316. [Find Maximum Removals From Source String](https://leetcode.com/problems/find-maximum-removals-from-source-string/discuss/5904277/JavaC%2B%2BPython-DP)
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

