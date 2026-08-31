# Easy and simple solution using window function and CTE

**Author:** Prachi_404
**Votes:** 2
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/5877137/](https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/5877137/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mysql []
# Write your MySQL query statement below
with cte as(select team_id,team_name,
wins*3+draws*1 as points from TeamStats),

 cte2 as(select *,
rank() over(order by points desc) as position,
count(*) over() as total_teams
from cte)

select team_name,points,position,
case when position<=ceil(total_teams/3.0) then 'Tier 1'
when position<=ceil(2*total_teams/3.0) then 'Tier 2'
else 'Tier 3'
end as tier
from cte2
order by points desc,team_name
```