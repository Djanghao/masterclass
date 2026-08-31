# Four Prefix Sums

**Author:** votrubac
**Votes:** 73
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/1267577/](https://leetcode.com/problems/largest-magic-square/solutions/1267577/)

---

We compute prefix sum arrays independently for each row, column and two diagonals. To make it simpler, we pad those arrays with sentinel rows and columns.
 
Then, we process each value in the grid, and check squares from largest to smallest. We check the sum of two diagonals first, and then go through each row and column sums.
 
Note that, since we process `k` from largest to smallest, we can break from the inner loop once we find a magic square.

**C++**
```cpp
int largestMagicSquare(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size(), res = 0;
    vector<vector<int>> rows(m + 2, vector<int>(n + 2)), cols(rows), d1(rows), d2(rows);
    for (int i = 1; i <= m; ++i)
        for (int j = 1; j <= n; ++j) {
            rows[i][j] += grid[i - 1][j - 1] + rows[i][j - 1];
            cols[i][j] += grid[i - 1][j - 1] + cols[i - 1][j];
            d1[i][j] += grid[i - 1][j - 1] + d1[i - 1][j - 1];
            d2[i][j] += grid[i - 1][j - 1] + d2[i - 1][j + 1];
        }
    for (int i = 1; i <= m; ++i)
        for (int j = 1; j <= n; ++j)
            for (int k = min(m - i, n - j); k > res; --k) {
                int sum = d1[i + k][j + k] - d1[i - 1][j - 1];
                bool match = sum == d2[i + k][j] - d2[i - 1][j + k + 1]; 
                for (int l = 0; l <= k && match; ++l) {
                    match &= sum == rows[i + l][j + k] - rows[i + l][j - 1];
                    match &= sum == cols[i + k][j + l] - cols[i - 1][j + l];
                }
                res = match ? k : res;
            }
    return res + 1;
}
```
We can save some memory and do not use prefix sum arrays for the diagonals. Since we are going through `k` for every square, we can compute diagonal sums in-place.

**C++**
```cpp
int largestMagicSquare(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size(), res = 0;
    vector<vector<int>> rows(m + 2, vector<int>(n + 2)), cols(rows);
    for (int i = 1; i <= m; ++i)
        for (int j = 1; j <= n; ++j) {
            rows[i][j] += grid[i - 1][j - 1] + rows[i][j - 1];
            cols[i][j] += grid[i - 1][j - 1] + cols[i - 1][j];
        }
    for (int i = 1; i <= m; ++i)
        for (int j = 1; j <= n; ++j)
            for (int k = min(m - i, n - j); k > res; --k) {
                int sum = rows[i][j + k] - rows[i][j - 1], l = 0, d1 = 0, d2 = 0;
                for (; l <= k; ++l) {
                    if (sum != rows[i + l][j + k] - rows[i + l][j - 1] 
                        || sum != cols[i + k][j + l] - cols[i - 1][j + l])
                        break;
                    d1 += grid[i - 1 + l][j - 1 + l];
                    d2 += grid[i - 1 + k - l][j - 1 + l];
                }
                res = l > k && d1 == sum && d2 == sum ? k : res;
            }
    return res + 1;
}
```