# Solution with only 1 extra list

**Author:** andriibakulin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4457666/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4457666/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
    public int MinimumSum(int[] nums)
    {
        var smallL = nums[0];
        var smallR = new int[nums.Length];

        // Prepare smallest values only for right side
        smallR[nums.Length-1] = nums[nums.Length-1];
        for (int i=nums.Length-2; i>=0; i--)
            smallR[i] = Math.Min(smallR[i+1], nums[i]);

        int result = Int32.MaxValue;
        for (int i=1; i<nums.Length-1; i++)
        {
            int vi = smallL, vj = nums[i], vk = smallR[i];

            if (vi < vj && vj > vk)
                result = Math.Min(result, vi+vj+vk);

            // Calc smallest value on left side in the loop
            smallL = Math.Min(smallL, nums[i]);
        }
        return result != Int32.MaxValue ? result : -1;
    }
}

```