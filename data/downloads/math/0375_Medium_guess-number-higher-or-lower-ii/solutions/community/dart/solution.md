# Dart Solution (DP)

**Author:** gobindsingh6799
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5747332/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5747332/)

---

# Intuition
The problem is a variation of the guessing game, where the goal is to minimize the maximum cost required to win. My initial thought is to simulate guessing by choosing each number in the range and then calculating the worst-case scenario recursively for the remaining range. Since this problem has overlapping subproblems, it is a good candidate for dynamic programming (DP) with memoization.

# Approach
The approach uses a recursive function with memoization (DP) to minimize the cost of winning the guessing game:

1. **Recursive Subproblem**: For any range `[i, j]`, the strategy is to pick a number `k` within the range and calculate the cost of two subproblems: guessing in the range `[i, k-1]` and `[k+1, j]`. The cost of picking `k` is the value `k` itself plus the maximum cost of these two subranges, representing the worst-case scenario.
   
2. **Base Case**: If the range is invalid or there\u2019s only one number left (`i >= j`), the cost is 0 since no more guesses are needed.
   
3. **Memoization**: We store the result of every subproblem `[i, j]` in a DP table `dp` to avoid recalculating overlapping subproblems.

4. **Final Result**: The answer is the result of `helper(1, n)` after filling the DP table.

# Complexity
- **Time complexity**: 
  The time complexity is $$O(n^3)$$. For each subproblem `[i, j]`, we try all possible values of `k` (from `i` to `j`), leading to $$O(n)$$ computations for each of the $$O(n^2)$$ subproblems.

- **Space complexity**: 
  The space complexity is $$O(n^2)$$ due to the DP table `dp` that stores the computed costs for all subproblems.

# Code
```dart
import 'dart:math';

class Solution {
  int getMoneyAmount(int n) {
    // Helper function using recursion with memoization
    int helper(int i, int j, List<List<int>> dp) {
      if (i >= j) return 0; // Base case: if the range is invalid or has one element
      if (dp[i][j] != 0) return dp[i][j]; // Return memoized result

      int minCost = double.maxFinite.toInt(); // Set a large initial value for minCost

      // Try every possible guess k from i to j
      for (int k = i; k <= j; k++) {
        // The cost is the current guess k plus the maximum of the two ranges [i, k-1] and [k+1, j]
        int cost = k + max(helper(i, k - 1, dp), helper(k + 1, j, dp));
        minCost = min(minCost, cost); // Take the minimum cost
      }

      dp[i][j] = minCost; // Memoize the result
      return minCost;
    }

    // DP table to store computed values
    List<List<int>> dp = List.generate(n + 1, (_) => List.filled(n + 1, 0));

    return helper(1, n, dp);
  }
}
