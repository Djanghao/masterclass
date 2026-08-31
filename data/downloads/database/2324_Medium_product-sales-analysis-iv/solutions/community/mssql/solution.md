# CTE

**Author:** likilikhith87
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-iv/solutions/5785419/](https://leetcode.com/problems/product-sales-analysis-iv/solutions/5785419/)

---


```mssql []
WITH t1 AS (
SELECT *, DENSE_RANK()OVER(PARTITION BY user_id ORDER BY s DESC) as x
FROM(
SELECT user_id, p.product_id, SUM(price * quantity) as s
FROM Sales s 
JOIN Product p 
ON s.product_id = p.product_id
GROUP BY user_id, p.product_id) as xx )

SELECT user_id, product_id
FROM t1
WHERE x = 1
```