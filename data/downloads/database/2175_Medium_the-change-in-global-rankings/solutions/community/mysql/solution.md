# MySQL in basic 3 Lines, 90%. NO CTE

**Author:** zhaiyixian
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-change-in-global-rankings/solutions/2260828/](https://leetcode.com/problems/the-change-in-global-rankings/solutions/2260828/)

---

```
SELECT t.team_id, name,  CAST(RANK() OVER (ORDER BY points DESC, name) AS SIGNED) - CAST(RANK() OVER (ORDER BY (points + points_change) DESC, name) AS SIGNED) AS rank_diff
FROM TeamPoints AS t
LEFT OUTER JOIN PointsChange AS p ON t.team_id = p.team_id;
```