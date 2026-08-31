# C# Prefix-Sum with HashSet Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5669762/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5669762/)

---

# Approach
<!-- Describe your approach to solving the problem. -->//  Prefix Sum Concept:
//  *We use a prefix sum approach where we maintain the cumulative sum of elements as we iterate through the
//  array.
//  *If at any point, the difference between the current cumulative sum (sum) and some previous cumulative 
//  sum equals the target, it means there is a subarray that sums to target.
//  Using a HashSet:
//  *We maintain a HashSet<int> called prefixSums that stores all the prefix sums encountered so far.
//  *If we find a prefix sum such that sum - target exists in the set, we found a subarray that sums to 
//  target. We then reset the tracking by clearing the prefixSums set and restart the search from the next 
//  element to ensure non-overlapping subarrays.
//  Count of Non-Overlapping Subarrays:
//  *Each time we find such a subarray, we increment the count. After finding a valid subarray, we clear the
//  prefixSums set and reset the sum to zero to ensure that the next subarray we find doesn\u2019t overlap with 
//  the previous one.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the array.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```csharp []
public class Solution {
    public int MaxNonOverlapping(int[] nums, int target) {
        HashSet<int> prefixSums = new HashSet<int>();
        prefixSums.Add(0);
        int sum = 0;
        int count = 0;

        foreach (int num in nums) {
            sum += num;
            if (prefixSums.Contains(sum - target)) {
                count++;
                prefixSums.Clear();
                sum = 0;
                prefixSums.Add(0);
            } else {
                prefixSums.Add(sum);
            }
        }

        return count;
    }
}
```