# PostgreSQL solution

**Author:** vm2020
**Votes:** 0
**Link:** [https://leetcode.com/problems/ad-free-sessions/solutions/5980410/](https://leetcode.com/problems/ad-free-sessions/solutions/5980410/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as 
(select a.session_id,count(b.ad_id) as cnt
from Playback a left join Ads b on 
a.customer_id = b.customer_id and
b.timestamp  BETWEEN start_time and end_time
group by 1 )

select session_id from cte 
where cnt = 0 
order by 1;

```