# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 52
**Link:** [https://leetcode.com/problems/customers-who-bought-all-products/solutions/3865452/](https://leetcode.com/problems/customers-who-bought-all-products/solutions/3865452/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */
SELECT customer_id FROM Customer GROUP BY customer_id HAVING 

COUNT(DISTINCT product_key) = (SELECT COUNT(*) FROM Product)
```
![5kej8w.jpg](./images/0.jpeg)
