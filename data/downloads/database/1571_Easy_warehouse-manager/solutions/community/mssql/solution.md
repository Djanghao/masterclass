# CTE & Left Join

**Author:** Srini_Coder
**Votes:** 0
**Link:** [https://leetcode.com/problems/warehouse-manager/solutions/4312164/](https://leetcode.com/problems/warehouse-manager/solutions/4312164/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your T-SQL query statement below */
/* Caluclate the each product volume */
with CT1 as 
(Select Product_ID, Sum(width * Length * Height) as Prd_Volume
 from Products
 group by Product_id)


select name as warehouse_name, Sum (w.Units * c.Prd_volume) as volume
from warehouse W join Ct1 C on w.product_ID = c.Product_ID
group by w.name

```