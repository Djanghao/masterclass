# Beats 100% - one cte

**Author:** mohit8
**Votes:** 2
**Link:** [https://leetcode.com/problems/snaps-analysis/solutions/5818045/](https://leetcode.com/problems/snaps-analysis/solutions/5818045/)

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
with cte as (
    select age_bucket, 
    round(sum(case when activity_type = 'send' then time_spent else 0 end)*100/sum(time_spent),2) as send_perc,
    round(sum(case when activity_type = 'open' then time_spent else 0 end)*100/sum(time_spent),2) as open_perc
    from age u
    left join activities a on u.user_id = a.user_id
    group by 1
)
select*
from cte
```