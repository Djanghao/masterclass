# MS SQL Solution, Beats 82.02%. with, iif, round

**Author:** Kristina_m
**Votes:** 8
**Link:** [https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5569233/](https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5569233/)

---

# Code
```
/* Write your T-SQL query statement below */
with New as (
    select 
        distinct customer_id, 
        min(order_date) as order_date, 
        min(customer_pref_delivery_date) as customer_pref_delivery_date
    from Delivery
    group by customer_id
)

select
round(sum(iif(order_date=customer_pref_delivery_date, 100.0, 0)) / count(order_date), 2)
as immediate_percentage
from New

```

![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2024-07-29 \u0432 12.00.00.png](./images/0.png)
