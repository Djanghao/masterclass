# cte + rank() -- beats 100%

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6020357/](https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6020357/)

---

![image.png](./images/0.png)


# Approach
<!-- Describe your approach to solving the problem. -->
use the cte to calculate initial aggregates at the car_id and lot_id level, and use the rank() window function to determine which lot had the maximum hours.

# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as (
    select
        car_id,
        lot_id,
        sum(fee_paid) as total_fees,
        sum(extract(epoch from (exit_time - entry_time))::decimal / 3600) as hours,
        rank() over (partition by car_id order by sum(extract(epoch from (exit_time - entry_time))::decimal / 3600) desc) as lot_rnk
    from parkingtransactions
    group by 1,2
)

select
    car_id,
    sum(total_fees) as total_fee_paid,
    round(sum(total_fees)::decimal / sum(hours),2) as avg_hourly_fee,
    (select lot_id from cte a where lot_rnk = 1 and a.car_id = cte.car_id) as most_time_lot
from cte
group by car_id
order by car_id
```