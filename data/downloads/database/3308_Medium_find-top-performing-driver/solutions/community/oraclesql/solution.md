# Oracle Solution beats 100%

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-top-performing-driver/solutions/6006332/](https://leetcode.com/problems/find-top-performing-driver/solutions/6006332/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with driver_ratings as
(select fuel_type, d.driver_id, avg(rating) as avg_rating, sum(distance) as total_distance, max(accidents) as accidents
from drivers d join Vehicles v
on d.driver_id = v.driver_id
join trips t
on v.vehicle_id = t.vehicle_id
group by fuel_type, d.driver_id),
driver_rank as
(select fuel_type, driver_id, avg_rating, total_distance, rank() over (partition by fuel_type order by avg_rating desc, total_distance desc, accidents) as driver_rnk
from driver_ratings)
select fuel_type, driver_id, round(avg_rating, 2) as rating, total_distance as distance
from driver_rank
where driver_rnk = 1
order by fuel_type;
```