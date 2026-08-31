# Intuitive oracle sql

**Author:** psonlinux
**Votes:** 1
**Link:** [https://leetcode.com/problems/warehouse-manager/solutions/1198063/](https://leetcode.com/problems/warehouse-manager/solutions/1198063/)

---

```
select W.name as warehouse_name, sum(W.units * P.Width * P.Length * P.Height) as volume
from Warehouse W
join Products P
on W.product_id = P.product_id
group by W.name
```