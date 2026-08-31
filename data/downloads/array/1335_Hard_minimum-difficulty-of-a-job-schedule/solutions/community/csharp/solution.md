# C# Solution for Minimum Difficulty of a Job Schedule Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472589/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472589/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The rolling array or sliding window technique optimizes space by storing only the necessary values required for calculations. It aims to compute the minimum difficulty of a job schedule considering the constraints given: completing at least one task every day and finding the minimum difficulty over d days.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	Utilizes a 1D array dp to store intermediate results where dp[i] represents the minimum difficulty to schedule jobs starting from index i to the end within d days.
\u2022	Iterates through days day from 1 to d and jobs i from 0 to n - day.
\u2022	Within the loop, a variable maxDifficulty is used to keep track of the maximum difficulty encountered.
\u2022	Computes the minimum difficulty for each day by considering different partitions of jobs and updating the dp array accordingly.
\u2022	Finally, returns dp[0], which represents the minimum difficulty of scheduling all jobs in d days.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The time complexity of this optimized solution is O(d * n^2), where d is the number of days and n is the number of jobs.
\u2022	The outer loop runs for d days, and the inner loops iterate through jobs. Within the nested loops, there\u2019s another loop that checks different partitions, resulting in a quadratic time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is O(n) because only a 1D array dp of size n + 1 is used to store intermediate results.
\u2022	It significantly reduces space compared to the previous DP approach that utilized a 2D array, making it more memory-efficient while still solving the problem optimally.

# Code
```
public class Solution {
    public int MinDifficulty(int[] jobDifficulty, int d) {
        int n = jobDifficulty.Length;
        if (n < d) return -1;

        int[] dp = new int[n + 1];
        Array.Fill(dp, int.MaxValue / 2);
        dp[n] = 0;

        for (int day = 1; day <= d; day++) {
            for (int i = 0; i <= n - day; i++) {
                int maxDifficulty = 0;
                dp[i] = int.MaxValue / 2;
                
                for (int j = i; j <= n - day; j++) {
                    maxDifficulty = Math.Max(maxDifficulty, jobDifficulty[j]);
                    dp[i] = Math.Min(dp[i], maxDifficulty + dp[j + 1]);
                }
            }
        }

        return dp[0];
    }
}
```