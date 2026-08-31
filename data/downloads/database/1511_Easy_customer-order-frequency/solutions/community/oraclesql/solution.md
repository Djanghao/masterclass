# Beats 100% Oracle submissions (joins, subquery, case)

**Author:** Oleksandr-K
**Votes:** 0
**Link:** [https://leetcode.com/problems/customer-order-frequency/solutions/5720715/](https://leetcode.com/problems/customer-order-frequency/solutions/5720715/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Subquery returns total amounts for June and July 2020 in separate columns for each customer.

Main query returns subquery records with June and July amounts >=100$ each

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select
    customer_id,
    name
from (
        select
            orders.customer_id,
            name,
            sum(case when extract (year from order_date) = '2020' and extract (month from order_date) = '06' then price * quantity else 0 end) as June_2020,
            sum(case when extract (year from order_date) = '2020' and extract (month from order_date) = '07' then price * quantity else 0 end) as July_2020
        from orders
        join customers on orders.customer_id = customers.customer_id
        join product on orders.product_id = product.product_id
        group by orders.customer_id, name
) temp
where
    June_2020 >=100 and
    July_2020 >=100
```