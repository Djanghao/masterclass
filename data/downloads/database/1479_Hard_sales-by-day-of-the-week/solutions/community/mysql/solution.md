# Simple Pivotup Problem using CASE WHEN

**Author:** ishaan888
**Votes:** 4
**Link:** [https://leetcode.com/problems/sales-by-day-of-the-week/solutions/1881190/](https://leetcode.com/problems/sales-by-day-of-the-week/solutions/1881190/)

---

Its a simple pivot up problem solved using case when and join.

```
select item_category as CATEGORY, 
sum(case when DAYOFWEEK(order_date) = 2 then  quantity else 0 end ) as MONDAY,
sum(case when DAYOFWEEK(order_date) = 3 then  quantity else 0 end ) as TUESDAY, 
sum(case when DAYOFWEEK(order_date) = 4 then  quantity else 0 end ) as WEDNESDAY,
sum(case when DAYOFWEEK(order_date) = 5 then  quantity else 0 end ) as THURSDAY, 
sum(case when DAYOFWEEK(order_date) = 6 then  quantity else 0 end ) as FRIDAY, 
sum(case when DAYOFWEEK(order_date) = 7 then  quantity else 0 end ) as SATURDAY,
sum(case when DAYOFWEEK(order_date) = 1 then  quantity else 0 end ) as SUNDAY
from 
Orders o right join Items i on o.item_id = i.item_id 
group by 1 order by 1
```