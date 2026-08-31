# Intuitive CTEs

**Author:** oat_milk_americano
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6076692/](https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6076692/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mysql []
# Write your MySQL query statement below
with cte1 as (select 
    car_id, 
    sum(fee_paid) as total_fee_paid,
    round(sum(fee_paid)/(sum(timestampdiff(minute, entry_time, exit_time))/60),2) as avg_hourly_fee
from ParkingTransactions
group by car_id),

cte2 as (select car_id, most_time_lot
from 
(select 
    car_id, 
    lot_id as most_time_lot,
    rank() over(partition by car_id order by sum(timestampdiff(minute, entry_time, exit_time))/60 desc) as rnk
from ParkingTransactions
group by car_id, lot_id) tmp 
where rnk=1)

select cte1.car_id, total_fee_paid, avg_hourly_fee, most_time_lot
from cte1
join cte2 
using(car_id)
order by 1 asc

```