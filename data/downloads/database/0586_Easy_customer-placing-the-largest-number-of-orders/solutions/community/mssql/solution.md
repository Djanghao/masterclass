# Better than 99.96, mssql, Easiest

**Author:** Ankita_Piia
**Votes:** 24
**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/2335261/](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/2335261/)

---

```
select top 1 customer_number
 from orders
 group by customer_number
 order by count(customer_number) desc
 
 ```