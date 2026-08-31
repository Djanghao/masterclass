# Postgres : Left Inner Join, group by and count

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5244865/](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5244865/)

---


# Code
```
select 
    r1.driver_id as driver_id
  , count(distinct r2.ride_id) as cnt 
from 
  rides r1 left join rides r2 on r1.driver_id = r2.passenger_id
group by r1.driver_id
```