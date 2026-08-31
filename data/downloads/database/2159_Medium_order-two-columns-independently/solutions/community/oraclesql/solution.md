# Oracle | Row Number

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/order-two-columns-independently/solutions/5626877/](https://leetcode.com/problems/order-two-columns-independently/solutions/5626877/)

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
        first_col,
        row_number() over (order by first_col asc) as rnk1
    from
        data),
cte2 as
    (
        select 
            second_col,
            row_number() over (order by second_col desc) as rnk2
        from
            data
    )

select
    a.first_col,
    b.second_col
from
    cte1 a
join
    cte2 b on a.rnk1 = b.rnk2
```