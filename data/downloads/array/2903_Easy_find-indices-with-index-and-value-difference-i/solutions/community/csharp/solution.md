# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5965499/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5965499/)

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
    public int[] FindIndices(int[] nums, int indexDifference, int valueDifference) {
        int[] a={-1,-1};int t=0;
        if(nums.Length==1 && indexDifference ==0 && valueDifference==0) 
        {
            a[0]=0;
            a[1]=0;
        }
        for(int i=0;i<nums.Length;i++)
        {
            for(int j=0;j<nums.Length;j++)
            {
                if(i!=j && Math.Abs(i-j)>=indexDifference && Math.Abs(nums[i]-nums[j])>=valueDifference)
                {
                    a[0]=i;
                    a[1]=j;
                    t=1;
                    break;
                }
            }
            if(t==1) break;
        }
        return a;
    }
}
```