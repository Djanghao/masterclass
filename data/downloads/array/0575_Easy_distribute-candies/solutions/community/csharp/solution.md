# C# one line

**Author:** Maxim_Kurbanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/3535787/](https://leetcode.com/problems/distribute-candies/solutions/3535787/)

---

# Code
```
public class Solution 
{
    public int DistributeCandies(int[] candyType) 
    {
        return Math.Min(candyType.ToHashSet().Count, candyType.Length / 2);
    }
}
```