# Sorting solution for C# (explanation + complexity)

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650844/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650844/)

---


# Approach
  \xA0 The partition will be minimized when the two consecutive elements in the source array have the minimum difference. This division will result in the first sub-array having the maximum value, and the following element will be the minimum of the next sub-array.
\xA0 To apply this approach, we need to sort the source array first and then successively check two elements to find the minimum difference.

# Complexity
- Time complexity: O(n * log(n))
- Space complexity: O(1)

# Code
```
public class Solution {
    public int MinPartitionValue(int[] nums)
    {
        System.Array.Sort(nums);

        var minValue = int.MaxValue;

        for (var i = 1; i < nums.Length; i++)
        {
            minValue = Math.Min(nums[i] - nums[i - 1], minValue);
        }

        return minValue;
    }
}
```