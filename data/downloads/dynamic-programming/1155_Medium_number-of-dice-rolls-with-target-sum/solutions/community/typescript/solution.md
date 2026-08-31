# Typescript top down and bottom up DP with explanation

**Author:** tmythicator
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4460350/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4460350/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
This solution provides two approaches to solve the problem: top-down and bottom-up.
See comments in code for in-place explanation
# Complexity
- Time complexity: $$O(N*T*K)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(N*T)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numRollsToTarget(n: number, k: number, target: number): number {
    return dpBottomUp(n, k, target);
};

const dpTopDown = (n: number, k: number, target: number): number => {
    const MODULO = 10 ** 9 + 7;
    const memo = Array.from({ length: n + 1 }, () => Array.from({ length: target + 1 }, () => -1));

    const dp = (throws: number, sum: number): number => {
        // Base cases
        if (throws === n || sum > target) { return 0 }
        const leftTillTarget = target - sum;
        // If the last throw has a dice index lesser than remains till target -> accept this path
        if (throws === n - 1 && leftTillTarget <= k && leftTillTarget >= 1) { return 1 }
        if (memo[throws][sum] !== -1) { return memo[throws][sum] }
        let count = 0;
        // Go through all pathes (dice indices) till the target is reached
        for (let i = 1; i <= k; i++) {
            count = (count + dp(throws + 1, sum + i)) % MODULO;
        }
        memo[throws][sum] = count;
        return count;
    };

    return dp(0, 0) % MODULO;
}

const dpBottomUp = (n: number, k: number, target: number): number => {
    const MODULO = 10 ** 9 + 7;

    // Here we fill the array with 0's, because we need to accumulate the values. 
    // Zeros are neutral (identity) elements in addition.
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: target + 1 }, () => 0));

    // Base case:
    // No throws left and we have reached the target
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            let count = 0;
            for (let d = 1; d <= k; d++) {
                // Array accessor check
                if (j - d >= 0) {
                    // dp[i - 1][j - d] is the state of previous throw. 
                    // If this state could be reached up all the way from the base case,
                    // it will contain the number of pathes to reach that value
                    // Otherwise it will contain zero.
                    count = (count + dp[i - 1][j - d]) % MODULO;
                }
            }
            dp[i][j] = count;
        }
    }
    return dp[n][target];
};
```