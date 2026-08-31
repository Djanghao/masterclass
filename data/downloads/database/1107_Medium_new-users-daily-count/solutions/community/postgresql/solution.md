# Straightforward solution using one CTE

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/new-users-daily-count/solutions/5856887/](https://leetcode.com/problems/new-users-daily-count/solutions/5856887/)

---

# Intuition
Construct a `cte` with user_id and their first login dates.
Calculate the number of `user_id`s on each first login dates that fall within 90 days from `today` (including 90 days before and 90 days after).
Filter out those results with 0 login user, as required in the question. 

# Approach
See query. 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```postgresql []
-- Write your PostgreSQL query statement below
-- range is between today + interval '90 day' and today - interval '90 day'
-- first login: user_id, min(activity_date) where activity = 'login'
-- if first login not in range, don't count the user_id in

with cte as (
    select user_id, min(activity_date) as activity_date from traffic
    where activity = 'login'
    group by 1
)

select activity_date as login_date, count(distinct user_id) as user_count from cte
where activity_date between ('2019-06-30'::date - interval '90 day') and ('2019-06-30'::date + interval '90 day')
group by 1
having count(distinct user_id) > 0;
```