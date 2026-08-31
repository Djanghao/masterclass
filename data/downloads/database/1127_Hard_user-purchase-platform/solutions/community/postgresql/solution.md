# Window function to pre process platform

**Author:** jomosz
**Votes:** 2
**Link:** [https://leetcode.com/problems/user-purchase-platform/solutions/5263651/](https://leetcode.com/problems/user-purchase-platform/solutions/5263651/)

---

# Intuition
Covert `platform` to both when a user has done both on a day using a window function.
Get all combinations of `spend_date` and `platform`.
The rest is straight forward.

# Code
```
-- Write your PostgreSQL query statement below
with t1 as (
    select
        user_id, spend_date,
        case
            when count(platform) over(partition by user_id, spend_date)=2 then 'both'
            else platform
        end platform,
        amount
    from spending
),
t2 as (select 'desktop' platform union select 'mobile' platform union select 'both' platform),
t3 as (select distinct spend_date from spending),
t4 as (select platform, spend_date from t2,t3)
select
    t4.spend_date, t4.platform,
    coalesce(sum(amount),0) total_amount,
    coalesce(count(distinct user_id),0) total_users
from
    t1
    right join t4 using (platform, spend_date)
group by 1,2;
```