# Oracle | CTE | Rank | Partition By

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5632144/](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5632144/)

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
        city_id,
        day,
        degree,
        rank() over (partition by city_id order by degree desc,day asc) as rnk
    from
        weather)

select
    city_id,
    to_char(day,'yyyy-mm-dd') as day,
    degree
from
    cte
where
    rnk = 1
```