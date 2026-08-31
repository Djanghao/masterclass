# Esay solution

**Author:** AndersenQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/warehouse-manager/solutions/5610044/](https://leetcode.com/problems/warehouse-manager/solutions/5610044/)

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
select
name as warehouse_name, coalesce(sum(a.units * b.width * b.length * b.height)) as volume
from Warehouse a
left join products b
on a.product_id = b.product_id
group by 1