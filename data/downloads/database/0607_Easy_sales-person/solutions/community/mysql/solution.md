# Beginner Logical Solution | Explanation

**Author:** sharaguilar
**Votes:** 194
**Link:** [https://leetcode.com/problems/sales-person/solutions/2661934/](https://leetcode.com/problems/sales-person/solutions/2661934/)

---

Started with the nested query first
```
 select s.name
    from SalesPerson s
        left join Orders o on s.sales_id = o.sales_id
        left join Company c on o.com_id = c.com_id
    where c.name = 'Red'
```
This queried all salespersons who is associated with the company Red
Then, I added the `NOT IN ` Where condition:

```
select s.name
from SalesPerson s
where s.name not in
    (select s.name
    from SalesPerson s
        left join Orders o on s.sales_id = o.sales_id
        left join Company c on o.com_id = c.com_id
    where c.name = 'Red')
```

*Please upvote if you find this helpful!*