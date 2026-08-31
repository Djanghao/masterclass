# PostgreSQL: left join on conditions + coalesce

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/npv-queries/solutions/5156702/](https://leetcode.com/problems/npv-queries/solutions/5156702/)

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
select q.id, q.year, coalesce(n.npv, 0) as npv
from Queries q left join NPV n
    on q.id = n.id
    and q.year = n.year
```