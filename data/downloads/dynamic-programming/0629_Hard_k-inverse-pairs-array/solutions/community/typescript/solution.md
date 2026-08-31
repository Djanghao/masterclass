# Typescript solution that beats 100%

**Author:** daniilboyarinkov
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632056/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632056/)

---

# Intuition
The problem is asking for the number of different arrays of length `n` that have exactly `k` inverse pairs. We can solve this problem by using dynamic programming, where we systematically consider all possible ways to form arrays with a given number of inverse pairs.

# Approach
We initialize a two-dimensional array `dp` of size `(n+1) x (k+1)`, where `dp[i][j]` represents the number of different arrays of length `i` that have exactly `j` inverse pairs. We then fill up this `dp` table by considering each number from 1 to `n` and each possible number of inverse pairs from 0 to `k`. For each `i` and `j`, `dp[i][j]` is computed as the sum of `dp[i-1][j]` and `dp[i][j-1]`, and if `j >= i`, we subtract `dp[i-1][j-i]` from `dp[i][j]`. All computations are done modulo $$10^9 + 7$$ to handle large numbers.

# Complexity
- Time complexity: The time complexity is $$O(n \	imes k)$$ because we need to fill up a `dp` table of size `(n+1) x (k+1)`.
- Space complexity: The space complexity is also $$O(n \	imes k)$$ due to the space required for the `dp` table.

# Code
```typescript
const MOD = 10 ** 9 + 7;

function kInversePairs(n: number, k: number): number {
    const MOD = Math.pow(10, 9) + 7;

    const dp = new Array(n+1).fill(0).map(() => new Array(k+1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= k; j++) {
            dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % MOD;
            if (j >= i) {
                dp[i][j] = (dp[i][j] - dp[i-1][j-i] + MOD) % MOD;
            }
        }
    }

    return dp[n][k];
};
```

> Please, upvote if that helps

![image.png](./images/0.png)
