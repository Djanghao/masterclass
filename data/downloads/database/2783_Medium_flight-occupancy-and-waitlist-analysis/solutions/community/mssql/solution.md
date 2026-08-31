# cte with row_number, sum(case when)

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5869351/](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5869351/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
with passengers_per_flight
as
(
SELECT row_number() over (partition by flight_id order by passenger_id) order_booked
      ,passenger_id
      ,flight_id
FROM Passengers 
)
SELECT f.flight_id
      ,sum(case when order_booked <= capacity then 1 else 0 end) as booked_cnt
      ,sum(case when order_booked > capacity then 1 else 0 end) as waitlist_cnt 
  FROM flights f
  left join passengers_per_flight ppf
    on f.flight_id = ppf.flight_id 
 group by f.flight_id
 order by f.flight_id

```