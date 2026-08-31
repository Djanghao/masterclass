# C#

**Author:** neildeng0705
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/2694948/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/2694948/)

---



# Code
```
public class Solution 
{
    public int LargestPerimeter(int[] nums) 
    {        
        if (nums.Length < 3)
        {
            return 0;
        }

        Array.Sort(nums);

        for(int i=nums.Length-1; i>=2; i--)
        {   
            if (nums[i-1] + nums[i-2] > nums[i])
            {
                return nums[i-1] + nums[i-2] + nums[i] ;
            }
        }

        return 0;
    }
}
```