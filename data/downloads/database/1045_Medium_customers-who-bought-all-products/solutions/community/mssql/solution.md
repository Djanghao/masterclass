# Super Easy approach.

**Author:** Lovepreet12a
**Votes:** 8
**Link:** [https://leetcode.com/problems/customers-who-bought-all-products/solutions/3601333/](https://leetcode.com/problems/customers-who-bought-all-products/solutions/3601333/)

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
/* Write your T-SQL query statement below */

SELECT customer_id 
FROM Customer C
GROUP BY customer_id
HAVING COUNT(DISTINCT(product_key)) = (SELECT COUNT(DISTINCT(product_key)) FROM Product)

```