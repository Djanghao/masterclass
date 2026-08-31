# Easy solution guys!! Check this out!!

**Author:** ravishankar324
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5888598/](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/5888598/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below
WITH CTE1 AS (
    SELECT 
        a.salesperson_id,
        SUM(b.price) AS amount
    FROM Customer AS a 
    INNER JOIN Sales AS b 
    ON a.customer_id = b.customer_id
    GROUp BY a.salesperson_id)

SELECT 
    a.salesperson_id,
    a.name,
    COALESCE(b.amount,0) AS total
FROm Salesperson AS a
LEFT JOIN CTE1 AS b 
ON a.salesperson_id = b.salesperson_id
```