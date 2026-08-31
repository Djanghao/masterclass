# C# Solution for Partition Array for Maximum Sum Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4669518/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4669518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The optimized solution aims to avoid redundant calculations by efficiently updating the dynamic programming array. It focuses on calculating the maximum sum at each index based on the previously computed values.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialize a \u2018dp\u2019 array of size \u2018n + 1\u2019 to store the maximum sum up to each index.
2.	Iterate through the array, and for each index, calculate the maximum sum by considering the previous computed values.
3.	Update \u2018dp\u2019 array at each index with the maximum sum obtained.
4.	The final result is stored in \u2018dp[n]\u2019, where \u2018n\u2019 is the length of the array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n * k), where \u2018n\u2019 is the length of the array and \u2018k\u2019 is the given partition size. The nested loops iterate through each element in the array and consider up to \u2018k\u2019 partition sizes.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) as we use an additional array \u2018dp\u2019 of length \u2018n + 1\u2019 to store the maximum sum up to each index. This space optimization avoids the need for boundary checks in the loop. Overall, this approach efficiently computes the maximum sum after partitioning the array, addressing the constraints specified in the problem.

# Code
```
public class Solution {
    public int MaxSumAfterPartitioning(int[] arr, int k) {
        int n = arr.Length;
        int[] dp = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            int maxVal = 0;
            for (int j = 1; j <= k && i - j >= 0; j++) {
                maxVal = Math.Max(maxVal, arr[i - j]);
                dp[i] = Math.Max(dp[i], dp[i - j] + maxVal * j);
            }
        }

        return dp[n];
    }
}
```