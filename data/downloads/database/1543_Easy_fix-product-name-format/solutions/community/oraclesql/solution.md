# [ALL DB] Accepted solution

**Author:** yurokusa
**Votes:** 2
**Link:** [https://leetcode.com/problems/fix-product-name-format/solutions/1048384/](https://leetcode.com/problems/fix-product-name-format/solutions/1048384/)

---

Oracle
```
select trim(lower(product_name)) product_name
    , to_char(sale_date, 'YYYY-MM') sale_date
    , count(sale_id) total
from Sales
group by trim(lower(product_name))
    , to_char(sale_date, 'YYYY-MM')
order by 1, 2
```
MySQL
```
select trim(lower(product_name)) product_name
    , date_format(sale_date, '%Y-%m') sale_date
    , count(sale_id) total
from Sales
group by 1, 2
order by 1, 2
```
MSSQL
```
select trim(lower(product_name)) product_name
    , left(sale_date, 7) sale_date
    , count(sale_id) total
from Sales
group by trim(lower(product_name))
    , left(sale_date, 7)
order by 1, 2
```