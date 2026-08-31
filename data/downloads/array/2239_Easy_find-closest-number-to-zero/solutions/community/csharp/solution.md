# C# track closest negative and positive O(n) | 102ms 96%

**Author:** Legon2k
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/3061835/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/3061835/)

---

# Code
```
public class Solution {
    public int FindClosestNumber(int[] nums) 
    {
        var closestPositive = int.MaxValue;    
        var closestNegative = int.MinValue;    

        foreach(var n in nums)
        {
            if(n >= 0)
                closestPositive = Math.Min(closestPositive, n);
            else
                closestNegative = Math.Max(closestNegative, n);
        }

        return -closestPositive >= closestNegative ? closestPositive : closestNegative;
    }
}
```