# Linear approach. Little bit of tricks via Span<T>.

**Author:** user8734RD
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3353129/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3353129/)

---

# Approach
Instead of recursive approach, i've decided to iterate days in reverse order. If we have to buy a ticket (checked with lookup via Binary Search) we buy the cheapest ticket that would cover up most next days. Otherwise just skip it and say that this day costs like  ticket for next day.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
using System.Runtime.CompilerServices;

public class Solution {
    public int MincostTickets(int[] days, int[] costs)
    {
        Span<int> totals = stackalloc int[days[^1]];

        for (var i = totals.Length - 1; i >= 0; i--)
        {
            if (Array.BinarySearch(days, i + 1) < 0)
            {
                totals[i] = Lookup(i + 1, totals);
                continue;
            }

            totals[i] = Min(
                costs[0] + Lookup(i + 1, totals),
                costs[1] + Lookup(i + 7, totals),
                costs[2] + Lookup(i + 30, totals));
        }

        return totals[0];
    }
    
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    private static int Lookup(int dayIndex, Span<int> memo)
    {
        return dayIndex >= memo.Length ? 0 : memo[dayIndex];
    }

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    private static int Min(int a, int b, int c) =>
        Math.Min(a, Math.Min(b, c));
}
```