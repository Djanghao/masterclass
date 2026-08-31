# Inelegant but concise DP with LINQ and named tuples

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3122641/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3122641/)

---

```csharp
public class Solution
{
    public int BestTeamScore(int[] scores, int[] ages)
    {
        var res = ages.Zip(scores, (a, s) => (Age: a, Score: s))
            .OrderBy(p => p.Age)
            .ThenBy(p => p.Score)
            .Select(p => (Score: p.Score, Dp: p.Score))
            .ToArray();
            
        for (int i = 0; i < res.Length; i++)
        {
            foreach (var (score, dp) in res[..i])
            {
                if (score <= res[i].Score)
                {
                    res[i].Dp = Math.Max(dp + res[i].Score, res[i].Dp);
                }
            }
        }

        return res.Max(x => x.Dp);
    }
}
```
Ideas/goals:
1. Pre-sort the players by Age, then by Score
2. Store the dp in the same array
3. No edge cases