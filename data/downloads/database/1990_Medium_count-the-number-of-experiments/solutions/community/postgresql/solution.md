# A simple solution using UNNEST and CROSS JOIN

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-experiments/solutions/5954222/](https://leetcode.com/problems/count-the-number-of-experiments/solutions/5954222/)

---

# Intuition
Create a `cte` that contains all the combinations of each `platform` and `experiment name`. 

`Left join` the `cte` with `experiments` and `count` the number of experiments per combination of `platform` and `experiment name`. 

# Approach
See query. 

# Complexity
- Time complexity:
O(N*M)

- Space complexity:
O(N+M)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

with cte1 as (
    select * from unnest(array['Android', 'IOS', 'Web']) as p
),
cte2 as (
    select * from unnest(array['Reading', 'Sports', 'Programming']) as e
),
cte as (
    select * from cte1 cross join cte2
)

select
    p as platform,
    e as experiment_name,
    count(experiment_id) as num_experiments
from 
    cte
left join 
    experiments exp
on 
    cte.p = exp.platform and cte.e = exp.experiment_name
group by 1, 2;


```