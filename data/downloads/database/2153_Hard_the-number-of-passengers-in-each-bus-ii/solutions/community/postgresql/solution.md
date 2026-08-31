# recursive cte

**Author:** user1397CM
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/5608905/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/5608905/)

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
```
-- Write your PostgreSQL query statement below

with recursive 
    cte1 as (select  p.passenger_id,  min(b.arrival_time) as departure_time
from buses b
join passengers p on b.arrival_time>=p.arrival_time
group by p.passenger_id
) , cte2 as (select b.bus_id, b.arrival_time, count(cte1.passenger_id) as total_passenger, 
b.capacity,
row_number() over (order by b.arrival_time) as rownum
from Buses b
left join cte1 on  cte1.departure_time=b.arrival_time
group by b.bus_id, b.arrival_time,b.capacity
order by rownum
) , cte3 as (
    select bus_id, rownum, 
    least(capacity, total_passenger) as boarding_psg, total_passenger-least(capacity, total_passenger) as remaining_passenger
    from cte2
    where rownum=1
    UNION ALL
    select cte2.bus_id, cte2.rownum, 
    least(cte2.capacity, cte2.total_passenger+cte3.remaining_passenger) as boarding_psg, (cte2.total_passenger+cte3.remaining_passenger)-least(cte2.capacity, cte2.total_passenger+cte3.remaining_passenger) as remaining_passenger
    from cte2,
    cte3
    where cte2.rownum= cte3.rownum+1

) select bus_id,  boarding_psg as passengers_cnt
from cte3
order by bus_id
```