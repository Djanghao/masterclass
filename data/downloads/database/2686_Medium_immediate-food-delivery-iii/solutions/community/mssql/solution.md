# Derived Table + Case MSSQL

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5844936/](https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5844936/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT order_date
      ,round(sum(count_pref) * 100.0 / count(*), 2) immediate_percentage 
FROM (
    SELECT case when order_date = customer_pref_delivery_date then 1 else 0 end count_pref
          ,order_date
    FROM delivery
) x
group by x.order_date
order by x.order_date
```