# MSSQL solution with recursive CTE

**Author:** DiveDave
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/1733529/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/1733529/)

---

```
WITH CTE_A AS (
        SELECT bus_id
             , capacity
             , B.arrival_time
             , SUM(CASE WHEN P.passenger_id IS NULL THEN 0 ELSE 1 END) AS available_passenger
             , LG
          FROM (
                  SELECT bus_id
                       , arrival_time
                       , capacity
                       , LAG(arrival_time, 1) OVER (ORDER BY arrival_time) AS LG
                    FROM Buses
               ) B
          LEFT JOIN Passengers P
            ON B.arrival_time >= P.arrival_time
           AND (B.LG < P.arrival_time OR B.LG IS NULL)
         GROUP BY bus_id
                , capacity  
                , B.arrival_time
                , LG
)
, CTE_R AS (
    SELECT bus_id
         , capacity
         , arrival_time
         , available_passenger
         , CASE WHEN available_passenger - capacity >= 0 THEN available_passenger - capacity
                ELSE 0 END remaining_psg
      FROM CTE_A
     WHERE LG IS NULL
     UNION ALL
    SELECT A.bus_id
         , A.capacity
         , A.arrival_time
         , A.available_passenger + R.remaining_psg AS available_passenger
         , CASE WHEN A.available_passenger + R.remaining_psg >= A.capacity 
                THEN A.available_passenger + R.remaining_psg - A.capacity 
                ELSE 0 END remaining_psg
      FROM CTE_R R
      JOIN CTE_A A
        ON A.LG = R.arrival_time    
)

SELECT bus_id
     , CASE WHEN available_passenger >= capacity THEN capacity ELSE available_passenger END AS passengers_cnt
  FROM CTE_R
  ORDER BY bus_id 
```