# Simple solution using Count window function

**Author:** girishcsawant
**Votes:** 0
**Link:** [https://leetcode.com/problems/status-of-flight-tickets/solutions/5437563/](https://leetcode.com/problems/status-of-flight-tickets/solutions/5437563/)

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
with booking_count as (
select passenger_id, flight_id, count(flight_id) over(partition by flight_id order by booking_time asc) as booking_count
from (
    select passenger_id, flight_id, booking_time, 1 as count
    from Passengers p 
) t
)
select passenger_id, 
case when booking_count <= f.capacity then 'Confirmed' else 'Waitlist' end as status
from booking_count bc
join flights f on bc.flight_id = f.flight_id
order by passenger_id asc
```