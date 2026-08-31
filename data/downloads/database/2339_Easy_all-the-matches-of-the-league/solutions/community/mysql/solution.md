# Simple Join

**Author:** tianshuhuang6
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-the-matches-of-the-league/solutions/2641046/](https://leetcode.com/problems/all-the-matches-of-the-league/solutions/2641046/)

---

`select t1.team_name as home_team, t2.team_name as away_team from teams t1 join teams t2 on t1.team_name != t2.team_name`