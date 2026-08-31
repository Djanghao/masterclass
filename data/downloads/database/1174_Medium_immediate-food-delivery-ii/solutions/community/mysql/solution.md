# Super Easy Solution

**Author:** himanshu__mehra__
**Votes:** 308
**Link:** [https://leetcode.com/problems/immediate-food-delivery-ii/solutions/3719319/](https://leetcode.com/problems/immediate-food-delivery-ii/solutions/3719319/)

---

# Code
```
Select 
    round(avg(order_date = customer_pref_delivery_date)*100, 2) as immediate_percentage
from Delivery
where (customer_id, order_date) in (
  Select customer_id, min(order_date) 
  from Delivery
  group by customer_id
);
```