# Simple step-wise breakdown of complex query. MySQL Solution

**Author:** tarsh333
**Votes:** 144
**Link:** [https://leetcode.com/problems/product-price-at-a-given-date/solutions/3695543/](https://leetcode.com/problems/product-price-at-a-given-date/solutions/3695543/)

---

# Approach
We can find the last price before 2019-08-16 for products whose price has been changed on or before this date simply by using:
```
select product_id, new_price as price from Products where (product_id,change_date) in (select product_id , max(change_date) as date from Products where change_date <='2019-08-16' group by product_id)
```
But, problem arises for the other product_id which do not have price change on or before this date. So we find those product_id and set their price as 10 using:
```
select distinct product_id, 10 as price from Products where product_id not in(select distinct product_id from Products where change_date <='2019-08-16' )
```
The final answer is union of these queries.

# Code
```
select distinct product_id, 10 as price from Products where product_id not in(select distinct product_id from Products where change_date <='2019-08-16' )
union 
select product_id, new_price as price from Products where (product_id,change_date) in (select product_id , max(change_date) as date from Products where change_date <='2019-08-16' group by product_id)

```