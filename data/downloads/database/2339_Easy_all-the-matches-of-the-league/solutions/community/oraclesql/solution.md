# Cross Join | Oracle Solution | Faster Than 100%

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-the-matches-of-the-league/solutions/2682490/](https://leetcode.com/problems/all-the-matches-of-the-league/solutions/2682490/)

---

```
select  a.team_name  home_team, b.team_name away_team
from teams a inner join teams b on a.team_name != b.team_name 
```