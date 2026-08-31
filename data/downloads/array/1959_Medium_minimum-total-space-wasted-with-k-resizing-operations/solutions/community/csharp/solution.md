# Using Memoization

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5620381/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5620381/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Approach
Recursive Function: Define a recursive function MinWaste(i, k) that returns the minimum space wasted for the subarray starting from index i with k resizes left.

Base Case:

If i is the last index of the array, there is no space wasted.
If k is 0, the array can no longer be resized, so we calculate the wasted space for the entire remaining subarray.
Recursive Case:

For each index j from i to the end of the array, compute the maximum element in the current segment nums[i...j].
Calculate the wasted space if the array size is set to this maximum.
Recur for the subarray starting from j + 1 with k - 1 resizes left.
Memoization: Use a dictionary to store results of subproblems to avoid recomputation.
# Complexity
Time Complexity: The time complexity is approximately O(n\xB2 * k), where n is the length of the array and k is the number of resizing operations allowed. This is because for each starting index i, we may have to consider all possible ending indices j, and there are k resizing operations to consider.

Space Complexity: O(n * k) for the memoization table.

# Code
```
public class Solution {
    public int MinSpaceWastedKResizing(int[] nums, int k) {
        int min = Int32.MaxValue;
        int n = nums.Length;
        int[,] dp = new int[n+1,k+1];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= k; j++) {
                dp[i, j] = -2;
            }
        }
        return Resize(nums, 0, k, dp);
    }

    private int Resize(int[] nums, int i, int k, int[,] dp)
    {
        if (i == nums.Length)
        {
            return 0;
        }
        if (k < 0)
        {
            return -1;
        }
        if (dp[i,k] != -2)
        {
            return dp[i,k];
        }
        int max = 0;
        int total = 0;
        int minExtra = Int32.MaxValue;
        for(int j=i; j<nums.Length; j++)
        {
            max = Math.Max(max, nums[j]);
            total += nums[j];
            int extra = (j-i+1)*max - total;
            int v = Resize(nums, j+1, k-1, dp);
            if (v != -1)
            {
                minExtra = Math.Min(minExtra, v+extra);
            }
        }
        if (minExtra != Int32.MaxValue)
        {
            dp[i,k] = minExtra;
            return minExtra;
        }
        dp[i,k] = -1;
        return -1;
    }
}
```