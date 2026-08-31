# MySQL window function solution

**Author:** zyx0605
**Votes:** 115
**Link:** [https://leetcode.com/problems/find-interview-candidates/solutions/1138996/](https://leetcode.com/problems/find-interview-candidates/solutions/1138996/)

---

First melt `contest` into long format, then rank the medal by contest_id within each user group. 
Here the consecutive medal won means the **difference between rank and contest_id are the same**. 
Next, filter the result by selecting those who has # within difference group >= N\uFF0Cand combine them with gold medal winners. 
Finally join user table and keep the distinct results. 

```
with t0 as (
    select gold_medal as user, contest_id 
    from contests 
    union all 
    select silver_medal as user, contest_id 
    from contests 
    union all 
    select bronze_medal as user, contest_id 
    from contests 
)
, t1 as (
    select user, contest_id, row_number() over(partition by user order by contest_id) as rn 
    from t0 
)
, t2 as (
    select user as user_id -- consecutive medal winners
    from t1 
    group by user, contest_id - rn 
    having count(*) >= 3 -- replace 3 with any number to solve the N problem
    union all
    select gold_medal as user_id  -- gold medal winners
    from contests 
    group by gold_medal 
    having count(*) >= 3
)
select distinct u.name, u.mail 
from t2 
inner join users u
on t2.user_id = u.user_id
```
