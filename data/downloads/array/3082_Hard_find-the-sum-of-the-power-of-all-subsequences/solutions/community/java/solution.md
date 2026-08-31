# [Java/C++/Python] DP, O(k) Space

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884226/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884226/)

---

# **Explanation**

`dp[i][v]` means the number of subsequence of `i` elements with sum of `v`.
For each value `a` and each current sum `v`,
we will have `dp[i][v] += dp[i - 1][v - a])`.

Finally for `dp[i][k]`,
for each `n - i`  other elements,
we can have it in or not in the subsequence,
so result is `SUM(dp[i][k] * 2 ^(n - i))`
<br>

# **Complexity**
Time `O(nnk)`
Space `O(nk)`
<br>

**Java**
```java
    public int sumOfPower(int[] A, int k) {
        int n = A.length, mod = (int)1e9 + 7, res = 0, pow2 = 1;
        int[][] dp = new int[n + 1][k + 1];
        dp[0][0] = 1;
        for (int a : A)
            for (int v = k; v >= a; --v)
                for (int i = n; i > 0; --i)
                    dp[i][v] = (dp[i][v] + dp[i - 1][v - a]) % mod;
        for (int i = n; i > 0; --i) {
            res = (int)(res + (1L * pow2 * dp[i][k]) % mod) % mod;
            pow2 = (pow2 * 2) % mod;
        }
        return res;
    }
```
**C++**
```cpp
    int sumOfPower(vector<int>& A, int k) {
        int n = A.size(), mod = 1e9 + 7, res = 0, pow2 = 1;
        vector<vector<int>> dp(n + 1, vector<int>(k + 1));
        dp[0][0] = 1;
        for (int& a : A)
            for (int v = k; v >= a; --v)
                for (int i = n; i > 0; --i)
                    dp[i][v] = (dp[i][v] + dp[i - 1][v - a]) % mod;
        for (int i = n; i > 0; --i) {
            res = (res + (1L * pow2 * dp[i][k]) % mod) % mod;
            pow2 = (pow2 * 2) % mod;
        }
        return res;
    }
```

**Python**
```py
    def sumOfPower(self, A: List[int], k: int) -> int:
        n = len(A)
        mod = 10 ** 9 + 7
        dp = [[0] * (k + 1) for i in range(n + 1)]
        dp[0][0] = 1
        for a in A:
            for v in range(k, a - 1, -1):
                for i in range(n, 0, -1):
                    dp[i][v] = (dp[i][v] + dp[i - 1][v - a]) % mod
        return sum(pow(2, n - i, mod) * dp[i][k] for i in range(1, n + 1)) % mod
```
<br>

# **Solution II**
In the first solution,
we count the number of element in sum,
then caculate pow of 2 for other in the end.
This idea mixed up some math and dp.

Inspired from @stanislav-iablokov 's dfs [solution](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/discuss/4884094/PythonRust-Knapsack).
apply the Chinese QinJiuShao algoritme(\u79E6\u4E5D\u97F6\u7B97\u6CD5), also known as Horner's method.


Actually we can calculate the pow of 2 during the dp addition.
so the we don't need to count the number and can save the first dimension.
For each element `a`,
we can choose take it or not.
`dp[v] = dp[v] + d[v] + dp[v - a]`

`dp[v]` for the sequence not taking it,
`dp[v] + dp[v - a]` for the sequence taking it.


# **Complexity**
Time `O(nk)`
Space `O(nk)`
<br>

**Java**
```java
    public int sumOfPower(int[] A, int k) {
        int n = A.length, mod = (int)1e9 + 7;
        int[] dp = new int[k + 1];
        dp[0] = 1;
        for (int a : A)
            for (int v = k; v >= 0; --v)
                dp[v] = (dp[v] * 2 % mod + (v >= a ? dp[v - a] : 0)) % mod;
        return dp[k];
    }
```
**C++**
```cpp
    int sumOfPower(vector<int>& A, int k) {
        int n = A.size(), mod = 1e9 + 7;
        vector<int> dp(k + 1);
        dp[0] = 1;
        for (int& a : A)
            for (int v = k; v >= 0; --v)
                dp[v] = (dp[v] * 2 % mod + (v >= a ? dp[v - a] : 0)) % mod;
        return dp[k];
    }
```

**Python**
```py
    def sumOfPower(self, A: List[int], k: int) -> int:
        n = len(A)
        mod = 10 ** 9 + 7
        dp = [1] + [0] * k
        for a in A:
            for v in range(k, -1, -1):
                dp[v] = (dp[v] * 2 + (dp[v - a] if v >= a else 0)) % mod
        return dp[k]
```
