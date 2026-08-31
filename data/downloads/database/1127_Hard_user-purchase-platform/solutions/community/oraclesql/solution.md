# [Oracle] Readable Solution with CTEs & coalesce()

**Author:** DSchradick
**Votes:** 3
**Link:** [https://leetcode.com/problems/user-purchase-platform/solutions/870487/](https://leetcode.com/problems/user-purchase-platform/solutions/870487/)

---

```

with date_platform_index as (
    select distinct spend_date, 'desktop' as platform from Spending
    union
    select distinct spend_date, 'mobile' as platform from Spending
    union
    select distinct spend_date,  'both' as platform from Spending
), 

one_platform_users as (
    select
        user_id,
        spend_date, 
        max(platform) as platform,
        sum(amount) as amount
    from
        Spending  
    group by
        spend_date, user_id
    having 
		count(distinct platform) = 1 
),

both_platform_users as (
    select
        user_id,
        spend_date, 
        'both' as "platform",
        sum(amount) as amount
    from 
        Spending
    group by
        spend_date, user_id
    having 
		count(distinct platform) = 2  
),

combined_users as (
    select * from one_platform_users
    union all
    select * from both_platform_users
) 

select 
    to_char(spend_date, 'YYYY-MM-DD') as spend_date,
    platform,
    coalesce(sum(amount), 0) as total_amount,
    coalesce(count(distinct user_id), 0) as total_users
from 
    date_platform_index
natural left join 
    combined_users
group by 
	spend_date, platform 


