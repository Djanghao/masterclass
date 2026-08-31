# top 1 with ties

**Author:** user3009s
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/1727568/](https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/1727568/)

---

```

with cte
as 
(
    SELECT departure_airport as  airport_id, flights_count
    FROM Flights 

    union all

    SELECT arrival_airport , flights_count
    FROM Flights 

)


select top 1 with ties airport_id 
from (
        select airport_id,sum(flights_count) as total
        from cte
        group by airport_id
    )x
order by total desc 
```