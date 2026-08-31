# Simple C# solution

**Author:** Dmitriy-Maksimov
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4007738/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4007738/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
public class Solution
{
    public IList<bool> PrefixesDivBy5(int[] nums)
    {
        var result = new List<bool>();
        var num = 0;
        foreach (var n in nums)
        {
            num = (num * 2 + n) % 5;
            result.Add(num == 0);
        }

        return result;
    }
}
```