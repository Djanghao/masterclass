# IN with subqueries

**Author:** austinmclaughlin1
**Votes:** 1
**Link:** [https://leetcode.com/problems/customer-order-frequency/solutions/5592029/](https://leetcode.com/problems/customer-order-frequency/solutions/5592029/)

---


# Code
```
SELECT customer_id, name 
FROM Customers 
WHERE customer_id IN (
    SELECT customer_id
    FROM (SELECT * FROM Orders WHERE EXTRACT(MONTH FROM order_date) = 6 AND EXTRACT(YEAR FROM order_date) = 2020) 
    JOIN Product USING(product_id)
    GROUP BY customer_id
    HAVING SUM((quantity * price)) >= 100
) AND customer_id IN (
    SELECT customer_id
    FROM (SELECT * FROM Orders WHERE EXTRACT(MONTH FROM order_date) = 7 AND EXTRACT(YEAR FROM order_date) = 2020) 
    JOIN Product USING(product_id)
    GROUP BY customer_id
    HAVING SUM((quantity * price)) >= 100
)
```