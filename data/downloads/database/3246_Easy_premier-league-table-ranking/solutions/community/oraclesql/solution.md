# Solution for all SQL variants - RANK()

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking/solutions/5588404/](https://leetcode.com/problems/premier-league-table-ranking/solutions/5588404/)

---

This was a problem that completely fits the "Easy" label.  Befitting of a problem that doesn't require any advanced SQL functionality, the solution, which I originally submitted in Oracle, is valid for the other SQL variants (MySQL, MSSQL, Postgres) with **no modification**.

# Approach
The solution is extremely straightforward so I'll gloss over stuff like selecting, calculated field, etc., and I'll use this to cover ranking functions, mainly ROW_NUMBER(), RANK(), and DENSE_RANK().  Since this problem requires a standings position, **with ties**, and with an absolute position (as opposed to every rank being sequential/continuous), RANK() is the function to use here.  For completeness, DENSE_RANK() populates every number, so in the case that the "ranks" are [1, 1, 3, 4, 5, 5, 7, ...], the "dense ranks" would be [1, 1, 2, 3, 4, 4, 5, ...].  ROW_NUMBER() is unique for every row and sequential/continuous overall, which is not what we want here.  One final note - the RANK() here does not have any partitioning, and is ordered by standings points desc(ending), so that the teams with the most points have a rank of 1, and so on.

# Code
### (Valid for Oracle, MySQL, MSSQL, Postgres)
```
with teams_points as 
(
    select team_id,
    team_name,
    wins * 3 + draws as points
    from TeamStats
)
select team_id,
team_name,
points,
RANK() over (order by points desc) as position
from teams_points
order by 4, 2
```