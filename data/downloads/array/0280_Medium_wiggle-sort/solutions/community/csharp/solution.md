# C# one pass

**Author:** zloytvoy
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/3159262/](https://leetcode.com/problems/wiggle-sort/solutions/3159262/)

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
    public void WiggleSort(int[] nums) 
    {
        Helper(nums, 1);
    }

    public void Helper(int[] nums, int index)
    {
        if(index < nums.Length)
        {
            if(index % 2 == 0)
            {
                if(nums[index - 1] <= nums[index])
                {
                    Swap(nums, index - 1, index);
                }
            }
            else
            {
                if(nums[index - 1] >= nums[index])
                {
                    Swap(nums, index - 1, index);
                }
            }

            Helper(nums, index + 1);
        }
    }

    public void Swap(int[] nums, int i, int j)
    {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;    
    }
    
}
```