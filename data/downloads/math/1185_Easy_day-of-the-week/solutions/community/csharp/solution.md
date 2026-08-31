# C# | Nice and simple | Beginner level

**Author:** temirkul_off
**Votes:** 1
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/2692680/](https://leetcode.com/problems/day-of-the-week/solutions/2692680/)

---

```
public class Solution {
    public string DayOfTheWeek(int day, int month, int year) {
        return new DateTime(year, 
                            month, 
                            day
                           ).DayOfWeek.ToString();
    }
}
```