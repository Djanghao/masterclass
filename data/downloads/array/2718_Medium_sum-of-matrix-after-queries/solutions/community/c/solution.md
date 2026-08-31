# Last Query Wins

**Author:** votrubac
**Votes:** 44
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3594928/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3594928/)

---

We start with the last query and go backwards.


We track `id` of rows and columns we have seen - so we can ignore earlier queries that will be  overwritten.

We also track how many rows and columns are still not covered by any query. That way, each query adds:
- `v * cols_cnt` for a row,
- `v * rows_cnt` for a column.

## Minimalizm Version
In this version, we abstract from rows and columns, and use `type` as an idex.

See a verbose version below (could be easier to understand).

**C++**
```cpp
long long matrixSumQueries(int n, vector<vector<int>>& qs) {
    long long res = 0, cnt[2] = {n, n};
    bool seen[2][10001] = {};
    for (int i = qs.size() - 1; i >= 0; --i) {
        int type = qs[i][0], id = qs[i][1], v = qs[i][2];
        if (!seen[type][id]) {
            seen[type][id] = true;
            res += v * cnt[!type];
            --cnt[type];
        }
    }
    return res;
}
```

## Verbose Version
**C++**
```cpp
long long matrixSumQueries(int n, vector<vector<int>>& qs) {
    long long res = 0, cols_cnt = n, rows_cnt = n;
    vector<bool> cols(n), rows(n);
    for (int i = qs.size() - 1; i >= 0; --i) {
        int type = qs[i][0], id = qs[i][1], v = qs[i][2];
        if (type == 0) { // row
            if (!rows[id]) {
                rows[id] = true;
                --rows_cnt;
                res += v * cols_cnt;
            }
        }
        else { // col
            if (!cols[id]) {
                cols[id] = true;
                --cols_cnt;    
                res += v * rows_cnt;
            }
        }
    }
    return res;
}
```