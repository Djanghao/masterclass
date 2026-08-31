# Brute-Force

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648936/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648936/)

---

**C++**
```cpp
int maxSum(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size(), res = 0;
    for (int i = 0; i < m - 2; ++i) {
        for (int j = 0; j < n - 2; ++j)
            res = max(res, 
                g[i + 0][j] + g[i + 0][j + 1] + g[i + 0][j + 2] +
                              g[i + 1][j + 1] +
                g[i + 2][j] + g[i + 2][j + 1] + g[i + 2][j + 2]);
    }
    return res;
}
```