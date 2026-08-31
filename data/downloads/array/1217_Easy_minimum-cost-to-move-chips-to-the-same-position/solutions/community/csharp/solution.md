# Two easy solutions with explanation, no branching, with and without LINQ

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1614779/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/1614779/)

---

For this problem, we don't care where exactly the coins are because hopping between the odd positions is free. Same for the even ones. That means we need to count the even numbers, count the odd numbers and return the least count.

Now for counting: we can find out whether n is even with n % 2. However, the modulo division can be expensive. So we can just check the lowest bit of n using n & 1. There is no need to count the opposite numbers - instead we can just subtract our counter from the total length of the input. Not using if statements should make the loop more efficient (at least in low-level languages).

```csharp
public class Solution
{
    public int MinCostToMoveChips(int[] pos)
    {
        int res = 0;

        foreach (int p in pos)
        {
            res += p & 1;
        }

        return Math.Min(res, pos.Length - res);
    }
}
```

With LINQ:
```csharp
public class Solution
{
    public int MinCostToMoveChips(int[] pos)
    {
        int res = pos.Sum(x => x & 1);
        return Math.Min(res, pos.Length - res);
    }
}
```