# Solution in C# | DateTime.ParseExact()

**Author:** yeuhoahuuco
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/5655855/](https://leetcode.com/problems/count-days-spent-together/solutions/5655855/)

---

# Code
```
using System.Globalization;

public class Solution {
    public int CountDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {
        
        // 2023 is not a leap year
        DateTime x1 = DateTime.ParseExact("2023-" + arriveAlice, "yyyy-MM-dd", null, DateTimeStyles.None);
        DateTime x2 = DateTime.ParseExact("2023-" + leaveAlice, "yyyy-MM-dd", null, DateTimeStyles.None);
        DateTime y1 = DateTime.ParseExact("2023-" + arriveBob, "yyyy-MM-dd", null, DateTimeStyles.None);
        DateTime y2 = DateTime.ParseExact("2023-" + leaveBob, "yyyy-MM-dd", null, DateTimeStyles.None);

        if(y1 >= x1)
        {
            return Enumerable.Range(0, (int)(x2 - x1).TotalDays + 1)
                .Intersect(Enumerable.Range((int)(y1 - x1).TotalDays, (int)(y2 - y1).TotalDays + 1))
                .Count();
        }
        else
        {
            return Enumerable.Range(0, (int)(y2 - y1).TotalDays + 1)
                .Intersect(Enumerable.Range((int)(x1 - y1).TotalDays, (int)(x2 - x1).TotalDays + 1))
                .Count();
        }
    }
}
```