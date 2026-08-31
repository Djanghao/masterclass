# case row_number() mssql

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/status-of-flight-tickets/solutions/5689521/](https://leetcode.com/problems/status-of-flight-tickets/solutions/5689521/)

---

Pretty simple row_number, just partition by flight_id then check against the capacity of relevant flight. 

# Code
```mssql []
/* Write your T-SQL query statement below */



SELECT passenger_id
      ,case when row_number() over (partition by p.flight_id order by booking_time) <= f.capacity then 'Confirmed' 
            else 'Waitlist'
        end as status
  FROM Passengers p
  join Flights f
    on f.flight_id = p.flight_id
 order by passenger_id



```