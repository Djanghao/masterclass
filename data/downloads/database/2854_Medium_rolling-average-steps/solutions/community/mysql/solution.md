# MySQL with and without window function

**Author:** nanzhuangdalao
**Votes:** 3
**Link:** [https://leetcode.com/problems/rolling-average-steps/solutions/4296570/](https://leetcode.com/problems/rolling-average-steps/solutions/4296570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. lag(steps_date, 2): the steps_date which is 2 row before the current date;
2. avg(steps_count) over (partition by user_id order by steps_date rows between 2 preceding and current row)
# Code 1
```
# Write your MySQL query statement below
with cte as (
    select user_id, steps_date,
    lag(steps_date, 2) over (partition by user_id order by steps_date) as two_days_ago,
    round(
        avg(steps_count) over (partition by user_id order by steps_date rows between 2 preceding and current row), 2
    ) as rolling_average
    from steps
)

select user_id, steps_date, rolling_average
from cte
where datediff(steps_date, two_days_ago) = 2
order by user_id, steps_date
```
# Code 2
```
# Write your MySQL query statement below
with cte as (
    select a.user_id, a.steps_count as a,
    b.steps_count as b, c.steps_count as c, c.steps_date
    from steps a
    join steps b
    on a.user_id = b.user_id and a.steps_date + 1 = b.steps_date
    join steps c
    on b.user_id = c.user_id and b.steps_date + 1 = c.steps_date
)

select user_id, steps_date, round((a + b + c) /3.0, 2) as rolling_average
from cte
order by user_id, steps_date
```