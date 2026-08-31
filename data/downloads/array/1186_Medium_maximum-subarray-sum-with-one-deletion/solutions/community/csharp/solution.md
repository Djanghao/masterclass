# C# Dynamic Programming solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5518394/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5518394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we need to implement an algorithm that finds the maximum sum of a subarray with at most one deletion. This requires keeping track of the maximum sums in different scenarios, including:

The maximum subarray sum without any deletions.
The maximum subarray sum with exactly one deletion.
We can solve this using dynamic programming. We'll maintain two arrays:

dpNoDeletion[i] which represents the maximum subarray sum ending at index i without any deletions.
dpOneDeletion[i] which represents the maximum subarray sum ending at index i with at most one deletion.
The transition for these arrays will be as follows:

dpNoDeletion[i] can either extend the previous subarray or start a new subarray at index i.
dpOneDeletion[i] can either extend the previous subarray with one deletion or consider the current element as deleted and take the maximum sum up to the previous element without any deletion.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization:
//  *'dpNoDeletion[0]' is correctly initialized to 'arr[0]' because a single element subarray is the 
//  maximum sum without any deletion..
//  *'dpOneDeletion[0]' is initialized to 0 since we cannot delete the only element in a single-element 
//  array scenario.
//  Dynamic Programming Transition:
//  *dpNoDeletion[i]' remains the maximum sum of subarray ending at 'i' without any deletions.
//  *'dpOneDeletion[i]' is recalculated to handle the case properly:
//  **By considering deleting the current element '(dpNoDeletion[i - 1])'.
//  **Or by extending the previous subarray which already has one deletion 
//  '(dpOneDeletion[i - 1] + arr [i])'.
//  Result:
//  *The overall maximum sum is the maximum value among all possible subarrays with or without deletion 
//  found during the iteration.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where n is the length of the input array.
____

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n), as we are using two arrays, 'dpNoDeletion' and 'dpOneDeletion', each of size n.
___

# Code
```
public class Solution {
    public int MaximumSum(int[] arr) {
        int n = arr.Length;
        
        // Edge case: If the array length is 1, return the only element.
        if (n == 1) return arr[0];
        
        // Arrays to store the maximum sums
        int[] dpNoDeletion = new int[n];
        int[] dpOneDeletion = new int[n];
        
        // Initialize the arrays
        dpNoDeletion[0] = arr[0];
        dpOneDeletion[0] = 0; // Cannot delete the only element to start with
        
        int maxSum = arr[0];
        
        for (int i = 1; i < n; i++) {
            // Maximum sum ending at index i without deletion
            dpNoDeletion[i] = Math.Max(dpNoDeletion[i - 1] + arr[i], arr[i]);
            // Maximum sum ending at index i with one deletion
            dpOneDeletion[i] = Math.Max(dpNoDeletion[i - 1], dpOneDeletion[i - 1] + arr[i]);
            // Update the overall maximum sum
            maxSum = Math.Max(maxSum, Math.Max(dpNoDeletion[i], dpOneDeletion[i]));
        }
        
        return maxSum;
    }
}

```