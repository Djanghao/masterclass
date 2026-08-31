# Straightforward JOIN: no subquery or window function

**Author:** playgames3
**Votes:** 11
**Link:** [https://leetcode.com/problems/the-most-recent-three-orders/solutions/763685/](https://leetcode.com/problems/the-most-recent-three-orders/solutions/763685/)

---

**SELF JOIN:**
```
SELECT
 c.name AS customer_name, o1.customer_id, o1.order_id, o1.order_date
FROM
 orders o1
 LEFT JOIN
      orders o2
      ON o1.customer_id = o2.customer_id
      AND o1.order_date < o2.order_date
 INNER JOIN
       customers c
       ON o1.customer_id = c.customer_id
GROUP BY
 o1.customer_id, c.name, o1.order_id, o1.order_date
HAVING
 COUNT(o2.order_date) <= 2
ORDER BY
 c.name, o1.customer_id, o1.order_date desc
 ```
