# 1 line C# solution

**Author:** Dmitriy-Maksimov
**Votes:** 2
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/4013380/](https://leetcode.com/problems/day-of-the-year/solutions/4013380/)

---

# Approach
- Use `DateOnly` :) 


# Code
```
using System.Globalization;

public class Solution
{
    public int DayOfYear(string date)
    {
        return DateOnly.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture).DayOfYear;
    }
}
```