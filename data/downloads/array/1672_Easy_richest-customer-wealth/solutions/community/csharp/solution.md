# C# one line solution

**Author:** Maxim_Kurbanov
**Votes:** 18
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/3289979/](https://leetcode.com/problems/richest-customer-wealth/solutions/3289979/)

---

# Code
```
public class Solution 
{
    public int MaximumWealth(int[][] accounts) 
    {
        return accounts.Select(account => account.Sum()).Max();
    }
}
```