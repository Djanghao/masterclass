# Most easy solution

**Author:** ashish98365
**Votes:** 1
**Link:** [https://leetcode.com/problems/immediate-food-delivery-i/solutions/3471746/](https://leetcode.com/problems/immediate-food-delivery-i/solutions/3471746/)

---

# SQL Server Query
```
select round(count(*)*100.0/(select count(*) from delivery), 2) as
immediate_percentage from delivery 
where order_date = customer_pref_delivery_date
```