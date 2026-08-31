# [Java/C++/Python] Calulate the sub-matrix sum twice

**Author:** lee215
**Votes:** 83
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/1675412/](https://leetcode.com/problems/stamping-the-grid/solutions/1675412/)

---

# **Pre-Knowledge**
Calulate the sub-matrix sum.
<br>

# **Intitution**
`M[i][j]` can be coverd by any stamp with right-bottom point
in the sub-matrix from `(i,j)` to `(i + h - 1, j + w - 1)`.

A stamp with right-bottom point at `(i,j)` can fit,
if the sub the sub-matrix from `(i - h + 1, j - w + 1)` to `(i,j)` is all empty.

So we just need to calulate the sub-matrix sum **twice**.
<br>

# **Explanation**
`M` is the input matrix.

`A[i][j]` means the total empty points in the rectangle,
with top-left at `(0, 0)` and right-bottom at `(i - 1, j - 1)`.

`good[i][j]` means it fits a stamp with stamp right-bottom at `(i, j)`


`B[i][j]` means the sub-martix is all empty,
with top-left at `(0, 0)` and right-bottom at `(i - 1, j - 1)`

`M[i][j]` can be coverd by any stamp with right-bottom point
in the sub-matrix from `(i,j)` to `(i + w - 1, j + h - 1)`.

<br>

# **Complexity**
Time `O(mn)`
Space `O(mn)`
<br>

**Java**
```java
    public boolean possibleToStamp(int[][] M, int h, int w) {
        int m = M.length, n = M[0].length;
        int[][] A = new int[m + 1][n + 1], B = new int[m + 1][n + 1], good = new int[m][n];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                A[i + 1][j + 1] = A[i + 1][j] + A[i][j + 1] - A[i][j] + (1 - M[i][j]);
                if (i + 1 >= h && j + 1 >= w) {   
                    int x = i + 1 - h, y = j + 1 - w;
                    if (A[i + 1][j + 1] - A[x][j + 1] - A[i + 1][y] + A[x][y] == w * h)
                        good[i][j]++;
                }
            }
        }
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                B[i + 1][j + 1] = B[i + 1][j] + B[i][j + 1] - B[i][j] + good[i][j];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int x = Math.min(i + h, m), y = Math.min(j + w, n);
                if (M[i][j] == 0 && B[x][y] - B[i][y] - B[x][j] + B[i][j] == 0)
                    return false;
            }
        }
        return true; 
    }
```

**C++**
```cpp
    bool possibleToStamp(vector<vector<int>>& M, int h, int w) {
        int m = M.size(), n = M[0].size();
        vector<vector<int>> A(m + 1, vector<int>(n + 1)), B(m + 1, vector<int>(n + 1)), good(m, vector<int>(n));
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                A[i + 1][j + 1] = A[i + 1][j] + A[i][j + 1] - A[i][j] + (1 - M[i][j]);
                if (i + 1 >= h && j + 1 >= w) {
                    int x = i + 1 - h, y = j + 1 - w;
                    if (A[i + 1][j + 1] - A[x][j + 1] - A[i + 1][y] + A[x][y] == w * h)
                        good[i][j]++;
                }
            }
        }
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                B[i + 1][j + 1] = B[i + 1][j] + B[i][j + 1] - B[i][j] + good[i][j];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int x = min(i + h, m), y = min(j + w, n);
                if (M[i][j] == 0 && B[x][y] - B[i][y] - B[x][j] + B[i][j] == 0)
                    return false;
            }
        }
        return true;
    }
```

**Python**
```py
    def possibleToStamp(self, M, h, w):
        m, n = len(M), len(M[0])
        A = [[0] * (n + 1) for _ in range(m + 1)]
        good = [[0] * n for _ in range(m)]
        for i in xrange(m):
            for j in xrange(n):
                A[i + 1][j + 1] = A[i + 1][j] + A[i][j + 1] - A[i][j] + (1 - M[i][j])
                if i + 1 >= h and j + 1 >= w:
                    x, y = i + 1 - h, j + 1 -w
                    if A[i + 1][j + 1] - A[x][j + 1] - A[i + 1][y] + A[x][y] == w * h:
                        good[i][j] += 1
        B = [[0] * (n + 1) for _ in range(m + 1)]
        for i in xrange(m):
            for j in xrange(n):
                B[i + 1][j + 1] = B[i + 1][j] + B[i][j + 1] - B[i][j] + good[i][j]
        for i in xrange(m):
            for j in xrange(n):
                x, y = min(i + h, m), min(j + w, n)
                if M[i][j] == 0 and B[x][y] - B[i][y] - B[x][j] + B[i][j] == 0:
                    return False
        return True
```
