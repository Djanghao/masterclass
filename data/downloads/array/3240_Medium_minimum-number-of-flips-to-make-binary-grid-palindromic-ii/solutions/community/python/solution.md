# [Java/C++/Python] Symmetry

**Author:** lee215
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5585642/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5585642/)

---

# **Explanation**
Case 1: Handle quadrants
Make 4 cells all 1s or all 0s.
The count of 1s is 4 or 0 in the end.

Case 2: Handle middle column and row
Count `diff` pair and `one` of 1s
Each diff pair need one operation.

Case 3: Handle center
It has to be 0.

If no `diff` pair and `one % 4 == 2`,
we need to change two 1s to 0s.
<br>

# **Complexity**
Time `O(mn)`
Space `O(1)`
<br>

**Java**
```java
    public int minFlips(int[][] A) {
        int res = 0, one = 0, diff = 0, m = A.length, n = A[0].length;
        // Handle quadrants
        for (int i = 0; i < m / 2; ++i) {
            for (int j = 0; j < n / 2; ++j) {
                int v = A[i][j] + A[i][n - 1 - j] + A[m - 1 - i][j] + A[m - 1 - i][n - 1 - j];
                res += Math.min(v, 4 - v);
            }
        }
        // Handle middle column
        if (n % 2 > 0) {
            for (int i = 0; i < m / 2; ++i) {
                diff += A[i][n / 2] ^ A[m - 1 - i][n / 2];
                one += A[i][n / 2] + A[m - 1 - i][n / 2];
            }
        }
        // Handle middle row
        if (m % 2 > 0) {
            for (int j = 0; j < n / 2; ++j) {
                diff += A[m / 2][j] ^ A[m / 2][n - 1 - j];
                one += A[m / 2][j] + A[m / 2][n - 1 - j];
            }
        }
        // Handle center point
        if (n % 2 > 0 && m % 2 > 0) {
            res += A[m / 2][n / 2];
        }
        // Divisible by 4
        if (diff == 0 && one % 4 > 0) {
            res += 2;
        }
        return res + diff;
    }
```

**C++**
```cpp
    int minFlips(vector<vector<int>>& A) {
        int res = 0, one = 0, diff = 0, m = A.size(), n = A[0].size();
        for (int i = 0; i < m / 2; ++i) {
            for (int j = 0; j < n / 2; ++j) {
                int v = A[i][j] + A[i][n - 1 - j] + A[m - 1 - i][j] + A[m - 1 - i][n - 1 - j];
                res += min(v, 4 - v);
            }
        }
        if (n % 2) {
            for (int i = 0; i < m / 2; ++i) {
                diff += A[i][n / 2] != A[m - 1 - i][n / 2];
                one += A[i][n / 2] + A[m - 1 - i][n / 2];
            }
        }
        if (m % 2) {
            for (int j = 0; j < n / 2; ++j) {
                diff += A[m / 2][j] != A[m / 2][n - 1 - j];
                one += A[m / 2][j] + A[m / 2][n - 1 - j];
            }
        }
        if (n % 2 && m % 2) {
            res += A[m / 2][n / 2];
        }
        if (diff == 0 && one % 4) {
            res += 2;
        }
        return res + diff;
    }
```

**Python**
```py
    def minFlips(self, A: List[List[int]]) -> int:
        res = one = diff = 0
        m, n = len(A), len(A[0])
        for i in range(m // 2):
            for j in range(n // 2):
                v = A[i][j] + A[i][~j] + A[~i][j] + A[~i][~j]
                res += min(v, 4 - v)
        if n % 2:
            for i in range(m // 2):
                diff += A[i][n // 2] ^ A[~i][n // 2]
                one += A[i][n // 2] + A[~i][n // 2]
        if m % 2:
            for j in range(n // 2):
                diff += A[m // 2][j] ^ A[m // 2][~j]
                one += A[m // 2][j] + A[m // 2][~j]
        if n % 2 and m % 2:
            res += A[m // 2][n // 2]
        if diff == 0 and one % 4:
            res += 2
        return res + diff
```
