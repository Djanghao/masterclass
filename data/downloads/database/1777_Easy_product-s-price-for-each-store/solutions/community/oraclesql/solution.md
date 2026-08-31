# Oracle | PIVOT | Easiest Solution

**Author:** TK-X
**Votes:** 2
**Link:** [https://leetcode.com/problems/products-price-for-each-store/solutions/2434274/](https://leetcode.com/problems/products-price-for-each-store/solutions/2434274/)

---

```
select *
from Products
pivot
(
      sum(price)
      FOR store IN ('store1' as store1, 'store2' as store2, 'store3' as store3)
)
```