# sum + case when; short & efficient ; beat 100%

**Author:** tsung_pct
**Votes:** 0
**Link:** [https://leetcode.com/problems/snaps-analysis/solutions/6031973/](https://leetcode.com/problems/snaps-analysis/solutions/6031973/)

---


```postgresql []
with stats as (
    -- get the time spent of each group
    select
        age_bucket,
        sum(case when activity_type = 'send' then time_spent else 0 end) as "send_time",
        sum(case when activity_type = 'open' then time_spent else 0 end) as "open_time"
    from Activities as a
    join Age 
        using(user_id)
    group by age_bucket
)

select 
    age_bucket, 
    round(100 * send_time / (send_time+open_time), 2) as "send_perc",
    round(100 * open_time / (send_time+open_time), 2) as "open_perc"
from stats
```