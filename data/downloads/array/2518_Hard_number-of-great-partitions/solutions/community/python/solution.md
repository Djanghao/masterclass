# [Java/C++/Python] Knapsack Problem

**Author:** lee215
**Votes:** 68
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/2948009/](https://leetcode.com/problems/number-of-great-partitions/solutions/2948009/)

---

# **Intuition**
we are asked to find the number of arrangement that both have size > k.
We can find out the number of cases that have size <= k,
then that a more regular Knapsack problem.
<br>

# **Explanation**
If `sum(A) < k + k`,
two groups can not have enough size at the same time,
we can directly return `0`.


Since each integer can be put in either group 1 or group 2,
We have `2 ^ n` possible partition.

Now we are calculting the number of cases we need to eliminate.

We can apply Knapsack solution to find out `dp[i]`,
which indicates the number of cases that we have a group with size `i`.

For case that group 1 has size smaller than `k`,
`res -= dp[i]` for `i < k`.

For case that group 1 has size smaller than `k`,
`res -= dp[i]` for `i < k`.

In the above,
we duplicatly count the case that both groups have size smaller than `k`,
According to the Principle of Inclusion and Exclusion,
we need to do `res += dp[i]` for `i` that `sum(A) - i < k`.
<br>

# **Complexity**
Time `O(nk)`
Space `O(k)`
<br>

**Java**
```java
    public int countPartitions(int[] A, int k) {
        long mod = (long)1e9 + 7, total = 0, res = 1, dp[] = new long[k];
        dp[0] = 1;
        for (int a : A) {
            for (int i = k - 1 - a; i >= 0; --i)
                dp[i + a] = (dp[i + a] + dp[i]) % mod;
            res = res * 2 % mod;
            total += a;
        }
        for (int i = 0; i < k; ++i) {
            res -= total - i < k ? dp[i] : dp[i] * 2;
        }
        return (int)((res % mod + mod) % mod);
    }
```

**C++**
```cpp
    int countPartitions(vector<int>& A, int k) {
        long mod = 1e9 + 7, total = 0, res = 1;
        vector<long> dp(k);
        dp[0] = 1;
        for (int& a : A) {
            for (int i = k - 1 - a; i >= 0; --i)
                dp[i + a] = (dp[i + a] + dp[i]) % mod;
            res = res * 2 % mod;
            total += a;
        }
        for (int i = 0; i < k; ++i) {
            res -= total - i < k ? dp[i] : dp[i] * 2;
        }
        return (res % mod + mod) % mod;
    }
```

**Python**
```py
    def countPartitions(self, A: List[int], k: int) -> int:
        if sum(A) < k * 2: return 0
        mod = 10**9 + 7
        dp = [1] + [0] * (k - 1)
        for a in A:
            for i in range(k - 1 - a, -1, -1):
                dp[i + a] += dp[i]
        return (pow(2, len(A), mod) - sum(dp) * 2) % mod
```
