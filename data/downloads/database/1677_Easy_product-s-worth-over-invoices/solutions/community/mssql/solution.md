# MSSQL: Don't forget those nulls

**Author:** pdesgrange
**Votes:** 2
**Link:** [https://leetcode.com/problems/products-worth-over-invoices/solutions/2285539/](https://leetcode.com/problems/products-worth-over-invoices/solutions/2285539/)

---

The left join is important in order to account for all product names even those without values.

Coalesce will return 0 if the SUM function returns a null. Don't forget this important step.  

```
SELECT DISTINCT p.name
	,COALESCE(SUM(i.rest), 0) AS rest
	,COALESCE(SUM(i.paid), 0) AS paid
	,COALESCE(SUM(i.canceled), 0) AS canceled
	,COALESCE(SUM(i.refunded), 0) AS refunded
FROM Product p
LEFT JOIN Invoice i ON p.product_id = i.product_id
GROUP BY p.name
ORDER BY p.name