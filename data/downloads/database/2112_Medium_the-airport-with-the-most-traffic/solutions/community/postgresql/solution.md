# CTE  Only

**Author:** user1397CM
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5370899/](https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5370899/)

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
with cte as (
    select departure_airport as airport, flights_count
    from Flights
    union all
    select arrival_airport as airport, flights_count
    from Flights
),
cte1 as (
    select airport , sum(flights_count) as total_flights
from cte
group by airport
),
cte2 as (
select airport, dense_rank() over (order by total_flights desc) as rank
from cte1 
)
select airport as airport_id from cte2
where rank=1
```