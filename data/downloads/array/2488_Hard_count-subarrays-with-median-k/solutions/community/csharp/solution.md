# O(n): Hash Map solution.

**Author:** thisNameIsOriginal
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3952662/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3952662/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For the number 'k' to be median, the number of elements greater than 'k' and less than 'k' should differ by either 0 or 1.

# Approach
<!-- Describe your approach to solving the problem. -->
Pick an index to the left of the number 'k', and check that to how many indexes on right of 'k' can be extend the subarray to. We will also need to include subarrays that remain entirely towards left and right of 'k'.

We need to maintain the balance between the numbers greater and less than 'k'. If we know that on the left the balance is 'x', then we can extend the subarray towards right to those indexes that give us the overall balance of 0 or 1. In other words, if the balance on the right is '-x' or '1-x', then the overall balance would be 0 or 1.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int CountSubarrays(int[] nums, int k) {
        Dictionary<int,int> record = new();
        int n = nums.Length;
        // Find position of 'k' in the array.
        int pos = Array.FindIndex(nums, (a) => a == k);
        // Balance measures the difference b/w the count of numbers greater than and less than 'k'. 
        // Balance should be either 0 or 1 for the subarray to be valid.
        int balance = 0;
        // Set count to 1 because an array with only the number 'k' is a valid subarray.
        int count = 1;
        // The loop makes a record of all the subarrays from 'pos' to 'i', and how far is 'k' from the median position.
        for(int i=pos+1;i<n;i++) {
            if (nums[i] < k) balance--;
            else balance++;
            // This records subarrays that only extend on the right of pos.
            if (balance == 0 || balance == 1) count++;
            if (!record.ContainsKey(balance)) record.Add(balance,0);
            record[balance]++;
        }
        

        balance = 0;
        // The loop tries to extend the subarray towards left, and checks in how many ways we can extend towards right
        // so that balance is either 0 or 1.
        for(int i=pos-1;i>=0;i--) {
            if (nums[i] < k) balance--;
            else balance++;
            // This records subarrays that only extend on the left of pos.
            if (balance == 0 || balance == 1) count++;
            // This records subarrays that only extend from left to right.
            count+= record.GetValueOrDefault(-balance) + record.GetValueOrDefault(1 - balance);
        }
        
        return count;
    }
}
```