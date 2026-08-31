# Easy Solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/6032479/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/6032479/)

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
    public int FindMiddleIndex(int[] nums) {
        int left=0;int right=0;int i=0;
        while(i<=nums.Length-1)
        {
            left=0;right=0;
            for(int j=0;j<i;j++)
            {
                left+=nums[j];
            }
            for(int j=i+1;j<=nums.Length-1;j++)
            {
                right+=nums[j];
            }
            if(left==right) return i;
            if(left==0 && right==0) return i;
            i++;
        }
        return -1;
    }
}
```