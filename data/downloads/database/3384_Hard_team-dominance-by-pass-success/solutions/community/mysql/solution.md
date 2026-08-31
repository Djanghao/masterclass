# Simple JOIN, No Subquery, No CTE

**Author:** kevwhuang
**Votes:** 0
**Link:** [https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6129085/](https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6129085/)

---

```mysql []
SELECT
    T1.team_name,
    IF(time_stamp <= '45:00', 1, 2) half_number,
    SUM(IF(T1.team_name = T2.team_name, 1, -1)) dominance
FROM
    Passes
    JOIN Teams T1 ON pass_from = player_id
    JOIN Teams T2 ON pass_to = T2.player_id
GROUP BY
    1,
    2
ORDER BY
    1,
    2;
```