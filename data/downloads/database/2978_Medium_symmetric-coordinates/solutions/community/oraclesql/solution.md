# Oracle | Row Number | Self Join

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/symmetric-coordinates/solutions/5647298/](https://leetcode.com/problems/symmetric-coordinates/solutions/5647298/)

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
with cte1 as
    (select
        x,
        y,
        row_number() over (order by x,y) as rn
    from
        coordinates),
cte2 as
    (select
        a.x as x1,
        a.y as y1,
        b.x as x2,
        b.y as y2
    from
        cte1 a
    join
        cte1 b on a.x = b.y and b.x = a.y and a.rn <> b.rn)

select
    distinct
    x1 as x,
    y1 as y
from
    cte2
where
    x1<= y1
order by 1

```