# CTE and Window Function - faster than 85%

**Author:** PeterHontaru
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/1355102/](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/1355102/)

---


```
/* Write your T-SQL query statement below */
WITH fav_product AS(
SELECT customer_id, product_id, COUNT(product_id) as orders, DENSE_RANK() OVER (PARTITION BY customer_id  ORDER BY COUNT(product_id) DESC) as rank
FROM Orders
GROUP BY customer_id, product_id
)
    
SELECT f.customer_id, f.product_id, p.product_name
FROM fav_product as f
JOIN Products as p
    ON p.product_id = f.product_id
WHERE rank = 1
```