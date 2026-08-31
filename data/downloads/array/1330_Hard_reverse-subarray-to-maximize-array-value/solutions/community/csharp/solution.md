# C# Greedy Optimization with Difference Calculations

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5569557/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5569557/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->The correct approach involves checking every potential subarray and calculating the gain from reversing it:

Calculate the maximum difference that reversing a subarray can introduce.
Calculate the maximum possible improvement when reversing any subarray.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initial Value Calculation: Calculate the sum of absolute differences between consecutive elements.
//  Calculating Gains for Borders: For subarrays that start from the beginning or end at the end of the 
//  array, calculate the potential gain by reversing these subarrays.
//  Calculating Gains for Internal Subarrays: Keep track of the maximum and minimum differences that 
//  could be introduced by reversing any internal subarray.
//  Combining Potential Gains: Combine the calculated gains to determine the maximum possible increase in 
//  the array's value.
//  Return the Maximum Value: Add the maximum gain to the initial value to get the result.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
___

# Code
```
public class Solution {
    public int MaxValueAfterReverse(int[] nums) {
        int n = nums.Length;
        int initialValue = 0;

        // Calculate the initial value of the array
        for (int i = 0; i < n - 1; i++) {
            initialValue += Math.Abs(nums[i] - nums[i + 1]);
        }

        int maxGain = 0;

        // Calculate potential gains by reversing subarrays at the borders
        for (int i = 1; i < n - 1; i++) {
            maxGain = Math.Max(maxGain, Math.Abs(nums[0] - nums[i + 1]) - Math.Abs(nums[i] - nums[i + 1]));
            maxGain = Math.Max(maxGain, Math.Abs(nums[n - 1] - nums[i - 1]) - Math.Abs(nums[i] - nums[i - 1]));
        }

        // Calculate potential gains by reversing internal subarrays
        int min2 = int.MaxValue, max2 = int.MinValue;
        for (int i = 1; i < n; i++) {
            int a = nums[i - 1], b = nums[i];
            min2 = Math.Min(min2, Math.Max(a, b));
            max2 = Math.Max(max2, Math.Min(a, b));
        }

        // Combine potential gains
        maxGain = Math.Max(maxGain, 2 * (max2 - min2));

        return initialValue + maxGain;
    }
}
```