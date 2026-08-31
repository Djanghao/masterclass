# Top-down DP with bit mask

**Author:** votrubac
**Votes:** 75
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1330174/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1330174/)

---

Since `m` is limited to `5`, and colours are limited to `3`, we can represent the previous column using a bit mask (two bits for each color). We can have up to 1023 combinations (including white color for convenience) of colors in the column.

1. `cur`: colors for the current column.
2. `prev`: colors for the previous column.
3. when we reach the end of the column, we start a new one: `prev = cur`, and `cur = 0`.
4. for each position, we try each color, providing it's not the same as the one on the `left` and `up`.

To avoid TLE, we need to memoise interim results. For simplicity, we are doing it for the entire row, not for individual cells. So, our memo dimensions are 1000 x 1023 - numbers of columns, and color combinations (bit mask) for the previous column.

**C++**
```cpp
int dp[1001][1024] = {};
int colorTheGrid(int m, int n, int i = 0, int j = 0, int cur = 0, int prev = 0) {
    if (i == m)
        return colorTheGrid(m, n, 0, j + 1, 0, cur);
    if (j == n)
        return 1;
    if (i == 0 && dp[j][prev])
        return dp[j][prev];
    int res = 0, up = i == 0 ? 0 : (cur >>  ((i - 1) * 2)) & 3, left = prev >> (i * 2) & 3;
    for (int k = 1; k <= 3; ++k)
        if (k != left && k != up)
            res = (res + colorTheGrid(m, n, i + 1, j, cur + (k << (i * 2)), prev)) % 1000000007;
    if (i == 0)
        dp[j][prev] = res;
    return res;
}
```