# simple window function

**Author:** PeterHontaru
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/1370329/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/1370329/)

---

```
WITH rank AS(
    SELECT order_id, product_id, order_date, 
    RANK() OVER (PARTITION BY product_id ORDER BY order_date desc) as rank
FROM Orders as o)

SELECT p.product_name, r.product_id,  r.order_id, r.order_date
FROM rank as r
JOIN products as p
    ON p.product_id = r.product_id AND r.rank = 1
ORDER BY product_name, r.product_id, r.order_id
```