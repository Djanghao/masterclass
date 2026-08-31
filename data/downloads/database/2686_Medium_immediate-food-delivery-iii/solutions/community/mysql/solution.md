# [MySQ] simple GROUP BY, no JOIN or CASE WHEN

**Author:** BuDongJiuWen
**Votes:** 6
**Link:** [https://leetcode.com/problems/immediate-food-delivery-iii/solutions/3565541/](https://leetcode.com/problems/immediate-food-delivery-iii/solutions/3565541/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
For average value, function `AVG()` can take a condition as its parameter.

# Code
```
# Write your MySQL query statement below

SELECT  order_date,
        ROUND(AVG(order_date = customer_pref_delivery_date)*100,2) AS immediate_percentage
FROM Delivery
GROUP BY order_date
ORDER BY 1
```