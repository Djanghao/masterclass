# Easy Oracle Solution !

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/snaps-analysis/solutions/5957124/](https://leetcode.com/problems/snaps-analysis/solutions/5957124/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select ag.age_bucket, coalesce(round(sum(case when activity_type = 'send' then time_spent end) * 100 / sum(time_spent), 2), 0) as send_perc, coalesce(round(sum(case when activity_type = 'open' then time_spent end) * 100 / sum(time_spent), 2), 0) as open_perc
from Age ag JOIN Activities ac
on ag.user_id = ac.user_id
group by ag.age_bucket;
```