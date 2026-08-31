# Oracle Solution beats 100%

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/5986975/](https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/5986975/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with park_stats as
(select lot_id, car_id, sum(fee_paid) as total_fee_paid, sum(exit_time - entry_time) * 24 as total_parking_hrs
from ParkingTransactions
group by lot_id, car_id),
max_time_in_lot as
(select lot_id, car_id, total_parking_hrs as total_lot_hrs, rank() over (partition by car_id order by total_parking_hrs desc) as lot_rank
from park_stats)
select ps.car_id, round(sum(total_fee_paid), 2) as total_fee_paid, round(sum(total_fee_paid)/sum(total_parking_hrs), 2) as avg_hourly_fee, max(mt.lot_id) as most_time_lot
from park_stats ps join max_time_in_lot mt
on ps.car_id = mt.car_id
where lot_rank = 1
group by ps.car_id
order by ps.car_id;
```