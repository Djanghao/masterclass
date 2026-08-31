# Simple solution in MSSQL

**Author:** Bansalvikrant
**Votes:** 2
**Link:** [https://leetcode.com/problems/fix-product-name-format/solutions/1263941/](https://leetcode.com/problems/fix-product-name-format/solutions/1263941/)

---

```
/* Write your T-SQL query statement below */
SELECT 
LOWER(TRIM(product_name)) AS PRODUCT_NAME, 
FORMAT(sale_date, 'yyyy-MM') AS SALE_DATE, 
COUNT(*) AS TOTAL
FROM Sales
GROUP BY LOWER(TRIM(product_name)), FORMAT(sale_date, 'yyyy-MM')
ORDER BY LOWER(TRIM(product_name)), FORMAT(sale_date, 'yyyy-MM') ASC
```
