# Solution for all SQL types - single CTE to enrich data, then aggregate

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6126470/](https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6126470/)

---

Problem difficulty is in the eye of the beholder depending on one's own skill level.  That being said, this problem is classified as "Hard" but I found it to be incredibly straightforward, both in terms of the complexity and functions required, and also the process and steps needed to generate the final result set.  This problem presents a simple metric as well as simple partitioning/grouping for the data, and tackling those shouldn't be tough, so let's dive into how to do that.

# Approach
As noted in the title, this solution uses a single CTE, which is called `passes_enriched`.  This problem centers on teams getting "points" for each pass, and it only makes sense that an input table is `Passes` with one record per pass.  The `Passes` table has two player ids, the passing player and the receiving player, so join an instance each of `Teams`, which we'll alias as `player_pass_from` and `player_pass_to`, joining on each player id (`where Passes.pass_from = player_pass_from.player_id
    and Passes.pass_to = player_pass_to.player_id`).  Now let's go over the `select`, which makes heavy use of `case when` classification:
\\- Select `player_pass_from.team_name`, as the team with the player making the pass will get the "points" for the pass
\\- Use a `case when` to compare the `team_name` of the player on each side of the pass.  If they are the same, assign a 1 as per the requirements, otherwise assign a -1.
\\- There are many ways to determine the half number; this solution uses `substr()`/`substring()` to parse the time_stamp string in "MM:SS" and convert it to total seconds, e.g., "46:01" -> 2761.  If the total seconds <= 2700 (as each half is 45 minutes = 2700 seconds), assign a 1, otherwise, assign a 2.  (Noting here that casting the components of the time_stamp into `int` type was required in Postgres but not the others.)

The `passes_enriched` CTE is at the detail level, with one record per pass, so let's aggregate to produce the final result set, which is one record per team/half with an aggregate passing score, called "dominance."  Converting that functional statement into code should be straightforward, select team name and half number from the CTE, group by those fields, and sum the pass score values, renaming that sum as "dominance".  Add in the ordering by team name and half number, both asc(ending).

# Code
```Oracle []
/* Write your PL/SQL query statement below */

with passes_enriched as (
    select player_pass_from.team_name,
    case when player_pass_from.team_name = player_pass_to.team_name then 1 else -1 end as pass_score,
    case when (substr(Passes.time_stamp, 1, 2) * 60 + substr(Passes.time_stamp, 4, 2)) <= 2700 then 1 else 2 end as half_number
    from Passes,
    Teams player_pass_from,
    Teams player_pass_to
    where Passes.pass_from = player_pass_from.player_id
    and Passes.pass_to = player_pass_to.player_id
)
select team_name, half_number, sum(pass_score) as dominance
from passes_enriched
group by team_name, half_number
order by 1, 2
```
```MySQL []
# Write your MySQL query statement below

with passes_enriched as (
    select player_pass_from.team_name,
    case when player_pass_from.team_name = player_pass_to.team_name then 1 else -1 end as pass_score,
    case when (substring(Passes.time_stamp, 1, 2) * 60 + substring(Passes.time_stamp, 4, 2)) <= 2700 then 1 else 2 end as half_number
    from Passes,
    Teams player_pass_from,
    Teams player_pass_to
    where Passes.pass_from = player_pass_from.player_id
    and Passes.pass_to = player_pass_to.player_id
)
select team_name, half_number, sum(pass_score) as dominance
from passes_enriched
group by team_name, half_number
order by 1, 2
```
``` MSSQL []
/* Write your T-SQL query statement below */

with passes_enriched as (
    select player_pass_from.team_name,
    case when player_pass_from.team_name = player_pass_to.team_name then 1 else -1 end as pass_score,
    case when (substring(Passes.time_stamp, 1, 2) * 60 + substring(Passes.time_stamp, 4, 2)) <= 2700 then 1 else 2 end as half_number
    from Passes,
    Teams player_pass_from,
    Teams player_pass_to
    where Passes.pass_from = player_pass_from.player_id
    and Passes.pass_to = player_pass_to.player_id
)
select team_name, half_number, sum(pass_score) as dominance
from passes_enriched
group by team_name, half_number
order by 1, 2
```
``` Postgres []
-- Write your PostgreSQL query statement below

with passes_enriched as (
    select player_pass_from.team_name,
    case when player_pass_from.team_name = player_pass_to.team_name then 1 else -1 end as pass_score,
    case when (substring(Passes.time_stamp, 1, 2)::int * 60 + substring(Passes.time_stamp, 4, 2)::int) <= 2700 then 1 else 2 end as half_number
    from Passes,
    Teams player_pass_from,
    Teams player_pass_to
    where Passes.pass_from = player_pass_from.player_id
    and Passes.pass_to = player_pass_to.player_id
)
select team_name, half_number, sum(pass_score) as dominance
from passes_enriched
group by team_name, half_number
order by 1, 2
```