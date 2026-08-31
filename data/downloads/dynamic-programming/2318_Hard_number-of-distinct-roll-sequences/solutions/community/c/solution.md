# Top-Down and Bottom-Up DP

**Author:** votrubac
**Votes:** 97
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2195808/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2195808/)

---

Top-down DP is easier, so we will look at it first. Then, we will convert it to bottom-up DP so we can optimize for the constant memory.

#### Top-Down
When doing DFS, for the current roll `n`, we pass previous (`p`), and one before (`pp`) rolls.

For `p` and `pp`, we try all valid rolls, and continue with DFS. Then `n == 0`, we explored one valid sequence.

Finally, we memoise the result in `dp[n][p][pp]`.

**C++**
```cpp
int dp[10001][7][7] = {};
int distinctSequences(int n, int p = 0, int pp = 0) {
    if (n == 0)
        return 1;
    if (dp[n][p][pp] == 0)
        for (int d = 1; d < 7; ++d)
            if (d != p && d != pp && (p == 0 || gcd(d, p) == 1))
                dp[n][p][pp] = (dp[n][p][pp] + distinctSequences(n - 1, d, p)) % 1000000007;
    return dp[n][p][pp];
}
```
**Complexity Analsys**
- Time: O(n)
- Memory: O(n)
#### Bottom-Up
The initial state of `dp` is the result of 2 rolls. Note that we can use that data going forward to check for valid combinations (` if (dp[d][p])`). 

We only need to track the result of the `i - 1` roll, so we use constant memory (two arrays - `dp` and `dp1` - 36 elements each).

With these optimizations, the runtime is reduced to 70 ms.

**C++**
```cpp
int dp[6][6] = {{0, 1, 1, 1, 1, 1}, {1, 0, 1, 0, 1, 0}, {1, 1, 0, 1, 1, 0},
                {1, 0, 1, 0, 1, 0}, {1, 1, 1, 1, 0, 1}, {1, 0, 0, 0, 1, 0}}, dp1[6][6] = {};
int distinctSequences(int n) {
    if (n == 1)
        return 6;
    for (int i = 3; i <= n; ++i) {
        for (int d = 0; d < 6; ++d)
            for (int p = 0; p < 6; ++p) {
                dp1[d][p] = 0;
                if (dp[d][p])
                    for (int pp = 0; pp < 6; ++pp)
                        if (d != pp)
                            dp1[d][p] = (dp1[d][p] + dp[p][pp]) % 1000000007;
            }
        swap(dp, dp1);
    }
    return accumulate(begin(dp), end(dp), 0LL, [](long long s, const auto &n) 
        { return (s + accumulate(begin(n), end(n), 0LL)) % 1000000007; });
} 
```
**Complexity Analsys**
- Time: O(n)
- Memory: O(1)