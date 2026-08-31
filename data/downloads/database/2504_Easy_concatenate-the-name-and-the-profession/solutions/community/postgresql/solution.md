# PostgreSQL: concat + left

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/5156648/](https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/5156648/)

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
    person_id,
    concat(name || '(' || left(profession, 1) || ')') as name
from Person
order by 1 desc
```