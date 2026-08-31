# EASY self join

**Author:** Shafik46
**Votes:** 1
**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/5574767/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/5574767/)

---


# Code
```
select DISTINCT C.customer_id,C.CUSTOMER_NAME 
from Customers c join orders O1 on c.customer_id = o1.customer_id
join orders o2 on c.customer_id = o2.customer_id
where o1.product_name = 'A' ANd o2.product_name = 'B'
AND c.customer_id not in (select customer_id from orders where PRODUCT_NAME = 'C')
ORDER BY C.CUSTOMER_ID
```