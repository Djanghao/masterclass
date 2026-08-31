# Solution for all SQL variants - partitioning and ranking

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/5908854/](https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/5908854/)

---

This latest iteration of the "Premier League Table Ranking" family of problems adds multiple seasons to the input table, adding **partitioning** to the ranking required in the previous ones.  If you've solved the previous iterations of these Premier League problems, you should be able to tackle this one with a few modifications.  Here's the links to the previous two problems, as you can leverage the commonalities between the problems to fast track your solution to this latest one:

[Problem I](https://leetcode.com/problems/premier-league-table-ranking/description/) and [my solution](https://leetcode.com/problems/premier-league-table-ranking/solutions/5588404/solution-for-all-sql-variants-rank/)
[Problem II](https://leetcode.com/problems/premier-league-table-ranking-ii/description/) and [my solution](https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/5622019/solution-for-all-sql-variants-create-bins-from-row-counttotal-rows/)
(FWIW, I actually found problem #1 to be more useful to leverage for this solution.)

# Approach
As with the other Premier League problems, this solution starts with a CTE, here called `teams_seasons_points`, which handles the calculations: points, which should be familiar, and goal_difference, which is a new wrinkle here but still straightforward.  Since the input now contains multiple seasons, `season_id` needs to be selected as well.  Next comes a direct select from that CTE, selecting the fields requested in the output along with the `RANK()` function as before, though here the ranking changes slightly due to the change in input.  As touched on in the intro, the previous input provided only a single season, and now the input contains multiple seasons, and the requirement is to provide a ranking of each team per season.  The new parameters to the `RANK()` function flow directly from the new requirements:
\\- partition by season_id
\\- add in the ordering outlined in the requirements: order by points desc(highest points), goal_difference desc (highest goal differential), team_name (alphabetical)
Add in the overall result set ordering and that's it.

# Code
```Oracle []
/* Write your PL/SQL query statement below */

with teams_seasons_points as 
(
    select season_id,
    team_id,
    team_name,
    wins * 3 + draws as points,
    goals_for - goals_against as goal_difference
    from SeasonStats
)
select season_id,
team_id,
team_name,
points,
goal_difference,
RANK() over (partition by season_id order by points desc, goal_difference desc, team_name) as position
from teams_seasons_points
order by 1, 6
```
```MySQL []
# Write your MySQL query statement below

with teams_seasons_points as 
(
    select season_id,
    team_id,
    team_name,
    wins * 3 + draws as points,
    goals_for - goals_against as goal_difference
    from SeasonStats
)
select season_id,
team_id,
team_name,
points,
goal_difference,
RANK() over (partition by season_id order by points desc, goal_difference desc, team_name) as position
from teams_seasons_points
order by 1, 6
```
```MSSQL []
/* Write your T-SQL query statement below */

with teams_seasons_points as 
(
    select season_id,
    team_id,
    team_name,
    wins * 3 + draws as points,
    goals_for - goals_against as goal_difference
    from SeasonStats
)
select season_id,
team_id,
team_name,
points,
goal_difference,
RANK() over (partition by season_id order by points desc, goal_difference desc, team_name) as position
from teams_seasons_points
order by 1, 6
```
```Postgres []
-- Write your PostgreSQL query statement below

with teams_seasons_points as 
(
    select season_id,
    team_id,
    team_name,
    wins * 3 + draws as points,
    goals_for - goals_against as goal_difference
    from SeasonStats
)
select season_id,
team_id,
team_name,
points,
goal_difference,
RANK() over (partition by season_id order by points desc, goal_difference desc, team_name) as position
from teams_seasons_points
order by 1, 6
```