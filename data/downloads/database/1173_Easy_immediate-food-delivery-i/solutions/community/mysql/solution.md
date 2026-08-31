# MySQL simple solution

**Author:** ye15
**Votes:** 91
**Link:** [https://leetcode.com/problems/immediate-food-delivery-i/solutions/417926/](https://leetcode.com/problems/immediate-food-delivery-i/solutions/417926/)

---


```
SELECT ROUND(100*AVG(order_date = customer_pref_delivery_date), 2) AS immediate_percentage
FROM Delivery;
```