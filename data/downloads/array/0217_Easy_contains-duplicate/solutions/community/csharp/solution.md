# FASTER THAN 97%, EASY TO READ, ONE LINER

**Author:** Kuba111
**Votes:** 45
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/1836662/](https://leetcode.com/problems/contains-duplicate/solutions/1836662/)

---

```
public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        return new HashSet<int>(nums).Count < nums.Length;  
    }
}
```