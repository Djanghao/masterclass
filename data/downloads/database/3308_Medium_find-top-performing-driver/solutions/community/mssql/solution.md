# Derived Table + row_number()

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-top-performing-driver/solutions/5852037/](https://leetcode.com/problems/find-top-performing-driver/solutions/5852037/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT fuel_type
      ,driver_id
      ,rating
      ,distance
FROM (
        SELECT v.fuel_type
            ,v.driver_id
            ,round(sum(t.rating) * 1.0 / count(*),2) rating
            ,sum(distance) distance
            ,row_number() over (partition by fuel_type order by sum(t.rating) * 1.0 / count(*) desc, d.accidents) rn
        FROM trips t
        join vehicles v
        on v.vehicle_id = t.vehicle_id 
        join drivers d 
        on d.driver_id = v.driver_id
        group by v.fuel_type
                ,v.driver_id
                ,d.accidents
    ) x 
    where x.rn = 1
```