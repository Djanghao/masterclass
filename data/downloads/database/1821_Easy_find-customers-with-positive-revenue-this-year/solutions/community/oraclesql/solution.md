# oracle simple solution

**Author:** loco_fung
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/3062293/](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/3062293/)

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
select customer_id
from Customers c
where year=2021
group by customer_id
having sum(revenue)>0


```