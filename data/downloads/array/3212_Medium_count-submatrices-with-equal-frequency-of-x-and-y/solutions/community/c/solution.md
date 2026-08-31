# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 33
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431675/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431675/)

---

# **Explanation**
`X[i][j]` means the count of `X` in first `i` rows and `j` cols.

So we can have dp equation
`X[i][j] = X[i-1][j] + X[i][j-1] - X[i-1][j-1] + (A[i][j] == X)`
and similar for `Y`.

Then we check if `X[i][j] == Y[i][j] > 0`,
then increment result `res`.
<br>

# **Complexity**
Time `O(mn)`
Space `O(mn)`, can improved to `O(min(m,n))` with 1d DP.
<br>

**Java**
```java
    public int numberOfSubmatrices(char[][] A) {
        int n = A.length, m = A[0].length, res = 0;
        int[][] X = new int[n + 1][m + 1], Y = new int[n + 1][m + 1];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                X[i + 1][j + 1] = X[i][j + 1] + X[i + 1][j] - X[i][j] + (A[i][j] == 'X' ? 1 : 0);
                Y[i + 1][j + 1] = Y[i][j + 1] + Y[i + 1][j] - Y[i][j] + (A[i][j] == 'Y' ? 1 : 0);
                if (X[i + 1][j + 1] == Y[i + 1][j + 1] && X[i + 1][j + 1] > 0) {
                    res++;
                }
            }
        }
        return res;
    }
```

**C++**
```cpp
    int numberOfSubmatrices(vector<vector<char>>& A) {
        int n = A.size(), m = A[0].size(), res = 0;
        vector<vector<int>> X(n + 1, vector<int>(m + 1));
        vector<vector<int>> Y(n + 1, vector<int>(m + 1));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                X[i + 1][j + 1] = X[i][j + 1] + X[i + 1][j] - X[i][j] + (A[i][j] == 'X');
                Y[i + 1][j + 1] = Y[i][j + 1] + Y[i + 1][j] - Y[i][j] + (A[i][j] == 'Y');
                if (X[i + 1][j + 1] == Y[i + 1][j + 1] && X[i + 1][j + 1] > 0) {
                    res++;
                }
            }
        }
        return res;
    }
```

**Python**
```py
    def numberOfSubmatrices(self, A: List[List[str]]) -> int:
        n, m = len(A), len(A[0])
        X = [[0] * (m + 1) for i in range(n + 1)]
        Y = [[0] * (m + 1) for i in range(n + 1)]
        res = 0
        for i in range(n):
            for j in range(m):
                X[i][j] = X[i-1][j] + X[i][j-1] - X[i-1][j-1] + (A[i][j] == 'X')
                Y[i][j] = Y[i-1][j] + Y[i][j-1] - Y[i-1][j-1] + (A[i][j] == 'Y')
                if X[i][j] == Y[i][j] > 0:
                    res += 1
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
