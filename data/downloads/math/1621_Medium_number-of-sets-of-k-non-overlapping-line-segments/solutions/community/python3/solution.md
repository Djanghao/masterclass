# [Java/Python] Top Down DP - Clean & Concise - O(4*n*k)

**Author:** hiepit
**Votes:** 87
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/901894/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/901894/)

---

**Python 3**
```python
class Solution:
    def numberOfSets(self, n: int, k: int) -> int:
        MOD = 10**9 + 7
        @lru_cache(None)
        def dp(i, k, isStart):
            if k == 0: return 1 # Found a way to draw k valid segments
            if i == n: return 0 # Reach end of points
            ans = dp(i+1, k, isStart) # Skip ith point
            if isStart:
                ans += dp(i+1, k, False) # Take ith point as start
            else:
                ans += dp(i, k-1, True) # Take ith point as end
            return ans % MOD
        return dp(0, k, True)
```

**Java**
```java
class Solution {
    Integer[][][] memo;
    int n;
    public int numberOfSets(int n, int k) {
        this.n = n;
        this.memo = new Integer[n+1][k+1][2];
        return dp(0, k, 1);
    }
    int dp(int i, int k, int isStart) {
        if (memo[i][k][isStart] != null) return memo[i][k][isStart];
        if (k == 0) return 1; // Found a way to draw k valid segments
        if (i == n) return 0; // Reach end of points

        int ans = dp(i+1, k, isStart); // Skip ith point
        if (isStart == 1)
            ans += dp(i+1, k, 0); // Take ith point as start
        else
            ans += dp(i, k-1, 1); // Take ith point as end

        return memo[i][k][isStart] = ans % 1_000_000_007;
    }
}
```

**Complexity:**
- Time: `O(4*n*k)`, there are total `2*n*k` state in `dp(i, k, isStart)` functions, inside function there are at most twice call of `dp` function.
- Space: `O(2*n*k)`

Feel free to ask your quetions. If this post is helpful, please help to give it a **vote**!.
Happy coding!