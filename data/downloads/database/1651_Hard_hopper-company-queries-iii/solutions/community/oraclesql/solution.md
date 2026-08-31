# Oracle with no window function

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/hopper-company-queries-iii/solutions/1647279/](https://leetcode.com/problems/hopper-company-queries-iii/solutions/1647279/)

---

```
with all_rides as (
    select to_number(to_char(a.requested_at, 'MM')) month, sum(b.ride_distance) ride_distance , sum(b.ride_duration) ride_duration from 
    rides a inner join acceptedRides b on a.ride_id = b.ride_id
where to_char(a.requested_at, 'YYYY') = '2020'  
group by to_number(to_char(a.requested_at, 'MM'))
), 
all_months as (
    select 1 month, 0 ride_distance,0 ride_duration from dual
    union all
    select 2, 0,0 from dual
    union all
    select 3, 0,0 from dual
    union all
    select 4, 0,0 from dual
    union all
    select 5, 0,0 from dual
    union all
    select 6, 0,0 from dual
    union all
    select 7, 0,0 from dual
    union all
    select 8, 0,0 from dual
    union all
    select 9, 0,0 from dual
    union all
    select 10, 0,0 from dual
)
select 
b.month, round(sum(nvl(a.ride_distance,0) ) /3,2) as "average_ride_distance", round( sum(nvl(a.ride_duration,0)) /3,2) as "average_ride_duration"
from all_rides a right join all_months b on a.month-b.month  =0 or a.month- b.month = 1 or a.month-b.month =2
group by b.month
order by 1 
```