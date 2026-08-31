# 💥Runtime beats 95.06% [EXPLAINED]

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/5696276/](https://leetcode.com/problems/burst-balloons/solutions/5696276/)

---

# Intuition
The intuition behind solving the "Burst Balloons" problem is to use dynamic programming to systematically determine the best order to burst balloons for maximum coins.

# Approach
This dynamic programming approach efficiently computes the maximum coins by systematically solving smaller subproblems and using those solutions to build up to the final answer.

# Complexity
- Time complexity:
O(n3), where n is the length of the nums array. This comes from the three nested loops used to fill the DP table.

- Space complexity:
O(n2) for the DP table.

# Code
```typescript []
function maxCoins(nums: number[]): number {
    const n = nums.length;
    const extendedNums = [1, ...nums, 1]; // Add 1 before and after nums array

    // Initialize the DP table
    const dp: number[][] = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

    // Fill the DP table
    for (let length = 1; length <= n; length++) {
        for (let left = 1; left <= n - length + 1; left++) {
            const right = left + length - 1;
            for (let i = left; i <= right; i++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][i - 1] + extendedNums[left - 1] * extendedNums[i] * extendedNums[right + 1] + dp[i + 1][right]
                );
            }
        }
    }

    return dp[1][n];
}

```