# Oracle | Cross Join

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-a-chemical-bond/solutions/5342353/](https://leetcode.com/problems/form-a-chemical-bond/solutions/5342353/)

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
/* Write your PL/SQL query statement below */
select
    m.symbol as metal,
    nm.symbol as nonmetal
from
    elements m
cross join
    elements nm
where
    m.type = 'Metal' and nm.type = 'Nonmetal'


```