# C# Dynamic Programming with Precomputation Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/5661024/](https://leetcode.com/problems/allocate-mailboxes/solutions/5661024/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem of placing k mailboxes to minimize the total distance to the nearest mailbox, we can use dynamic programming (DP). The idea is to calculate the minimum total distance for each possible subarray of houses and then find the optimal way to distribute the mailboxes.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Sorting the Houses: The houses are sorted to simplify distance calculations, as the median of any 
//  segment minimizes the sum of absolute deviations.
//  Initialization of the 'dp' array: The dp array is initialized with int.MaxValue to represent an 
//  unachievable distance (effectively infinity), except for dp[0, 0] which is 0 because no distance is 
//  required when no houses are considered.
//  Precomputing Distances: The distance array stores the minimum total distance for placing a single 
//  mailbox between houses i and j. This is computed using the median of the segment [i, j].
//  Dynamic Programmign Table Filling: The DP table is filled by considering all possible placements of j 
//  mailboxes among the first i houses. We calculate the minimum distance by considering the best possible 
//  placement of the last mailbox.
//  Final Result: The value dp[n, k] holds the minimum total distance when placing k mailboxes to cover all 
//  n houses.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2 x k), where n is the number of houses
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2).
___

# Code
```csharp []
public class Solution {
    public int MinDistance(int[] houses, int k) {
        // Sort houses to simplify distance calculations
        Array.Sort(houses);
        int n = houses.Length;

        // dp[i, j] stores the minimum distance to place j mailboxes among the first i houses
        int[,] dp = new int[n + 1, k + 1];

        // Initialize the dp array with a large value representing infinity
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                dp[i, j] = int.MaxValue;
            }
        }

        // Base case: 0 houses with 0 mailboxes requires 0 distance
        dp[0, 0] = 0;

        // Precompute the distance cost for placing one mailbox between any two houses
        int[,] distance = new int[n, n];
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                // Median minimizes the sum of absolute deviations
                int median = houses[(i + j) / 2];
                for (int m = i; m <= j; m++) {
                    distance[i, j] += Math.Abs(houses[m] - median);
                }
            }
        }

        // Fill the dp table with the minimum distances
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                // Check all possible placements of the last mailbox
                for (int m = 0; m < i; m++) {
                    // Update dp[i, j] with the minimum distance found
                    if (dp[m, j - 1] != int.MaxValue) {
                        dp[i, j] = Math.Min(dp[i, j], dp[m, j - 1] + distance[m, i - 1]);
                    }
                }
            }
        }

        // The final answer is the minimum distance with all houses and k mailboxes
        return dp[n, k];
    }
}
```