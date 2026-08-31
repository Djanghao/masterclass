# [Java/C++/Python] Reverse Queries

**Author:** lee215
**Votes:** 34
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3595045/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3595045/)

---

# **Why people down vote this thread without even a word or reason?**
# **Please upvote this, thanks.**

# **Intuition**
"overwriting any previous values."
So we don't know whether the current value will be overrote by later query.
We can iterate `queries` reversely,
so we can make sure once the value filled,
it won't be changed anymore.
<br>

# **Explanation**
`col[i]` the values in the row with index `i`.
`row[i]` the values in the col with index `i`.


Iterate `queries` reversely,
if `col[i]` or `row[i]` already set,
ignore it.
otherwise set the value.

If `row[i]` is set,
we didn't set `n` values in matrix,
since there length of `col` have already been set,
we only fill in `n - col.size()` cell in `i`th row,
so the total value is incresed by `v * (n - col.size())`.
If `col[i]` is set, similar case.

Finally we return result.
<br>

# **Complexity**
Time `O(queries)`
Space `O(n)`
<br>

**Java**
```java
    public long matrixSumQueries(int n, int[][] queries) {
        Map<Integer, Integer> col = new HashMap<>(), row = new HashMap<>();
        long res = 0;
        for (int j = queries.length - 1; j >= 0; --j) {
            int t = queries[j][0], i = queries[j][1], v = queries[j][2];
            if (t == 0 && !col.containsKey(i)) {
                col.put(i, v);
                res += 1L * v * (n - row.size());
            }
            if (t == 1 && !row.containsKey(i)) {
                row.put(i, v);
                res += 1L * v * (n - col.size());
            }
        }
        return res;
    }
```

**C++**
```cpp
    long long matrixSumQueries(int n, vector<vector<int>>& queries) {
        unordered_map<int, int> col, row;
        long long res = 0;
        for (int j = queries.size() - 1; j >= 0; --j) {
            int t = queries[j][0], i = queries[j][1], v = queries[j][2];
            if (t == 0 && !col.count(i)) {
                col[i] = v;
                res += v * (n - row.size());
            }
            if (t == 1 && !row.count(i)) {
                row[i] = v;
                res += v * (n - col.size());
            }
        }
        return res;
    }
```

**Python**
```py
    def matrixSumQueries(self, n: int, queries: List[List[int]]) -> int:
        col, row = {}, {}
        res = 0
        for t,i,v in queries[::-1]:
            if t == 0 and i not in row:
                row[i] = v
                res += v * (n - len(col))
            if t == 1 and i not in col:
                col[i] = v
                res += v * (n - len(row))
        return res
```
