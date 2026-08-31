# Using CTE + LAG() Window Function + COUNT() Aggregate Function

**Author:** nireddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5695951/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5695951/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below

WITH bus_time_cte AS
(
    SELECT
        bus_id,
        LAG(arrival_time, 1, 0) OVER(ORDER BY arrival_time) AS previous_bus_arrival_time,
        arrival_time AS current_bus_arrival_time
    FROM
        Buses
)

SELECT 
    b.bus_id,
    COUNT(p.passenger_id) AS passengers_cnt
FROM 
    bus_time_cte b
    LEFT JOIN 
    Passengers p
    ON p.arrival_time > previous_bus_arrival_time AND p.arrival_time <= current_bus_arrival_time
GROUP BY
    b.bus_id
ORDER BY
    b.bus_id
```