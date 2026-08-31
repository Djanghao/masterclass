# c# solution

**Author:** nagpal22
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/5583100/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/5583100/)

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
    public int CountWays(int[][] ranges) {

        if (ranges.Count() == 1) return 2;

        Array.Sort(ranges, (a,b) => a[0].CompareTo(b[0]));
        var n = 1;
        var end = ranges[0][1];
        foreach(var r in ranges)
        {
            if(r[0] <= end)  //no overlap
            {
                end = Math.Max(end, r[1]);
            }
            else
            {
                n++;
                end = r[1];
            }
        }
        var mod = 1000000007;
        var ways =  BigInteger.ModPow(2, n,mod) ;

        return (int)ways;

    }
}
```