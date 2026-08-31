# Concise and clear solution by an SQL person

**Author:** anikit
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2856602/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2856602/)

---

Hi. My field of expertise is databases. That's why I often think in sets and operations on them: intersect, except, union. When I saw this problem, I instantly thought how easy it could be solved with SQL. Please upvote if you like it:
```csharp
public class Solution
{
    public IList<IList<int>> FindWinners(int[][] matches)
    {
        HashSet<int> winners = new(matches.Select(x => x[0]));
        List<int> losers = new(matches.Select(x => x[1]));

        return new List<IList<int>>
        {
            winners.Except(losers).OrderBy(x => x).ToList(),
            losers.GroupBy(x => x).Where(x => x.Count() == 1).Select(x => x.Key).OrderBy(x => x).ToList()
        };
    }
}
```

Explanation:
1. Getting the winners is easy: Collect all who won at least one match and remove those of them who lost at least one match. Since we don't care how many matches a person won, we can put the winners into a set.
2. Then let's collect the losers. We do care about the number of losses, so we put the losers to a list. Then we count their losses with `GroupBy` and take those who lost exactly once with `Count() == 1`.

And just for fun: This is how I would solve it in SQL. No ordering because sets are not ordered :)
```sql
WITH losers AS (
    SELECT loser, COUNT(*) AS losses
    FROM matches
    GROUP BY loser
),

winners AS (
    SELECT DISTINCT winner FROM matches
    EXCEPT
    SELECT loser FROM losers
),

SELECT winners, 'winner' FROM winners
UNION ALL
SELECT losers, 'loser' FROM losers WHERE losses = 1
```