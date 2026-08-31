# clear logic: inner join + rank

**Author:** sophie84
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-top-performing-driver/solutions/6027953/](https://leetcode.com/problems/find-top-performing-driver/solutions/6027953/)

---

# Code
```mysql []
# Write your MySQL query statement below
with 
    cte as (
        select 
             fuel_type, 
             d.driver_id,
             round(avg(rating), 2) as `rating`, 
             sum(distance) as `distance`, 
             sum(accidents) as `accidents`
        from Drivers d
        join Vehicles v
        on d.driver_id = v.driver_id
        join Trips t
        on v.vehicle_id = t.vehicle_id
        group by fuel_type, d.driver_id
        ), 
    
    cte2 as (
        select *, 
               rank() over (partition by fuel_type order by `rating` desc,`distance` desc, `accidents`) as rnk
        from cte
    )

select 
      fuel_type, 
      driver_id, 
      `rating`, 
      `distance`
from cte2
where rnk = 1
order by fuel_type;
```