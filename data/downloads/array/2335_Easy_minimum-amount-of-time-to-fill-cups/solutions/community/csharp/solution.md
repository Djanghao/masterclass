# O(1) Complexity

**Author:** diegomc252525
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5980529/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5980529/)

---

# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)
# Code
```csharp []
public class Solution {
    public int FillCups(int[] amount)
    {
        Array.Sort(amount);
        if (amount[0] + amount[1] >= amount[2])
            return (amount.Sum() + 1) / 2;
        return amount[2];
    }
}
```