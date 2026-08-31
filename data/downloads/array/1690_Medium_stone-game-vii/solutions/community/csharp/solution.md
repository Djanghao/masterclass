# C# Dynamic Programming Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/5708677/](https://leetcode.com/problems/stone-game-vii/solutions/5708677/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of maximizing the score difference between Alice and Bob, we can use a dynamic programming approach. The idea is to calculate the maximum possible score difference Alice can achieve by taking the optimal moves.
___

# Approach
<!-- Describe your approach to solving the problem. -->
//  Prefix Sum Calculation: We calculate the prefix sum to easily get the sum of any subarray stones[i...j].
//  DP Array Filling: We iterate over all possible subarray lengths and use the transition formula to 
//  compute the maximum difference for each subarray.
//  Optimal Moves: We consider both possible moves Alice can make and take the maximum to ensure optimal 
//  play.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2).
We use a double loop to fill the DP table, where the outer loop runs for the length of the subarrays (from 2 to n), and the inner loop runs through all possible subarrays of that length, leading to a quadratic time complexity.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2).
We use a 2D DP table dp[i][j] of size n x n to store the results of subproblems. Additionally, we use a prefix sum array of size n+1, which contributes to the space but is dominated by the DP table.
___

# Code
```csharp []
public class Solution {
    public int StoneGameVII(int[] stones) {
        int n = stones.Length;
        int[,] dp = new int[n, n];
        int[] prefixSum = new int[n + 1];

        // Calculate the prefix sum for the stones
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + stones[i];
        }

        // Bottom-up DP to fill the dp array
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                int removeLeft = (prefixSum[j + 1] - prefixSum[i + 1]) - dp[i + 1, j];
                int removeRight = (prefixSum[j] - prefixSum[i]) - dp[i, j - 1];
                dp[i, j] = Math.Max(removeLeft, removeRight);
            }
        }

        return dp[0, n - 1];
    }
}
```