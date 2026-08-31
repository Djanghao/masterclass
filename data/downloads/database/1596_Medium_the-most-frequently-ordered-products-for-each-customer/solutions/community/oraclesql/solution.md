# Oracle | Join | Rank | Partition By

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/5523805/](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/5523805/)

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
        o.customer_id,
        o.product_id,
        p.product_name,
        rank() over (partition by o.customer_id order by count(p.product_id) desc) as rnk
    from
        orders o
    join
        products p on p.product_id = o.product_id
    group by
        o.customer_id,
        o.product_id,
        p.product_name)

select
    customer_id,
    product_id,
    product_name
from
    cte
where
    rnk = 1
```