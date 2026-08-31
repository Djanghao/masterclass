# Very easy solution

**Author:** mahmedAhmedAbdelfattah
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/5968358/](https://leetcode.com/problems/maximum-gap/solutions/5968358/)

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
    public int MaximumGap(int[] nums) {
        Array.Sort(nums);
        int ans=0;
        if(nums.Length<2)
        {
            return 0;
        }else
        {
            for(int i=0;i<nums.Length-1;i++)
            {
                if((nums[i+1]-nums[i])>ans)
                {
                    ans=nums[i+1]-nums[i];
                }
                

            }
        }
        return ans;
    }
}
```