# Straightforward MSSQL solution

**Author:** DiveDave
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/1725058/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/1725058/)

---

```
SELECT bus_id
     , SUM(CASE WHEN P.passenger_id IS NULL THEN 0 ELSE 1 END) AS passengers_cnt
  FROM (
      SELECT bus_id
           , arrival_time
           , LAG(arrival_time, 1) OVER (ORDER BY arrival_time) AS LG
        FROM Buses) B
  LEFT JOIN Passengers P
    ON P.arrival_time <= B.arrival_time
   AND (P.arrival_time > B.LG OR B.LG IS NULL)
 GROUP BY bus_id
 ORDER BY bus_id 
```