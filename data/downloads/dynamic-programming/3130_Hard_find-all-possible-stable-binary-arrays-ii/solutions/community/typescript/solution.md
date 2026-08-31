# [TypeScript] 3 dimensional DP

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5081396/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5081396/)

---

# Complexity
- Time complexity: $$O(zero * one)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(zero * one * 2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfStableArrays(zero: number, one: number, limit: number): number {
    const MOD = (10 ** 9) + 7;
    
    const dp = new Array(zero + 1).fill(0).map(x => 
                new Array(one + 1).fill(0).map(y =>
                    new Array(2).fill(0)    
                )
            );
    
    for (let i = 0; i < zero + 1 && i <= limit; i++) {
        dp[i][0][0] = 1;
    }

    for (let i = 0; i < one + 1 && i <= limit; i++) {
        dp[0][i][1] = 1;
    }
    
    for (let i = 1; i < zero + 1; i++) {
        for (let j = 1; j < one + 1; j++) {
            dp[i][j][0] = (dp[i-1][j][0] + dp[i-1][j][1]) % MOD;
            dp[i][j][1] = (dp[i][j-1][0] + dp[i][j-1][1]) % MOD;

            if (i - limit - 1 >= 0) {
                dp[i][j][0] = (dp[i][j][0] + MOD - dp[i - limit - 1][j][1]) % MOD;
            }
            
            if (j - limit - 1 >= 0) {
                dp[i][j][1] = (dp[i][j][1] + MOD - dp[i][j - limit - 1][0]) % MOD;
            }
        }   
    }

    return (dp[zero][one][0] + dp[zero][one][1]) % MOD;
};
```