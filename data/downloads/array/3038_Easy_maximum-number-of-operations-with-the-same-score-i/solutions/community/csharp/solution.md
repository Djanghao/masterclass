# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5864154/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5864154/)

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
    public int MaxOperations(int[] nums) {
        int prev=0;
        int val=0;int count=0;
        if(nums.Length>=2)
        {
        prev=nums[0]+nums[1];
        count++;
        }
        for(int i=2;i<nums.Length;i+=2)
        {
            if(i+1<nums.Length && (nums[i]+nums[i+1])==prev)
            {
                count++;
            }
            else
            {
                break;
            }
        }
        return count;
    }
}
```