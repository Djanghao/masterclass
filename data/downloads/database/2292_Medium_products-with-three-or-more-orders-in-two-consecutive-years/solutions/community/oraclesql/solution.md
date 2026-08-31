# Scalable solution | Smart Solution | Faster than 100% | Two solutions

**Author:** minabeshay
**Votes:** 6
**Link:** [https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/2117835/](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/2117835/)

---

The trivial way to solve such problem is to perform self-join. 

At first you need to prepare your dataset by getting only the products per year's sales more than 3 times. Then you can apply the self join to get only the products with more than 3 sale times per year for at least two consecutive years.
```
/*Non scalable solution */


with purchases_per_year as (
    select product_id , to_char(purchase_date , 'yyyy') as purchase_year , count( order_id) number_of_purchases
    from orders
    group by product_id, to_char(purchase_date, 'yyyy')
    having count(order_id ) >=3
)
select distinct 
a.product_id
from 
purchases_per_year a inner join purchases_per_year b on a.product_id = b.product_id and a.purchase_year + 1 = b.purchase_year
```
The problem with this solution it doesn't scale if we need to check for 10 consecutive years.

Here is the idea, to group the consecutive years products. We can achieve that by applying `rank` window function and subtract it from the year so that any consecutive years will have the same result.

```
/* Scalable Solution */

with purchases_per_year as (
    select product_id , to_char(purchase_date , 'yyyy') as purchase_year , count( order_id) number_of_purchases
    from orders
    group by product_id, to_char(purchase_date, 'yyyy')
    having count(order_id ) >=3
)
select distinct product_id from (
select product_id, purchase_year - rank() over (partition by product_id order by purchase_year) rank_group 
    from purchases_per_year
)
group by product_id, rank_group
having count(11) >=2
```

If you made any benefit, thumbs up!
