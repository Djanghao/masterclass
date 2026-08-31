# Oracle | Rank | Partition By

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/5560494/](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/5560494/)

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
    order_id,
    customer_id,
    order_type
from
    (select
        order_id,
        customer_id,
        order_type,
        rank() over (partition by customer_id order by order_type asc) as rnk
    from
        orders)
where
    rnk = 1

```