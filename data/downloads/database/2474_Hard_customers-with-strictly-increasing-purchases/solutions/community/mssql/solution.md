# [MsSQL] Just group by & having

**Author:** yuanzhi247012
**Votes:** 16
**Link:** [https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/2828848/](https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/2828848/)

---

1. Get yearly purchases for all customers using group by
2. Left join each year with its  "+1 year" that has strictly bigger purchase. If +1 year doesn't exists or exists but the purchase is not strictly bigger, NULL will be joined. 
3. Do group by & having on #2. The last year will always join with NULL value on "+1 year", other years must all join with NOT-NULL value. Count the number of "NULL" value on "+1 year", if valid, the count must be 1.

```
-- purchase of each customer by year
with yearly as
(select customer_id, year(max(order_date)) year, sum(price) price
from orders
group by year(order_date),customer_id)
-- "left" join each year with its +1 year, and has strictly bigger purchase on +1 year.
select y1.customer_id
from yearly y1
left join yearly y2 on y1.customer_id=y2.customer_id and y1.year+1=y2.year and y1.price<y2.price
group by y1.customer_id
having count(*)-count(y2.customer_id)=1
```