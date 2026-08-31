# Using Ceiling

**Author:** SahithiVemparala
**Votes:** 3
**Link:** [https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/4197904/](https://leetcode.com/problems/calculate-orders-within-each-interval/solutions/4197904/)

---



# Code
```
/* Write your T-SQL query statement below */

select ceiling(minute/6.0) as interval_no, sum(order_count) as total_orders
from orders
group by ceiling(minute/6.0)
order by interval_no
```