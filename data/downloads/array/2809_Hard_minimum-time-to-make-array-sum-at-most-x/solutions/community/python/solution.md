# [Java/C++/Python] DP Solution, O(n^2)

**Author:** lee215
**Votes:** 43
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868184/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868184/)

---

# **Intuition**
The `sa = sum(A)`, `sb = sum(B)`.
If we do nothing,
we will have `sb * i + sa` in total at `i` seconds.

At the `t` seconds,
we will select `t` elements.
Take a look at these selected elements,
`A[i]` will be removed,
and the sum for these elements is `b1 * (t - 1) + b2 * (t - 2) .... + bt * 0`.
so `b1,b2,b3..,bt` are arranged in increasing order.
<br>

# **Explanation**
Firstly we sort all pair of `(B[i], A[i])` by value of `B[i]`.

Then we use `dp` to solve this prolem:
`dp[j][i]` means the maximum value we can reduce at `i` seconds,
with `j + 1` step-smallest integers.

The `dp` equation is
`dp[j][i] = max(dp[j][i], dp[j - 1][i - 1] + i * b + a)`
Finally we return sconds `i`,
if `sb * i + sa - dp[n - 1][i] <= x`,
otherwise return `-1`.

Since we initial `dp[j] = dp[j - 1]`,
actually we can save the first dimension,
and improve the space to from `O(n^2)` to `O(n)`
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int minimumTime(List<Integer> A, List<Integer> B, int x) {
        int n = A.size(), sa = 0, sb = 0, dp[] = new int[n + 1];
        List<List<Integer>> BA = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int a = A.get(i), b = B.get(i);
            BA.add(Arrays.asList(b, a));
            sa += a;
            sb += b;
        }
        Collections.sort(BA, (o1, o2) -> Integer.compare(o1.get(0), o2.get(0)));
        for (int j = 0; j < n; ++j)
            for (int i = j + 1; i > 0; --i)
                dp[i] = Math.max(dp[i], dp[i - 1] + i * BA.get(j).get(0) + BA.get(j).get(1));
        for (int i = 0; i <= n; ++i)
            if (sb * i + sa - dp[i] <= x)
                return i;
        return -1;
    }
```

**C++**
```cpp
    int minimumTime(vector<int>& A, vector<int>& B, int x) {
        int n = A.size(), sa = accumulate(A.begin(), A.end(), 0), sb = accumulate(B.begin(), B.end(), 0);
        vector<int> dp(n + 1);
        vector<vector<int>> BA;
        for (int i = 0; i < n; i++)
            BA.push_back({B[i], A[i]});
        sort(BA.begin(), BA.end());
        for (int j = 0; j < n; ++j)
            for (int i = j + 1; i > 0; --i)
                dp[i] = max(dp[i], dp[i - 1] + i * BA[j][0] + BA[j][1]);
        for (int i = 0; i <= n; ++i)
            if (sb * i + sa - dp[i] <= x)
                return i;
        return -1;
    }
```

**Python**
```py
    def minimumTime(self, A: List[int], B: List[int], x: int) -> int:
        n = len(A)
        dp = [0] * (n + 1)
        for j, (b, a) in enumerate(sorted(zip(B, A)), 1):
            for i in range(j, 0, -1):
                dp[i] = max(dp[i], dp[i - 1] + i * b + a)
        sa, sb = sum(A), sum(B)
        for i in range(0, n + 1):
            if sb * i + sa - dp[i] <= x:
                return i
        return -1
```
