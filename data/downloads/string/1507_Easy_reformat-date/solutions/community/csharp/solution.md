# Simple & Clean Solution

**Author:** Anevil
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/5992471/](https://leetcode.com/problems/reformat-date/solutions/5992471/)

---

# Code
```csharp []
public class Solution {
    private readonly Dictionary<string, int> _months = new() { {"Jan", 1}, {"Feb", 2}, {"Mar", 3}, {"Apr", 4}, {"May", 5}, {"Jun", 6}, {"Jul", 7}, {"Aug", 8}, {"Sep", 9}, {"Oct", 10}, {"Nov", 11}, {"Dec", 12} };

    public string ReformatDate(string date)
    {
        var split = date.Split(" ");

        var dayString = GetDayString(split[0]);

        var month = _months[split[1]];
        var monthString = month < 10 ? $"0{month}" : month.ToString();

        var yearString = split[2];

        return $"{yearString}-{monthString}-{dayString}";
    }

    private static string GetDayString(string dayString)
    {
        if (dayString.Contains("st"))
        {
            dayString = dayString.Replace("st", "");
        }
        else if (dayString.Contains("nd"))
        {
            dayString = dayString.Replace("nd", "");
        }
        else if (dayString.Contains("rd"))
        {
            dayString = dayString.Replace("rd", "");
        }
        else if (dayString.Contains("th"))
        {
            dayString = dayString.Replace("th", "");
        }

        if (Convert.ToInt32(dayString) < 10)
        {
            dayString = $"0{dayString}";
        }

        return dayString;
    }
}
```