# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/5802257/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/5802257/)

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
```csharp []
public class Solution {
    public int[] ApplyOperations(int[] nums) {
        int[] a=new int[nums.Length];
        int k=0;
        for(int i=0;i<nums.Length-1;i++)
        {
            if(nums[i]==nums[i+1])
            {
                nums[i]*=2;
                nums[i+1]=0;
            }
        }
        for(int i=0;i<nums.Length;i++)
        {
            if(nums[i]>0)
            {
                a[k++]=nums[i];
            }
        }
        while(k<nums.Length)
        {
            a[k++]=0;
        }
        return a;
    }
}
```