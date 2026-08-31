# Simple Solution - no CTE, no Subquery - faster than 96%

**Author:** lisayang0620
**Votes:** 27
**Link:** [https://leetcode.com/problems/customer-order-frequency/solutions/1049759/](https://leetcode.com/problems/customer-order-frequency/solutions/1049759/)

---


```
SELECT c.customer_id, c.name
  FROM Orders o
  JOIN Product p
    ON o.product_id = p.product_id
  JOIN Customers c
    ON o.customer_id = c.customer_id
 GROUP BY o.customer_id
HAVING SUM(CASE WHEN YEAR(order_date)=2020 AND MONTH(order_date) = 06 THEN quantity*price END) >= 100
   AND SUM(CASE WHEN YEAR(order_date)=2020 AND MONTH(order_date) = 07 THEN quantity*price END) >= 100
  ```