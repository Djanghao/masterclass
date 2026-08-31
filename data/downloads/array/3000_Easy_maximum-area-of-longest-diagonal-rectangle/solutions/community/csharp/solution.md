# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5726113/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5726113/)

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
    public int AreaOfMaxDiagonal(int[][] dimensions) {
        int n=dimensions.Length;
        double max=0; int maxb=0;
        for(int i=0;i<n;i++)
        {
            int l=dimensions[i][0];
            int b=dimensions[i][1];
            double sq=Math.Sqrt((l*l)+(b*b));
            Console.WriteLine(sq);
            int a=l*b;
            if(max<sq )
            {
                max=sq;
                maxb=a;}
            if(max==sq)
                {
                max=sq;
                maxb=Math.Max(a,maxb);
                }
        }
        return maxb;

    }
}
```