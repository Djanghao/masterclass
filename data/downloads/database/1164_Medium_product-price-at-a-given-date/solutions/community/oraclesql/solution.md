# Simply using FIRST_VALUE()

**Author:** ashwanisingh_1
**Votes:** 6
**Link:** [https://leetcode.com/problems/product-price-at-a-given-date/solutions/3825771/](https://leetcode.com/problems/product-price-at-a-given-date/solutions/3825771/)

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
SELECT 
  product_id, FIRST_VALUE(new_price) OVER(PARTITION BY product_id ORDER BY change_date DESC) AS price 
  FROM Products
WHERE change_date <= '2019-08-16'
UNION
SELECT 
  DISTINCT product_id, 10 AS price FROM Products
WHERE product_id NOT IN (SELECT product_id FROM Products WHERE change_date <= '2019-08-16');
```