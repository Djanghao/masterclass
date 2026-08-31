# Simple Ranking & comparison solution

**Author:** avinash2196
**Votes:** 1
**Link:** [https://leetcode.com/problems/status-of-flight-tickets/solutions/5856311/](https://leetcode.com/problems/status-of-flight-tickets/solutions/5856311/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
select  a.passenger_id,
        case
            when rank() over (partition by a.flight_id order by a.booking_time) <= b.capacity then 'Confirmed'
            else 'Waitlist'
        end as Status
from passengers a
     join flights b
        on a.flight_id = b.flight_id      
order by a.passenger_id
```