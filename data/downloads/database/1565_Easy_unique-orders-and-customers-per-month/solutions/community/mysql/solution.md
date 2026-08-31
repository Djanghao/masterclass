# Easy solution with substring() and count()

**Author:** swagodz
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/3525439/](https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/3525439/)

---

# Code
```
# Write your MySQL query statement below
select substring(order_date, 1, 7) as month, count(order_id) as order_count, count(distinct(customer_id)) as customer_count 
from Orders
where invoice > 20
group by 1
```