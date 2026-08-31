# Simplest O(1) solution | C#

**Author:** Baymax_
**Votes:** 8
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3624462/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3624462/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
***Since we need to return any element that is neither a minimum nor a maximum and that the given list is of distinct numers, all we need is to find such element among the first 3 numbers in the array***

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1) - as we only look into the first 3 elements regardless of the size of the array

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - as we use constant memory

## Please upvote if you like the approach

# Code
```
public class Solution {
    public int FindNonMinOrMax(int[] nums) {
        if (nums.Length <= 2)
            return -1;
        
        int min = Math.Min(nums[0], nums[1]);
        int max = Math.Max(nums[0], nums[1]);

        if (nums[2] > min && nums[2] < max)
            return nums[2];
        else if (nums[2] < min)
            return min;
        else
            return max;
    }
}
```

## Please upvote if you like the approach