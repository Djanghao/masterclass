# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5941013/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5941013/)

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
    public int MinOperations(int[] nums) {
        int r=0;
        int n=nums.Length;
        for(int i=n-2;i>=0;i--)
        {
            if(nums[i]<=nums[i+1])
            {
                continue;
            }
            nums[i]=t(nums[i]);
            r++;
            if(nums[i]>nums[i+1])
            {
                return -1;
            }
        }
        return r;
    }
    public int t(int x)
    {
        for(int i=2;i<=Math.Sqrt(x);i++)
        {
            if(x%i==0)
            {
                return i;
            }
        }
        return x;
    }
}
```