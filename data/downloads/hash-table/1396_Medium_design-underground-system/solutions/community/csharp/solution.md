# Dictionaries and named tuples

**Author:** anikit
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1979304/](https://leetcode.com/problems/design-underground-system/solutions/1979304/)

---

```c#
public class UndergroundSystem
{
    Dictionary<int, (string from, int startTime)> starts = new();
    Dictionary<(string, string), List<int>> times = new();
    
    public void CheckIn(int id, string from, int startTime)
    {
        starts[id] = (from, startTime);
    }
    
    public void CheckOut(int id, string to, int endTime)
    {
        var (from, startTime) = starts[id];
        var route = (from, to);
        if (!times.ContainsKey(route)) times[route] = new();
        times[route].Add(endTime - startTime);
    }
    
    public double GetAverageTime(string from, string to)
        => times[(from, to)].Average();
}
```