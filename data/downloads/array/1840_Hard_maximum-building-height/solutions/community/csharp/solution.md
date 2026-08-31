# C# Solution

**Author:** m67186636
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-building-height/solutions/3141064/](https://leetcode.com/problems/maximum-building-height/solutions/3141064/)

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
    public int MaxBuilding(int n, int[][] restrictions) {
        
            if (restrictions.Length == 0) 
                return n - 1;
            Array.Sort(restrictions, (a, b) => a[0] - b[0]);
            for (int i = restrictions.Length-1; i >0; i--)
                restrictions[i - 1][1] = Math.Min(restrictions[i - 1][1], restrictions[i][1] + restrictions[i][0] - restrictions[i - 1][0]);
            var result = 0;
            void Calc(int[] start,int[] end)
            {
                if (end[1] > start[1] + end[0] - start[0])
                    result=Math.Max(result,end[1] = start[1] + end[0] - start[0]);
                else
                    result = Math.Max(result,(start[1] + end[0] - start[0] + end[1]) / 2);
            }
            var current = new int[] { 1,0};
            foreach ( var restriction in restrictions)
                Calc(current, current = restriction);
            Calc(current, new[] { n, n - 1 });
            return result;
    }
}
```