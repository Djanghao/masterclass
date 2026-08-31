# EASY SOLUTION WITH GROUP BY , HAVING()

**Author:** ShakhDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/customer-order-frequency/solutions/3092809/](https://leetcode.com/problems/customer-order-frequency/solutions/3092809/)

---

# Code
```
SELECT c.customer_id, c.name
FROM Customers c JOIN Orders o ON c.customer_id=o.customer_id
JOIN Product p ON o.product_id=p.product_id
GROUP BY c.customer_id, c.name
HAVING
    SUM(CASE WHEN MONTH(order_date) = 06 THEN quantity*price END) >= 100
        AND SUM(CASE WHEN MONTH(order_date) = 07 THEN quantity*price END) >= 100


```