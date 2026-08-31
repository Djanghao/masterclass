# MYSQL simple with UNION

**Author:** niloufar_i
**Votes:** 3
**Link:** [https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/1605171/](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/1605171/)

---

```
# include all the 0's first, then union with the 1's
(select * from Orders  where order_type=0)
union 
(select * from Orders where order_type=1
and customer_id not in 
(select customer_id from Orders  where order_type=0) )
```