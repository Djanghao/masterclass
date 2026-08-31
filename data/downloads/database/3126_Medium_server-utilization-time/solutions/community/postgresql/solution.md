# Postgres : Rank and subtract

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/server-utilization-time/solutions/5281678/](https://leetcode.com/problems/server-utilization-time/solutions/5281678/)

---

```
with 
TimeRanked as 
(
  select 
    server_id
    ,
    status_time
    ,
    session_status
    , 
    rank() over(partition by server_id, session_status order by status_time)
  from servers 
)
select 
    floor(sum(extract(epoch from (t2.status_time - t1.status_time))) / (60 * 60 * 24)) as total_uptime_days
from 
  TimeRanked t1 inner join TimeRanked t2  on 
  t1.server_id = t2.server_id and t1.rank = t2.rank   
  where 
  t1.session_status = 'start' and t2.session_status = 'stop'


```