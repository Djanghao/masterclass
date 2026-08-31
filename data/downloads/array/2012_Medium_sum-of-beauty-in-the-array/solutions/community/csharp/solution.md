# C# O(n)

**Author:** zloytvoy
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/3192770/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/3192770/)

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
public class Solution {
    public int SumOfBeauties(int[] nums) 
    {
        //   keep max from left    
        //   min from right 
        var maxFromLeft = nums[0];

        var n = nums.Length;
        var minFromRight = new int[n];
        minFromRight[n-1] = nums[n-1];
        for(int i = n-2; i >= 0; --i)
        {
            minFromRight[i] = Math.Min(minFromRight[i+1], nums[i]);
        }

        var result = 0;

        for(int i = 1; i <= nums.Length - 2; ++i)
        {
            if(nums[i-1] < nums[i] && nums[i] < nums[i+1])
            {
                ++result;

                if(maxFromLeft < nums[i] && nums[i] < minFromRight[i+1])
                {
                    ++result;
                }
            }
            
            maxFromLeft = Math.Max(maxFromLeft, nums[i]);
        }

        return result;
    }
}
```