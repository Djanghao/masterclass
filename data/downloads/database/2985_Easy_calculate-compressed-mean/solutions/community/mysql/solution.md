# [MySQL] Simple Solution

**Author:** dolong2110
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-compressed-mean/solutions/5058083/](https://leetcode.com/problems/calculate-compressed-mean/solutions/5058083/)

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
SELECT ROUND(
    SUM(item_count * order_occurrences) / 
    SUM(order_occurrences),
    2
) AS average_items_per_order
FROM Orders;
```