# C# Full Simulation

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4906423/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4906423/)

---

```
public class Solution
{
    public IList<int> MostVisited(int n, int[] rounds)
    {
        var maxVisits = 0;
        var result = new List<int>(n);
        var visits = new Dictionary<int, int>(n);

        foreach (var sector in GenerateSectors(n, rounds))
        {
            var curVisits = visits[sector] =
                visits.GetValueOrDefault(sector) + 1;

            if (curVisits == maxVisits)
            {
                result.Add(sector);
            }

            if (curVisits > maxVisits)
            {
                result.Clear();
                result.Add(sector);
                maxVisits = curVisits;
            }
        }

        return result.Order().ToList();
    }

    public IEnumerable<int> GenerateSectors(int n, int[] rounds)
    {
        var sector = rounds[0];
        yield return rounds[0];

        foreach (var lastSectorOfRound in rounds[1..])
        {
            while (sector != lastSectorOfRound)
            {
                sector = sector % n + 1;
                yield return sector;
            }
        }
    }
}
```