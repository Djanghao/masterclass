# Simple Oracle solution

**Author:** Soni5143
**Votes:** 1
**Link:** [https://leetcode.com/problems/report-contiguous-dates/solutions/3840787/](https://leetcode.com/problems/report-contiguous-dates/solutions/3840787/)

---



# Code
```
/* Write your PL/SQL query statement below */

with cte as (
  select fail_date as dt, 'failed' as status
  from failed
  union 
  select success_date as dt, 'succeeded' as status
  from succeeded
)
select status as period_state, to_char(min(dt)) as start_date, to_char(max(dt)) as end_date
from (
select cte.*, row_number() over(order by dt) - row_number() over(partition by status order by dt) as grouping_seq
from cte
where dt between to_date('2019-01-01') and to_date('2019-12-31'))t
group by status,grouping_seq
order by 2

```