# C#

**Author:** Maxim_Kurbanov
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-watch/solutions/3491042/](https://leetcode.com/problems/binary-watch/solutions/3491042/)

---

# Code
```
public class Solution 
{
    public IList<string> ReadBinaryWatch(int turnedOn) 
    {
        var res = new List<string>();

        for (var minute = 0; minute < 60; minute++)
            for (var hour = 0; hour < 12; hour++)
                if (CountBits(minute) + CountBits(hour) == turnedOn)
                    res.Add($"{hour}:{minute:D2}");

        return res;

        int CountBits(int num)
        {
            var count = 0;
            while (num != 0)
            {
                num &= num - 1;
                count++;
            }
            return count;
        }
    }
}
```