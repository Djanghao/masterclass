# Best solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5905138/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5905138/)

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
    public int[] MinBitwiseArray(IList<int> nums) {
        List<int> a=new List<int>();
        for(int i=0;i<nums.Count;i++)
        {
            int t=nums[i];int d=1;
            if(t>4096)
            {d=t-4096;}
            int f=0;
            for(int j=d;j<t;j++)
            {
                int l=j;
                int h=j+1;
                int res=l | h;
                if(res==nums[i])
                {
                    f=1;
                    a.Add(l);
                    break;
                }
            }
            if(f==0) a.Add(-1);
        }
        return a.ToArray();
    }
}
```