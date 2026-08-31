# ✅C# LINQ One line solution

**Author:** Maxim_Kurbanov
**Votes:** 16
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3502563/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3502563/)

---

# Code
```
public class Solution 
{
    public int[] TopKFrequent(int[] nums, int k) 
    {
        return nums.GroupBy(num => num)
        .OrderByDescending(num => num.Count())
        .Take(k)
        .Select(c => c.Key)
        .ToArray();
    }
}
```