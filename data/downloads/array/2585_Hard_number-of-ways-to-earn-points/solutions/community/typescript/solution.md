# Solution in TypeScript 🚀💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/5382304/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/5382304/)

---

# Intuition

This problem is essentially a variation of the "Knapsack Problem" where we need to determine the number of ways to achieve exactly a certain score using a given set of questions with specific marks and counts. This problem can be efficiently solved using Dynamic Programming (DP).

# Approach

1. **Dynamic Programming Array Initialization**:
   - We use a DP array `dp` where `dp[j]` represents the number of ways to achieve a score of `j`.
   - Initialize `dp[0]` to 1 because there is exactly one way to achieve a score of 0, which is by solving no questions.

2. **DP Transition**:
   - Iterate through each type of question.
   - For each type, update the DP array from back to front to avoid recomputing with the same type multiple times.
   - For each possible number of questions of the current type, update the DP array for the corresponding score.

3. **DP Update**:
   - For each possible score from `target` to the value of the marks of the questions, subtract the marks of the questions (multiplied by the count) from the current score and update the DP array accordingly.

# Complexity

- **Time Complexity**: ***O(n \xD7 target \xD7 max count)***, where `n` is the number of types of questions, `target` is the target score, and `max count` is the maximum count of questions for any type. This is because for each type, we might iterate over each possible score up to the target for each possible number of questions of that type.
- **Space Complexity**: ***O(target)*** for the DP array.

# Code

```typescript
function numOfWaysToReachTarget(target: number, types: number[][]): number {
    const MOD = 1_000_000_007;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (const [count, marks] of types) {
        for (let t = target; t >= 0; t--) {
            for (let c = 1; c <= count && c * marks <= t; c++) {
                dp[t] = (dp[t] + dp[t - c * marks]) % MOD;
            }
        }
    }

    return dp[target];
};

```

### Explanation of the Code

1. **Initialization**: The DP array `dp` is initialized to have `target + 1` elements, all set to 0 except `dp[0]` which is set to 1 because there is exactly one way to achieve a score of 0.
2. **DP Transition**: For each type of question, iterate from the back of the DP array to the front. This ensures that we do not reuse the results from the same iteration.
3. **DP Update**: For each possible number of questions of the current type that can be taken without exceeding the current score, update the DP array by adding the ways to achieve the previous score (before taking these questions).