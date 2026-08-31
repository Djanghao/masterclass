# Q. not clear; Step by step rank + group by

**Author:** tsung_pct
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-top-performing-driver/solutions/6122925/](https://leetcode.com/problems/find-top-performing-driver/solutions/6122925/)

---

* Question is not clear, they want us to calculate the summary stats of each driver + fuel_type. So the same driver could actually have different ratings.
-> Personally I don't think this align with real-world example
```postgresql []
with stats as (
    -- summary stats
    select
        d.driver_id,
        fuel_type,
        sum(distance) as "distance",
        avg(rating) as "rating",
        max(accidents) as "accidents"
    from Vehicles as v
    join Drivers as d
        using(driver_id)
    join Trips as t
        using(vehicle_id)
    group by d.driver_id, fuel_type
    ), rks as (
    select
        stats.fuel_type, 
        stats.driver_id, 
        stats.rating, 
        stats.distance, 
        dense_rank() over(partition by fuel_type 
            order by rating desc, distance desc, accidents asc
            ) as "rk"
    from stats
    )

select
    fuel_type, 
    driver_id,
    round(rating, 2) as "rating",
    distance
from rks
where rk = 1
order by 1
```