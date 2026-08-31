# 💥Runtime beats 100.00%, Memory beats 66.67% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-removal/solutions/5796530/](https://leetcode.com/problems/palindrome-removal/solutions/5796530/)

---

# Intuition
The problem is about finding the minimum number of moves to remove all elements from an array where each move can only remove a palindromic subarray. Think of it as trying to make the array empty by breaking it down into palindromic segments in the fewest number of steps.

# Approach
Dynamic Programming (DP): Use a table dp[i, j] where each entry represents the minimum moves to remove the subarray from i to j.

Base Case: Single element subarrays are removed in one move.

Recursive Case, for longer subarrays:
If the first and last elements match, check if removing the whole segment is efficient.
Otherwise, split the subarray and combine results from smaller segments.

# Complexity
- Time complexity:
O(n3), due to checking all subarray lengths and split points.

- Space complexity:
O(n2), for the DP table.

# Code
```csharp []
public class Solution
{
    public int MinimumMoves(int[] arr)
    {
        int n = arr.Length;
        var dp = new int[n, n];

        // Initialize DP table
        for (int len = 1; len <= n; len++) // Length of subarray
        {
            for (int i = 0; i <= n - len; i++) // Start index of subarray
            {
                int j = i + len - 1; // End index of subarray
                if (len == 1)
                    dp[i, j] = 1; // Single element case
                else
                {
                    dp[i, j] = len; // Initialize with worst case: removing each element individually
                    if (arr[i] == arr[j])
                    {
                        // If arr[i] == arr[j], consider removing the whole subarray as one move if possible
                        dp[i, j] = (i + 1 > j - 1) ? 1 : dp[i + 1, j - 1];
                    }
                    
                    // Split the array at different points and find the minimum moves
                    for (int k = i; k < j; k++)
                    {
                        dp[i, j] = Math.Min(dp[i, j], dp[i, k] + dp[k + 1, j]);
                    }
                }
            }
        }

        return dp[0, n - 1];
    }
}

```