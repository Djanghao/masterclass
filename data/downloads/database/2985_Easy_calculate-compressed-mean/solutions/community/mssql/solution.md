# Simple Optimized Solution. Beats 100%

**Author:** sharan441
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-compressed-mean/solutions/5712879/](https://leetcode.com/problems/calculate-compressed-mean/solutions/5712879/)

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
```mssql []
/* Write your T-SQL query statement below */


select round(sum(item_count*order_occurrences*1.0)/sum(order_occurrences),2) as average_items_per_order
from orders
```