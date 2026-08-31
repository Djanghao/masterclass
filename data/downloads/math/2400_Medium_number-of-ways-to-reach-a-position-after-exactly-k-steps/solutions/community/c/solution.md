# Top-Down + Bottom-Up DP

**Author:** votrubac
**Votes:** 126
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527267/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527267/)

---

#### Top-Down DP
Instead of positions, we can track the distance between them.
    
The distance is non-negative, so it's easier to memoise.

For `k` number of steps and distance `d`, the number of ways is `dfs(k - 1, d + 1) + dfs(k - 1, abs(d - 1))`.
    
> Note that for `d == 0`, the nuber of ways is `dfs(k - 1, 1) + dfs(k - 1, 1)`, since `abs(0 - 1) == 1`. 
> We can reach `0` from positions `1` and `-1`, and the number of ways for negative positions mirrors positive positions.

**C++**
```cpp
int dp[1001][1001] = {}, mod = 1000000007;
class Solution {
public:
int dfs(int k, int d) {
    if (d >= k)
        return d == k;
    if (dp[k][d] == 0)
        dp[k][d] = (1 + dfs(k - 1, d + 1) + dfs(k - 1, abs(d - 1))) % mod;
    return dp[k][d] - 1;
} 
int numberOfWays(int startPos, int endPos, int k) {
    return dfs(k, abs(startPos - endPos));
}
};
```

#### Bottom-Up DP
We can precompute the tabulation once. From there, all test cases are O(1).

We 'fix' the start at zero, and consider the distance to the end (always positive). The tabulation sort of looks like the Pascal triangle:
```
1 
0 1
2 0 1
0 3 0 1
6 0 4 0 1
0 10 0 5 0 1
20 0 15 0 6 0 1
0 35 0 21 0 7 0 1
70 0 56 0 28 0 8 0 1
0 126 0 84 0 36 0 9 0 1
252 0 210 0 120 0 45 0 10 0 1
```

(note that the Pascal triangle is used to precompute nCr, so this approach is similar to a combinatorics solution)

For `k` steps:
- we can reach distance `k` in one way. This makes sense.
- we can reach distance `0` in `dp[k - 1][1] + dp[k - 1][1]` ways. This is because we can approach zero from left and right (their ways are mirrored).
- for distance `i`, we can reach it in `dp[k - 1][i + 1] + dp[k - 1][i - 1]` ways.

**C++**
```cpp
int dp[1001][1001] = {}, mod = 1000000007;
class Solution {
public:
int numberOfWays(int startPos, int endPos, int k) {
    if (dp[1][1] == 0)
        for (int k = 1; k <= 1000; ++k) {
            dp[k][k] = 1;
            for (int i = 0; i < k; ++i)
                dp[k][i] = (dp[k - 1][abs(i - 1)] + dp[k - 1][i + 1]) % mod;
        }
    return dp[k][abs(startPos - endPos)];
}
};
```