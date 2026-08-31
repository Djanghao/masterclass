# Easy Oracle Solution!!!

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5936199/](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5936199/)

---

Please comment if you have any questions.
# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select flight_id, booked_cnt, reserved_flights - booked_cnt as waitlist_cnt
from (select F.flight_id, coalesce(case when capacity > reserved_flights then reserved_flights 
                            when capacity <= reserved_flights then capacity else 0 end, 0) as booked_cnt, coalesce(reserved_flights, 0) as reserved_flights
from Flights F left join (select flight_id, count(*) as reserved_flights
                    from Passengers
                    group by flight_id) P
on F.flight_id = P.flight_id) subq
order by flight_id;
```