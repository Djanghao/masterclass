# C# Binary Search

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/5297062/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/5297062/)

---

```csharp
public class Solution
{
    List<int> weights = new();
    List<int> starts = new();
    List<int> ends = new();

    public Solution(int n, int[] blacklist)
    {
        var weight = 0;
        var start = 0;

        foreach (var end in blacklist.Append(n).Order())
        {
            if (end > start)
            {
                weight += end - start;
                weights.Add(weight);
                starts.Add(start);
                ends.Add(end);
            }

            start = end + 1;
        }
    }

    public int Pick()
    {
        var random = Random.Shared.Next(weights[^1]);
        var index = Math.Abs(weights.BinarySearch(random) + 1);
        return Random.Shared.Next(starts[index], ends[index]);
    }
}
```