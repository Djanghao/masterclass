# Simple C# solution with recursion

**Author:** dyfilatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/3040652/](https://leetcode.com/problems/maximum-vacation-days/solutions/3040652/)

---

# Intuition
Recursion with memoization.

# Complexity
- Time complexity: $$O(n^2*k)$$

- Space complexity: $$O(n*k)$$

# Code
```
public class Solution
{
    public int MaxVacationDays(int[][] flights, int[][] days)
    {
        var n = flights.Length;
        var k = days[0].Length;
        var mem = new Dictionary<(int, int), int>();

        return MaxVacationDaysHelper(0, 0, 0);

        int MaxVacationDaysHelper(int city, int week, int current)
        {
            if (week == k)
            {
                return current;
            }

            if (mem.ContainsKey((city, week)))
            {
                return mem[(city, week)];
            }

            var max = MaxVacationDaysHelper(city, week + 1, days[city][week]);
            for (var i = 0; i < n; i++)
            {
                if (flights[city][i] == 1)
                {
                    max = Math.Max(max, MaxVacationDaysHelper(i, week + 1, days[i][week]));
                }
            }

            current += max;
            mem.Add((city, week), current);

            return current;
        }
    }
}
```