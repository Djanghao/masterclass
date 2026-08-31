# [Java/C++/Python] DP, O(n)

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619401/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619401/)

---

# **Explanation**
`dp[i][j]` means the count of first `i + 1` pairs and `arr1[i] = j`.

Since arr1[0] can be any value that `0 <= arr1[0] <= A[0]`,
we initilize `d[0][j] = 1`

From the problem we have
`A[i - 1] - arr1[i - 1] >= A[i] - arr1[i]`

That is:
`arr1[i - 1] + A[i] - A[i - 1] <= arr1[i]`

So we can have
`arr1[i - 1] + d <= arr1[i]`,
where `d = max(0, A[i] - A[i - 1])`,

Thus we can have the dp equation:
`dp[i][j] = dp[i][j - 1] + dp[i - 1][j - d]`

Finally we return `sum(dp[n - 1])`

Because `dp[i]` only depends on `dp[i - 1]`,
we can optimize it to 1 dimention dp with `O(n)` space
<br>

# **Complexity**
Time `O(nm)`, where `m = max(A) + 1`
Space `O(m)`
<br>

**Java**
```java
    public int countOfPairs(int[] A) {
        int n = A.length, m = 1001, mod = 1000000007, dp[] = new int[m];
        Arrays.fill(dp, 1);

        for (int i = 1; i < n; ++i) {
            int d = Math.max(0, A[i] - A[i - 1]), dp2[] = new int[m];
            for (int j = d; j < A[i] + 1; ++j) {
                dp2[j] = ((j > 0 ? dp2[j - 1] : 0) + dp[j - d]) % mod;
            }
            dp = dp2;
        }

        int res = 0;
        for (int j = 0; j <= A[n - 1]; ++j)
            res = (res + dp[j]) % mod;
        return res;
    }
```

**C++**
```cpp
    int countOfPairs(vector<int>& A) {
        int n = A.size(), m = 1001, mod = 1e9 + 7;
        vector<int> dp(m, 1);

        for (int i = 1; i < n; ++i) {
            int d = max(0, A[i] - A[i - 1]);
            vector<int> dp2(m, 0);
            for (int j = d; j < A[i] + 1; ++j) {
                dp2[j] = ((j > 0 ? dp2[j - 1] : 0) + dp[j - d]) % mod;
            }
            swap(dp, dp2);
        }

        int res = 0;
        for (int j = 0; j <= A[n - 1]; ++j)
            res = (res + dp[j]) % mod;
        return res;
    }
```

**Python**
```py
    def countOfPairs(self, A: List[int]) -> int:
        mod = 10 ** 9 + 7
        n, m = len(A), max(A) + 1
        dp, dp2 = [1] * m, [0] * m
        for i in range(1, n):
            d = max(0, A[i] - A[i - 1])
            for j in range(d, A[i] + 1):
                dp2[j] = (dp2[j - 1] + dp[j - d]) % mod
            dp, dp2 = dp2, [0] * m
        return sum(dp) % mod
```

**Short Python**
```py
    def countOfPairs(self, A: List[int]) -> int:
        dp = [1] * (A[0] + 1)
        for a,b in pairwise(A):
            dp = list(accumulate([0] * (b - a) + dp))[:b + 1]
        return sum(dp) % (10 ** 9 + 7)
```
<br>


# **Solution 2: Combinations**
Solution 0 is a 2D dp.
Solution 1 is a simplified 1D dp.

we notice the result is a `n`-times accumulated number,
which is also a combination number.

From the latest python solution,
we can see the final length of list is `A[n - 1]`,
We only need to calculate the prefix zeros,
which is the sum of increases.

From the understanding of math,
it's same as the number of increasing sequence `a` that
`a1 <= a2 <=  .... <= an <= v`

Time `O(n + m)` for `comb` in Python, need extra `logmod` for general calculation.
Space `O(1)`

**Python**
```py
    def countOfPairs(self, A: List[int]) -> int:
        v = A[-1] - sum(max(b - a, 0) for a,b in pairwise(A))
        return comb(len(A) + v, v) % (10 ** 9 + 7) if v > 0 else 0
```

