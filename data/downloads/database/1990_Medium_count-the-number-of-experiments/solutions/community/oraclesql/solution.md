# Oracle | CTE | Cross Join

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-experiments/solutions/5555024/](https://leetcode.com/problems/count-the-number-of-experiments/solutions/5555024/)

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
```
/* Write your PL/SQL query statement below */
with cte1 as
    (select'IOS' as platform from dual
    union 
    select 'Android' as platform from dual
    union
    select 'Web' as platform from dual)
,cte2 as
    (select 'Programming' as experiment_name from dual
    union 
    select 'Sports' as experiment_name from dual
    union
    select 'Reading' as esperiment_name from dual),
cte3 as 
(select 
    a.platform,b.experiment_name from cte1 a cross join cte2 b )

select
    c.platform,
    c.experiment_name,
    count(e.experiment_id) as num_experiments
from
    cte3 c
left join
    experiments e on c.experiment_name = e.experiment_name and e.platform = c.platform
group by
    c.platform,
    c.experiment_name
order by
    1,2

```