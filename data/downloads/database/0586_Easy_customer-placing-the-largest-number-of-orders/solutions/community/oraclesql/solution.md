# ✅ 100% EASY || FAST 🔥|| CLEAN  SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 9
**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/3857346/](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/3857346/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !


# Code
```
/* Write your PL/SQL query statement below */
SELECT  customer_number FROM (SELECT customer_number, COUNT(*)

FROM orders GROUP BY  customer_number  ORDER BY  2 DESC)

WHERE  ROWNUM = 1;
```
![5kej8w.jpg](./images/0.jpeg)