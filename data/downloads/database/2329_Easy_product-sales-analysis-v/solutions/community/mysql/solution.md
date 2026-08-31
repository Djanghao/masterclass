# [MySQL] Simple Solution

**Author:** dolong2110
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-sales-analysis-v/solutions/5063408/](https://leetcode.com/problems/product-sales-analysis-v/solutions/5063408/)

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
SELECT
    s.user_id,
    SUM(s.quantity * p.price) spending
FROM
    sales s
    JOIN product p
        ON s.product_id = p.product_id
GROUP BY
    s.user_id
ORDER BY
    spending DESC,
    s.user_id ASC;
```