# SIMPLE | USING CTE & MIN() & Group By & Inner Join

**Author:** bamshankar130295
**Votes:** 58
**Link:** [https://leetcode.com/problems/product-sales-analysis-iii/solutions/5030652/](https://leetcode.com/problems/product-sales-analysis-iii/solutions/5030652/)

---

# Complexity
Time complexity: O(N)^2
where N is the number of rows satisfying the conditions.

# Space complexity: 
O(1)^2

# Code
```
# Write your MySQL query statement below

WITH CTE AS (
    SELECT product_id, MIN(year) AS minyear FROM Sales 
    GROUP BY product_id 
)

SELECT s.product_id, s.year AS first_year, s.quantity, s.price 
FROM Sales s
INNER JOIN CTE ON cte.product_id = s.product_id  AND s.year = cte.minyear; 
```
![download (1).jpg](./images/0.jpeg)
