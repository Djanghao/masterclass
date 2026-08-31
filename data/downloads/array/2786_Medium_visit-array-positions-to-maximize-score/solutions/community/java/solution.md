# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801776/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801776/)

---

# **Intuition**
The latest status depends on previous score,
so we can solve this problem with dp approach.
<br>

# **Explanation**
`dp[0]` means the max score with last visit is even.
`dp[1]` means the max score with last visit is odd.

We initilize `dp[0]` and `dp[1]` with `-x` to be small enough.
Because we start with `A[0]`,
so `dp[A[0] & 1] = A[0]`


Then iterate each `A[i]` where `i > 0`:

One option to reach `A[i]`,
is going from same parities,
and get score `dp[A[i] & 1] + A[i]`.

The other option to reach `A[i]`,
is going from different parities,
and get score `dp[A[i] & 1 ^ 1] + A[i] - x`.

We update `dp[A[i] & 1]` with the max of both option,
continue doing this,
and finally return `max(dp[0], dp[1])`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long maxScore(int[] A, int x) {
        long dp[] = new long[] { -x, -x}, n = A.length;
        dp[A[0] & 1] = A[0];
        for (int i = 1; i < n; i++)
            dp[A[i] & 1] = Math.max(dp[A[i] & 1], dp[A[i] & 1 ^ 1] - x) + A[i];
        return Math.max(dp[0], dp[1]);
    }
```

**C++**
```cpp
    long long maxScore(vector<int>& A, int x) {
        long long dp[2] = {-x, -x}, n = A.size();
        dp[A[0] & 1] = A[0];
        for (int i = 1; i < n; i++)
            dp[A[i] & 1] = max(dp[A[i] & 1], dp[A[i] & 1 ^ 1] - x) + A[i];
        return max(dp[0], dp[1]);
    }
```

**Python**
```py
    def maxScore(self, A: List[int], x: int) -> int:
        dp = [-x, -x]
        dp[A[0] & 1] = A[0]
        for i in range(1, len(A)):
            dp[A[i] & 1] = max(dp[A[i] & 1], dp[A[i] & 1 ^ 1] - x) + A[i]
        return max(dp)
```
