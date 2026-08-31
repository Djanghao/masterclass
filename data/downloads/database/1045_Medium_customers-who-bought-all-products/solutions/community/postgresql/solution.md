# Simple Solution using ARRAY_AGG()

**Author:** Daniel_Charles_J
**Votes:** 5
**Link:** [https://leetcode.com/problems/customers-who-bought-all-products/solutions/5749191/](https://leetcode.com/problems/customers-who-bought-all-products/solutions/5749191/)

---


# Approach
Not used count of the products, Instead Ensured exact items are present or not. Using ARRAY_AGG() function aggreagted all the product_id then compared with the Product table.

If we tried to match with Counts, may be fail in some other test cases, here this won't fail at any cost


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT c.customer_id FROM Customer c LEFT JOIN Product p ON c.product_key = p.product_key 
GROUP BY c.customer_id 
HAVING ARRAY(SELECT product_key FROM Product ORDER BY product_key)  <@ ARRAY_AGG(c.product_key)ORDER BY 1
```