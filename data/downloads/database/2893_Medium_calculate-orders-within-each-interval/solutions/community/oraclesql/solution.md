# Oracle | Mod | Sum

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/5641792/](https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/5641792/)

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
select
    interval_no,
    total_orders
from
    (select
        minute/6 as interval_no,
        mod(minute,6) as mod_6,
        sum(order_count) over (order by minute range 5 preceding) as total_orders
    from
        orders)
where
    mod_6 = 0

```