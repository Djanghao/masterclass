# MSSQL Solution

**Author:** vdmhunter
**Votes:** 9
**Link:** [https://leetcode.com/problems/sales-analysis-iii/solutions/2152778/](https://leetcode.com/problems/sales-analysis-iii/solutions/2152778/)

---

```
SELECT
    product_id,
    product_name
FROM
    Product
WHERE
    product_id IN
    (
        SELECT
            product_id
        FROM
            Sales
        GROUP BY
            product_id
        HAVING
            MAX(sale_date) <= '2019-03-31'
            AND MIN(sale_date) >= '2019-01-01'
    )
```