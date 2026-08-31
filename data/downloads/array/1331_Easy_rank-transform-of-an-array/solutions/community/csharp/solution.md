# C# Fun with Linq

**Author:** ilya-a-f
**Votes:** 5
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5047151/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5047151/)

---

```csharp
public class Solution
{
    public int[] ArrayRankTransform(int[] arr) => arr
        .Select((num, i) => (num, index: i))
        .GroupBy(t => t.num, t => t.index)
        .OrderBy(gr => gr.Key)
        .Select((gr, i) => (rank: i + 1, indexes: gr))
        .SelectMany(p => p.indexes, (p, index) => (p.rank, index))
        .OrderBy(r => r.index)
        .Select(r => r.rank)
        .ToArray();
}
```
```csharp
public class Solution
{
    public int[] ArrayRankTransform(int[] arr)
    {
        var rank = new Dictionary<int, int>();

        foreach (var a in arr.Order())
            rank.TryAdd(a, rank.Count + 1);

        return Array.ConvertAll(arr, a => rank[a]);
    }
}
```