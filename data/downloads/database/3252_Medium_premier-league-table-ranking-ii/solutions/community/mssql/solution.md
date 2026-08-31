# Solution for all SQL variants - create "bins" from row count/total rows

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/5622019/](https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/5622019/)

---

This problem builds on the first iteration of the "Premier League Table Ranking" problem ([link](https://leetcode.com/problems/premier-league-table-ranking/description/)).  Once again, we're given teams and their results in games, and asked to rank the teams by standings points (which is calculated from results).  This problem adds the wrinkle that we need to add a "tier" for each team, once again based on standings points, with there being 3 tiers.  I went into this problem thinking PERCENT_RANK() or NTILE() would be the way to go, since the description mentions Tier 1 being "top 33% of teams" (and so on) or something along those lines.  When all is said and done, the correct solution doesn't use a percent ranking function, but instead creates bins based on position.  So if there are 5 teams (from 5 rows in the input table), the top tier, "Tier 1," would be teams ranked 1 and 2 in standings points, the next tier would be teams ranked 3 and 4, with team 5 being in the thrid tier.  Note that the point total doesn't matter (i.e. the percentile rank based on the leader), all that matters is the team's ordinal position and the number of teams.  I don't know what LC envisioned as the "ideal solution" but to me, this part with the tier creation took some trial and error and wasn't intuitive\\*, especially given that the problem states that "teams are divided into tiers based on points," but that's just my two cents.  We'll dive into how to tackle the tier in the approach below...

I originally wrote this solution in Oracle but it is valid for all of the SQL variants - MySQL, MSSQL, and Postgres too.

*Note - I originally wrote that the solution where the teams are grouped into 3 buckets of size ~$ n_{rows}/3$ "wasn't intuitive" but I don't think that was the ideal way to phrase that, and I'd clarify to say that the solution is cumbersome more than anything else.  As a Python coder, the ideal solution there is termed "Pythonic," and to loosely borrow that phrase, this solution doesn't seem like the best use of SQL.  You're either doing a case/when on the ordinal value of the rank/row number (hardly the best use of case/when classification), or you're doing an n-tile/percentile ranking on that rank/row numer (percentile ranking on a uniform distribution?).  Mainly wanted to note this, SQL analytic functions (like rank(), percent_rank(), ntile(), etc.) are extremely powerful but it feels like this problem wasn't the best application of them.

# Approach
This solution builds on the original problem, with a link to my solution [here](https://leetcode.com/problems/premier-league-table-ranking/solutions/5588404/solution-for-all-sql-variants-rank/), and if you need a link to the problem itself, that's above in the intro.  This "II" problem builds on the first iteration, where the `teams_points` CTE is used to calculate standings points for a team, and from there the teams are given a standings position using RANK().  That query assigning the ranking posiiton was the final query in the first problem, but here it is a CTE, `teams_rk`, which will be used to calculate the tiers.  Next comes a quick CTE, `teams_ct`, which is just a count of the number of teams using count(*).

With those 3 CTEs, let's put it all together.  Since `team_rk` contains the teams and points and position, select those.  The `team_ct` CTE will be used as a lookup, since it contains a single row and a single field, num_teams.  The problem asks to divide the teams into 3 tiers, so teams_rk.position will be compared to teams_ct.num_teams, and a `case when` will be used to assign the tier descriptor.  Since there are 3 tiers, thresholds of .33 and .66 would seem to make sense, but the actual bucketing of teams into tiers took some playing around with based on what LC had as the correct answer.  Here's a good example based on the 5 team example touched on in the intro:
1. 5 teams -> .33 \\* 5 = 1.65, .66 \\* 5 = 3.30
2. That value will be a decimal, and the position will be an integer, so add 1 to each value to create a "threshold" -> .33 threshold = 2.65, .66 threshold = 4.30
3. Use teams_rk.position, which uses RANK() to rank the rows and handles ties.  If position < "threshold", assign a team to that tier.

As code, this "tiering" is:
`
case when teams_rk.position < ((team_ct.num_teams * .33) + 1) then 'Tier 1'
when teams_rk.position < ((team_ct.num_teams * .66) + 1) then 'Tier 2'
else 'Tier 3' end as tier
`

The tier is the big change for this "II" variant, once that's been tackled, all that's left is the ordering.

# Code

### (Valid for Oracle, MySQL, MSSQL, Postgres)

```
with teams_points as 
(
    select team_id,
    team_name,
    wins * 3 + draws as points
    from TeamStats
),
teams_rk as
(
    select team_id,
    team_name,
    points,
    RANK() over (order by points desc) as position,
    ROW_NUMBER() over (order by points desc) as points_rk
    from teams_points
),
team_ct as 
(
    select
    count(*) as num_teams
    from TeamStats
)
select teams_rk.team_name,
teams_rk.points,
teams_rk.position,
case when teams_rk.position < ((team_ct.num_teams * .33) + 1) then 'Tier 1'
when teams_rk.position < ((team_ct.num_teams * .66) + 1) then 'Tier 2'
else 'Tier 3' end as tier
from teams_rk, team_ct
order by 2 desc, 1

```