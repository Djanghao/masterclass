# Straightforward MSSQL beats 99%

**Author:** wtrautmann
**Votes:** 8
**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/1972322/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/1972322/)

---

```
SELECT
    o.customer_id,
    c.customer_name
FROM
    Orders as o
LEFT JOIN
    Customers as c
ON
    c.customer_id = o.customer_id
GROUP BY
    o.customer_id, c.customer_name
HAVING
    SUM(CASE WHEN o.product_name='A' THEN 1 ELSE 0 END) >=1 AND 
    SUM(CASE WHEN o.product_name='B' THEN 1 ELSE 0 END) >=1 AND 
    SUM(CASE WHEN o.product_name='C' THEN 1 ELSE 0 END) = 0
ORDER BY customer_id    
```

![image](./images/0.png)
