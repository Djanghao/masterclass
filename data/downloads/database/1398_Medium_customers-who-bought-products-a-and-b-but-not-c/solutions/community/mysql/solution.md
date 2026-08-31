# [MySQL] 3 standard solutions: 1) IN, 2) JOIN, 3) EXISTS

**Author:** miteanti
**Votes:** 8
**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/2550441/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/2550441/)

---

If this helps, please be my first upvoter!

**1) `IN` (633ms, beats 68%):**
```
SELECT * 
FROM Customers c
WHERE c.customer_id IN (SELECT customer_id FROM Orders WHERE product_name = 'A')
	AND c.customer_id IN (SELECT customer_id FROM Orders WHERE product_name = 'B')
	AND c.customer_id NOT IN (SELECT customer_id FROM Orders WHERE product_name = 'C')
```


**2) `JOIN` (527ms, beats 90%):**
```
SELECT DISTINCT c.* 
FROM Customers c
JOIN Orders oa 
	ON c.customer_id = oa.customer_id
	AND oa.product_name = 'A'
JOIN Orders ob 
	ON c.customer_id = ob.customer_id 
	AND ob.product_name = 'B'
LEFT JOIN Orders oc
	ON c.customer_id = oc.customer_id 
	AND oc.product_name = 'C'
WHERE oc.order_id IS NULL
```

**3) `EXISTS` (685ms, beats 59%):**
```
SELECT * 
FROM Customers c
WHERE EXISTS (
		SELECT * 
		FROM Orders oa
		WHERE c.customer_id = oa.customer_id
			AND oa.product_name = 'A'
	)
AND EXISTS (
		SELECT * 
		FROM Orders ob
		WHERE c.customer_id = ob.customer_id
			AND ob.product_name = 'B'
	)
AND NOT EXISTS (
		SELECT * 
		FROM Orders oc
		WHERE c.customer_id = oc.customer_id
			AND oc.product_name = 'C'
	)
```