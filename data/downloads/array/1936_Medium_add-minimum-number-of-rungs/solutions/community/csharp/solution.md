# Easy solution with O(n) time complexity

**Author:** prashant_PD
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5848842/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5848842/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int AddRungs(int[] rungs, int dist) {
        int minRungs=0;//denotes the min rungs required;
        double reqCurrentRungs;//denotes required rungs for current iteration in array;
        int prev=0,curr;
        for(int i=0;i<rungs.Length;i++)
        {
            curr=rungs[i];
            reqCurrentRungs=(curr-prev)/(double)dist;
            minRungs=reqCurrentRungs<=1.0?minRungs:minRungs+(int)Math.Ceiling(reqCurrentRungs)-1;
            prev=curr;
        }
        return minRungs;
    }
}
```