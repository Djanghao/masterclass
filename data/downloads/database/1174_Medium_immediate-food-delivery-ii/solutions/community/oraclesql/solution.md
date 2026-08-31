# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 10
**Link:** [https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5256367/](https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5256367/)

---



# Code
```
SELECT ROUND(COUNT (CASE WHEN A.order_date =

A.customer_pref_delivery_date THEN 1 ELSE NULL END ) * 100 / count(*),

2) immediate_percentage from delivery A WHERE A.order_date = 

(SELECT MIN(order_date) FROM  delivery B WHERE B.customer_id =

A.customer_id)
```
![5kej8w.jpg](./images/0.jpeg)
