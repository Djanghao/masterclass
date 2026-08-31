# Oracle | CTE | Rank

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5560700/](https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5560700/)

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
/* Write your PL/SQL query statement below */
with cte as
    (select
        departure_airport as airport_id,
        flights_count
    from
        flights
    union all
    select
        arrival_airport as airport_id,
        flights_count
    from
        flights)
,cte2 as
    (select
        airport_id,
        rank() over (order by sum(flights_count)desc) as rnk
    from
        cte
    group by
        airport_id)

select
    airport_id
from
    cte2
where
    rnk = 1
    


    
```