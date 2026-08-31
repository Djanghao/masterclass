# A good use case of default value in `LEAD`

**Author:** little_explorer
**Votes:** 1
**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solutions/5922207/](https://leetcode.com/problems/biggest-window-between-visits/solutions/5922207/)

---

# Intuition
Construct a `cte` to calculate all the windows. 

The default value in the `lead` function is super helpful here:
when there is only one visit for the user, the window is `today` - the date of the visit, and,
when it is the last visit for the user, the window is `today` - the date of the last visit. 

Query the `cte` to get the `max` window for each `user_id`. 


# Approach
See query. 

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below

with cte as (
    select 
        user_id,
        lead(visit_date, 1, '2021-01-01') over (partition by user_id order by visit_date) - visit_date as wd
    from 
        uservisits
)

select 
    user_id, 
    max(wd) as biggest_window 
from 
    cte
group by 1
order by 1;

```