# Using UNPIVOT

**Author:** namrathashenoy01
**Votes:** 11
**Link:** [https://leetcode.com/problems/rearrange-products-table/solutions/2031431/](https://leetcode.com/problems/rearrange-products-table/solutions/2031431/)

---

select product_id,store,price from Products
UNPIVOT
(
    price 
    for store in (store1,store2,store3)
) as unpivoting