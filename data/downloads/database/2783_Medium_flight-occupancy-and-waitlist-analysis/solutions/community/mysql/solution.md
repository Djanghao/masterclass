# [MySQL] LEFT JOIN

**Author:** cruim
**Votes:** 4
**Link:** [https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/3795097/](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/3795097/)

---

# Code
```
# Write your MySQL query statement below
select f.flight_id, LEAST(f.capacity, count(p.flight_id)) as booked_cnt, 
if (count(p.flight_id) > f.capacity, count(p.flight_id)-f.capacity, 0) as waitlist_cnt
from Flights f
left join Passengers p on p.flight_id = f.flight_id
group by f.flight_id
order by f.flight_id
```