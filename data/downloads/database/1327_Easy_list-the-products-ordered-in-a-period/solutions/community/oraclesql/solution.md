# Simple & Easy Solution Using Group by and Having Clause

**Author:** kumaravelmalayappan
**Votes:** 7
**Link:** [https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/4019472/](https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/4019472/)

---

# Code
```
/* Write your PL/SQL query statement below */
select p.product_name, sum(unit) as unit 
from products p 
join orders o on p.product_id = o.product_id 
where to_char(order_date, 'MON-YYYY') = 'FEB-2020' 
group by p.product_name 
having sum(unit ) >= 100
```