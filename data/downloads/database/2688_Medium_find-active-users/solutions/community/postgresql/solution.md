# lag() to construct helper column

**Author:** adamhimy19
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-active-users/solutions/5995243/](https://leetcode.com/problems/find-active-users/solutions/5995243/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
To determine, for each user's transaction history, each day is represented as `|` shown below,
```
|   |   |         |
```
we wish to determine is there two neighboring `|` has distance less than 7 days. 

So, 

- use lag(date,1) to get previous row
- compare date - lag(date,1) and determine if the diff is <= 7

# Code
```postgresql []
-- Write your PostgreSQL query statement below
/*
- for each user, order by created_at, then lag(created_at, 1), then construct a helper column is_active
- is_active is based on diff between created_at and lag(created_at,1), 
    if diff <= 7, we good
*/

with cte as(
select
    user_id,
    case 
        when created_at - lag(created_at) over(partition by user_id order by created_at) <= 7 then 1
        else null end as is_active
from
    Users)
select
    user_id
from
    cte
group by user_id
having sum(is_active) > 0;


```