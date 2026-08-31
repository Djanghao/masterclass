# Oracle | Subquery | From dual

**Author:** WearingThin
**Votes:** 1
**Link:** [https://leetcode.com/problems/immediate-food-delivery-i/solutions/3894242/](https://leetcode.com/problems/immediate-food-delivery-i/solutions/3894242/)

---


# Code
```
SELECT ROUND(
  (SELECT COUNT(*) FROM delivery WHERE order_date = customer_pref_delivery_date ) * 100 /
  (SELECT COUNT(*) FROM delivery), 2) AS immediate_percentage
FROM dual
```