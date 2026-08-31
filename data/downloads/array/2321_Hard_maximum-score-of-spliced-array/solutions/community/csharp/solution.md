# C# | Runtime beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5809853/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5809853/)

---

# Intuition
I have two arrays, and I want to maximize the sum of one of them. I can swap a subarray between the two, so I need to figure out which subarray to swap to get the biggest score. To do that, I\u2019ll calculate how much I can "gain" by swapping parts of one array with the other.


# Approach


First, I calculate the total sums of both arrays.


Then, I use a technique similar to Kadane\u2019s algorithm to find the best subarray swap. I calculate the maximum gain I can get by swapping a part of one array into the other.


Finally, I return the higher possible score: either keeping the original arrays or applying the best swap.

# Complexity
- Time complexity:
O(n) because I go through the arrays a few times (once for the sum and once for the maximum gain).

- Space complexity:
O(1) since I only use a few extra variables to track the sums and gains.

# Code
```csharp []
public class Solution {
    public int MaximumsSplicedArray(int[] nums1, int[] nums2) {
        int n = nums1.Length;

        // Calculate the initial sums of both arrays
        int sum1 = nums1.Sum();
        int sum2 = nums2.Sum();

        // Find max possible gain from swapping a subarray from nums2 to nums1
        int maxGain1 = MaxSubarrayDifference(nums2, nums1);

        // Find max possible gain from swapping a subarray from nums1 to nums2
        int maxGain2 = MaxSubarrayDifference(nums1, nums2);

        // The final result is the maximum score possible after optimal swap
        return Math.Max(sum1 + maxGain1, sum2 + maxGain2);
    }

    // Function to calculate the maximum subarray sum difference: nums1[i] - nums2[i]
    private int MaxSubarrayDifference(int[] nums1, int[] nums2) {
        int n = nums1.Length;
        int maxGain = 0;
        int currentGain = 0;

        for (int i = 0; i < n; i++) {
            // Calculate the difference at index i
            int diff = nums1[i] - nums2[i];

            // Use Kadane's Algorithm to find the max subarray sum of differences
            currentGain = Math.Max(diff, currentGain + diff);
            maxGain = Math.Max(maxGain, currentGain);
        }

        return maxGain;
    }
}

```