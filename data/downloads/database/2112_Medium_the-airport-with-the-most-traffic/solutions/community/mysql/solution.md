# ACCEPTED Submission : CTE with 100% faster run time and 0B memory usage

**Author:** selvarajr
**Votes:** 7
**Link:** [https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/1638670/](https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/1638670/)

---

The simple form of solution with UNION ALL and CTE
```
# Write your MySQL query statement below

WITH arpt
as
    (SELECT ar.airport_id, sum(ar.flights_count) as flights_count from 
     (SELECT departure_airport as airport_id, flights_count as flights_count from Flights
    UNION ALL
    SELECT arrival_airport as airport_id, flights_count as flights_count from Flights
    ) ar
    group by ar.airport_id)

SELECT a. airport_id from arpt a where a.flights_count = (select max(p.flights_count) from arpt p)

```