# [ALL DB] Simple select for date format

**Author:** yurokusa
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/1047155/](https://leetcode.com/problems/unique-orders-and-customers-per-month/solutions/1047155/)

---

**Oracle**
```
select to_char(o.order_date, 'YYYY-MM') month
    , count(order_id) order_count
    , count(distinct customer_id) customer_count
from Orders o
where o.invoice > 20
group by to_char(o.order_date, 'YYYY-MM')
```
**MySQL**
```
select left(o.order_date, 7) month
    , count(order_id) order_count
    , count(distinct customer_id) customer_count
from Orders o
where o.invoice > 20
group by 1
```
**MSSQL**
```
select cast(o.order_date as varchar(7)) month
    , count(order_id) order_count
    , count(distinct customer_id) customer_count
from Orders o
where o.invoice > 20
group by cast(o.order_date as varchar(7))
```