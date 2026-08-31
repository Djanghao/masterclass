# PostgreSQL: select -> aggregate_func

**Author:** alek_leetc
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-compressed-mean/solutions/5162211/](https://leetcode.com/problems/calculate-compressed-mean/solutions/5162211/)

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
select
    round(
        sum(item_count * order_occurrences) / sum(order_occurrences)::decimal,
        2
    ) as average_items_per_order
from Orders
```