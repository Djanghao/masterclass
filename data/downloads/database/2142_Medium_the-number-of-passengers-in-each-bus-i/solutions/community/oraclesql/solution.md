# Oracle | CTE | Rank | Sum

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5560888/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5560888/)

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
        p.passenger_id,
        b.bus_id,
        p.arrival_time as passenger_arrival,
        b.arrival_time as bus_arrival, 
        rank() over (partition by p.passenger_id order by p.arrival_time,b.arrival_time) as rnk
    from
        passengers p
    join
        buses b on p.arrival_time <= b.arrival_time)

select
    b.bus_id,
    nvl(count(c.passenger_id),0) as passengers_cnt
from
    buses b
left join
    cte c on b.bus_id = c.bus_id and c.rnk = 1
group by
    b.bus_id
order by
    1
```