# PostgresSQL: cross join with condition

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-a-chemical-bond/solutions/5147780/](https://leetcode.com/problems/form-a-chemical-bond/solutions/5147780/)

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
-- Write your PostgreSQL query statement below
select
    metals.symbol as metal,
    nonmetals.symbol as nonmetal
from Elements metals join Elements nonmetals
    on metals.type = 'Metal' and nonmetals.type = 'Nonmetal'
```