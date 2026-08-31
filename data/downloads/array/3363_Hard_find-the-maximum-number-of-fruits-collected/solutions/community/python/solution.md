# [Java/C++/Python] DP, first child go diagonal

**Author:** lee215
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075890/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075890/)

---

# **Intuition**
First child will go along the diagonal.
<br>

# **Explanation**
For first child,
collect fruits `A[i][i]` on the diagonal

For second child,
`A[i][j] += max(dp[i - 1][j - 1], A[i - 1][j], A[i - 1][j + 1])`

For third child,
`A[i][j] += max(A[i - 1][j - 1], A[i][j - 1], A[i + 1][j - 1] )`
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

```Java [Java]
    public int maxCollectedFruits(int[][] A) {
        int n = A.length;
        // Set inaccessible cells to 0
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (i < j && j < n - 1 - i) {
                    A[i][j] = 0;
                }
                if (j < i && i < n - 1 - j) {
                    A[i][j] = 0;
                }
            }
        }

        // First child
        int res = 0;
        for (int i = 0; i < n; ++i) {
            res += A[i][i];
        }

        // Second child
        for (int i = 1; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                A[i][j] += Math.max(A[i - 1][j - 1],
                                  Math.max(A[i - 1][j], (j + 1 < n) ? A[i - 1][j + 1] : 0));
            }
        }

        // Third child
        for (int j = 1; j < n; ++j) {
            for (int i = j + 1; i < n; ++i) {
                A[i][j] += Math.max(A[i - 1][j - 1],
                                  Math.max(A[i][j - 1], (i + 1 < n) ? A[i + 1][j - 1] : 0));
            }
        }

        return res + A[n - 1][n - 2] + A[n - 2][n - 1];
    }
```

```C++ [C++]
    int maxCollectedFruits(vector<vector<int>>& A) {
        int n = A.size();
        // Set inaccessible cells to 0
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (i < j && j < n - 1 - i) {
                    A[i][j] = 0;
                }
                if (j < i && i < n - 1 - j) {
                    A[i][j] = 0;
                }
            }
        }
        // First child
        int res = 0;
        for (int i = 0; i < n; ++i) {
            res += A[i][i];
        }
        // Second child
        for (int i = 1; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                A[i][j] += max({A[i - 1][j - 1], A[i - 1][j], (j + 1 < n) ? A[i - 1][j + 1] : 0});
            }
        }
        // Thrid child
        for (int j = 1; j < n; ++j) {
            for (int i = j + 1; i < n; ++i) {
                A[i][j] += max({A[i - 1][j - 1], A[i][j - 1], (i + 1 < n) ? A[i + 1][j - 1] : 0});
            }
        }
        return res + A[n - 1][n - 2] + A[n - 2][n - 1];;
    }
```

```py [Python3]
    def maxCollectedFruits(self, A: List[List[int]]) -> int:
        n = len(A)
        for i in range(n):
            for j in range(n):
                if i < j < n - 1 - i:
                    A[i][j] = 0
                if j < i < n - 1 - j:
                    A[i][j] = 0
        for i in range(1, n):
            for j in range(i + 1, n):
                A[i][j] += max(A[i - 1][j - 1], A[i - 1][j], A[i - 1][j + 1] if j + 1 < n else 0)
        for j in range(1, n):
            for i in range(j + 1, n):
                A[i][j] += max(A[i - 1][j - 1], A[i][j - 1], A[i + 1][j - 1] if i + 1 < n else 0)
        return sum(A[i][i] for i in range(n)) + A[-1][-2] + A[-2][-1]
```

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3363. [Find the Maximum Number of Fruits Collected](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/discuss/6075890/JavaC%2B%2BPython-First-child-go-diagonal)
- 3352. [Count K-Reducible Numbers Less Than N](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/discuss/6028638/JavaC%2B%2BPython-DP)
- 3351. [Sum of Good Subsequences](https://leetcode.com/problems/sum-of-good-subsequences/discuss/6028686/JavaC%2B%2BPython-DP)
- 3336. [Find the Number of Subsequences With Equal GCD](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/discuss/5973616/JavaC%2B%2BPython-2D-DP)
- 3335. [Total Characters in String After Transformations I](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/discuss/5973021/Python-DP)
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
