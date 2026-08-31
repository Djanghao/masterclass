# MySQL subquery

**Author:** lianj
**Votes:** 32
**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/790133/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/790133/)

---

```
select b.product_name, a.product_id, a.order_id, a.order_date from Orders a
join Products b
on a.product_id = b.product_id
where (a.product_id, a.order_date) in (
select product_id, max(order_date) as order_date
from Orders
group by product_id)
order by b.product_name, a.product_id, a.order_id
```

logistics: 
* filter out the product_id and the latest date of each of the product
* filter out the records from original orders table
* join the products table to get required information