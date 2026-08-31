# Simple!

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5090974/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5090974/)

---


# Code
```
public class Solution 
{
    public long SubsequenceSumOr(int[] nums) 
    {
        long result = 0;
        long mask = 0;

        foreach (var num in nums) 
        {
            result += num;
            mask |= result;
            mask |= num;
        }

        return result | mask;
    }
}
```