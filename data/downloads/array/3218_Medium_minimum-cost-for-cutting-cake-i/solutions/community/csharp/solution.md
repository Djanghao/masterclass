# memory

**Author:** tangalai
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5476853/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5476853/)

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
    public int MinimumCost(int m, int n, int[] horizontalCut, int[] verticalCut) {
        var mapping = new Dictionary<string,int>();
        return Helper(0,0,m,n,horizontalCut,verticalCut,mapping );
    }

    private int Helper(int t_i,int t_j, int b_i,int b_j,int[] hc, int[] vc,  Dictionary<string,int> mapping)
    {
        if(b_i-t_i == 1 && b_j-t_j == 1)
            return 0;

        var key = $"{t_i},{t_j},{b_i},{b_j}";
        if(mapping.ContainsKey(key))
            return mapping[key];

        var result = int.MaxValue;
        
        for(var i = t_i+1;i< b_i;i++)
        {
            var r = Helper(t_i,t_j,i,b_j,hc,vc,mapping)
            + Helper(i,t_j,b_i,b_j,hc,vc,mapping) + hc[i-1];
            result = Math.Min(r,result);
        }

        for(var j = t_j+1;j<b_j;j++)
        {
            var r = Helper(t_i,t_j,b_i,j,hc,vc,mapping)
            + Helper(t_i,j,b_i,b_j,hc,vc,mapping) + vc[j-1];
            result = Math.Min(r,result);
        }

        mapping[key] =result;

        return result;
    }
}
```