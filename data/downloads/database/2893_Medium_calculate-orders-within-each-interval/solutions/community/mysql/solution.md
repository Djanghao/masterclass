# Simple solution using CEIL

**Author:** engineeringanalyst
**Votes:** 7
**Link:** [https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/4137747/](https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/4137747/)

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
# Write your MySQL query statement below
WITH Intervals AS
(
    SELECT
        *,
        CEIL(minute/6) AS interval_no
    FROM Orders
)
SELECT
    interval_no,
    SUM(order_count) AS total_orders
FROM Intervals
GROUP BY interval_no
ORDER BY interval_no;
```