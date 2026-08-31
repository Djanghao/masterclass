# Using C# SortedSet

**Author:** dungtranm65
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/5830294/](https://leetcode.com/problems/design-log-storage-system/solutions/5830294/)

---

# Intuition
- Timestamp strings can be sorted

# Approach
- Using SortedSet which provide GetViewBetween method to query all elements in range
- Deal with granularity: need to set start to the earliest moment, and end to the latest moment. Example: 
   - granularity is Month, then the start timestamp need to set Day:Hour:Minute:Second to "01:00:00:00" (first day of the month)
   - end timestamp need to set to last day of the month (here needs to check by given year and month can be either of 28, 29, 30 or 31) 

# Complexity
- Time complexity: O(nlogn) 
   - SortedSet uses binary balanced tree, so addition takes O(logn). We add all n timestamp entries, total is O(nlogn) 

- Space complexity: O(n)

# Code
```csharp []
public class LogSystem {

    SortedSet<(int id, string tmps)> set;

    public LogSystem() {
        var timeComparer = Comparer<(int id, string tmps)>.Create (
            (a, b) => a.tmps.CompareTo(b.tmps) );
            
        set = new(timeComparer);
    }
    
    public void Put(int id, string timestamp) {
        set.Add((id, timestamp));
    }
    
    public IList<int> Retrieve(string start, string end, string granularity) {
        (start, end) = TimeRange (start, end, granularity);
        var range = set.GetViewBetween ((0, start), (0, end));
        return range.Select(t => t.id).ToList();
    }

    private (string, string) TimeRange (string start, string end, string granularity) {
        // Set start to be earliest moment in range
        // Set end to be latest moment in range

        int year = int.Parse(end.Substring(0, 4)),
            month = int.Parse(end.Substring(5, 2)),
            lastDayOfMonth = DateTime.DaysInMonth(year, month);

        switch (granularity) {
            case "Year":
                start = $"{start.Substring(0, 4)}:00:00:00:00:00";
                end   = $"{end.Substring(0, 4)}:12:31:23:59:59";
                break;
            case "Month":
                start = $"{start.Substring(0, 7)}:01:00:00:00";
                end   = $"{end.Substring(0, 7)}:{lastDayOfMonth}:23:59:59";
                break;
            case "Day":
                start = $"{start.Substring(0, 10)}:00:00:00";
                end   = $"{end.Substring(0, 10)}:23:59:59";
                break;
            case "Hour":
                start = $"{start.Substring(0, 13)}:00:00";
                end   = $"{end.Substring(0, 13)}:59:59";
                break;
            case "Minute":
                start = $"{start.Substring(0, 16)}:00";
                end   = $"{end.Substring(0, 16)}:59";
                break;
            case "Second":
            default:
                break;
        }

        return (start, end);
    }
}

/**
 * Your LogSystem object will be instantiated and called as such:
 * LogSystem obj = new LogSystem();
 * obj.Put(id,timestamp);
 * IList<int> param_2 = obj.Retrieve(start,end,granularity);
 */
```