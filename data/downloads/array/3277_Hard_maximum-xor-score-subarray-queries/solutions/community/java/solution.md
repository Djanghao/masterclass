# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5718161/](https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5718161/)

---

# **Explanation**
`xor[i][j] = xor[i][j - 1] ^ xor[i + 1][j]`
`score[i][j] = max(score[i][j - 1], score[i + 1][j], xor[i][j])`

We calculate `xor` and `score` from `j - i = 0` to `j - i = n`,
then we have the result for all queries.
<br>

# **Complexity**
Time `O(n ^ 2 + queries)`
Space `O(n ^ 2 + queries)`
<br>

**Java**
```java
    public int[] maximumSubarrayXor(int[] A, int[][] queries) {
        int n = A.length, m = queries.length;
        int[][] xor = new int[n][n], score = new int[n][n];
        for (int i = 0; i < n; ++i)
            score[i][i] = xor[i][i] = A[i];
        for (int d = 1; d < n; ++d)
            for (int i = 0, j = d; i < n - d; ++i, ++j)
                score[i][j] = Math.max(Math.max(score[i][j - 1], score[i + 1][j]), xor[i][j] = xor[i][j - 1] ^ xor[i + 1][j]);
        int[] res = new int[m];
        for (int i = 0; i < m; ++i)
            res[i] = score[queries[i][0]][queries[i][1]];
        return res;
    }
```

**C++**
```cpp
    vector<int> maximumSubarrayXor(vector<int>& A, vector<vector<int>>& queries) {
        int n = A.size();
        vector<vector<int>> xo(n, vector<int>(n)), score(n, vector<int>(n));
        for (int i = 0; i < n; ++i)
            score[i][i] = xo[i][i] = A[i];
        for (int d = 1; d < n; ++d)
            for (int i = 0, j = d; i < n - d; ++i, ++j)
                score[i][j] = max({score[i][j - 1], score[i + 1][j], xo[i][j] = xo[i][j - 1] ^ xo[i + 1][j]});
        vector<int> res;
        for (auto& q : queries)
            res.push_back(score[q[0]][q[1]]);
        return res;
    }
```

**Python**
```py
    def maximumSubarrayXor(self, A: List[int], queries: List[List[int]]) -> List[int]:
        n = len(A)
        xor = [A[:] for i in range(n)]
        score = [A[:] for i in range(n)]
        for d in range(1, n):
            for i in range(n - d):
                j = i + d
                xor[i][j] = xor[i][j - 1] ^ xor[i + 1][j]
                score[i][j] = max(score[i][j - 1], score[i + 1][j], xor[i][j])
        return [score[i][j] for i,j in queries]
```
<br>

# **Solution 2**
Don't store all result,
fullfill the queries during calculation.

Time `O(n ^ 2 + queries)`
Space `O(n + queries)`

**Java**
```java
    public int[] maximumSubarrayXor(int[] A, int[][] queries) {
        int n = A.length, m = queries.length;
        Map<Integer, List<Integer>> d = new HashMap<>();
        for (int qi = 0; qi < m; ++qi) {
            int key = queries[qi][1] - queries[qi][0];
            d.computeIfAbsent(key, k -> new ArrayList<>()).add(qi);
        }

        int[] cur = Arrays.copyOf(A, n);
        int[] res = new int[m];
        for (int v = 0; v < n; ++v) {
            if (d.containsKey(v)) {
                for (int qi : d.get(v)) {
                    res[qi] = cur[queries[qi][0]];
                }
            }
            for (int i = 0; i < n - v - 1; ++i) {
                A[i] ^= A[i + 1];
                cur[i] = Math.max(cur[i], Math.max(cur[i + 1], A[i]));
            }
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> maximumSubarrayXor(vector<int>& A, vector<vector<int>>& queries) {
        int n = A.size(), m = queries.size();
        unordered_map<int, vector<int>> d;
        for (int qi = 0; qi < m; ++qi) {
            d[queries[qi][1] - queries[qi][0]].push_back(qi);
        }
        vector<int> cur = A, res(m);
        for (int v = 0; v < n; ++v) {
            for (int qi : d[v]) {
                res[qi] = cur[queries[qi][0]];
            }
            for (int i = 0; i < n - v - 1; ++i) {
                A[i] ^= A[i + 1];
                cur[i] = max({cur[i], cur[i + 1], A[i]});
            }
        }
        return res;
    }
```

**Python**
```py
    def maximumSubarrayXor(self, A: List[int], queries: List[List[int]]) -> List[int]:
        d = defaultdict(list)
        for i,j in queries:
            d[j - i].append([i, j])
        cur = A[:]
        res = {}
        n = len(A)
        for v in range(len(A)):
            for i,j in d[v]:
                res[i,j] = cur[i]
            for i in range(n - v - 1):
                A[i] ^= A[i + 1]
                cur[i] = max(cur[i], cur[i + 1], A[i])
        return [res[i,j] for i,j in queries]
```
<br>

# **Solution 3: DFS**

Time `O(n ^ 2)`
Space `O(n ^ 2 + queries)`

**Python**
```py
    def maximumSubarrayXor(self, A: List[int], queries: List[List[int]]) -> List[int]:
        @cache
        def dp(i, j):
            if i == j: return [A[i]] * 2
            xor1, score1 = dp(i, j - 1)
            xor2, score2 = dp(i + 1, j)
            return [xor1 ^ xor2, max(xor1 ^ xor2, score1, score2)]
        return [dp(*q)[1] for q in queries]
```
