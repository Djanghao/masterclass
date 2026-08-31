# Simple java solution

**Author:** Siddhant_1602
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4708798/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4708798/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int countMatchingSubarrays(int[] nums, int[] pattern) {
        int len=pattern.length+1,ans=0;
        for(int i=0;i<=nums.length-len;i++)
        {
            boolean flag=true;
            for(int j=i,k=0;j<i+len-1;j++,k++)
            {
                if(pattern[k]==1 && (nums[j]>=nums[j+1]))
                {
                    flag=false;
                }
                else if(pattern[k]==-1 && (nums[j]<=nums[j+1]))
                {
                    flag=false;
                }
                else if(pattern[k]==0 && (nums[j]>nums[j+1] || nums[j]<nums[j+1]))
                {
                    flag=false;
                }
            }
            if(flag)
            {
                ans++;
            }
        }
        return ans;
    }
}
```