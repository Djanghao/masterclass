# simple solution without cte

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/5953353/](https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/5953353/)

---



# Code
```postgresql []
-- Write your PostgreSQL query statement below
select
    to_char(order_date, 'YYYY-MM') as month,
    count(distinct order_id) as order_count,
    count(distinct customer_id) as customer_count
from orders
where invoice > 20
group by 1
```