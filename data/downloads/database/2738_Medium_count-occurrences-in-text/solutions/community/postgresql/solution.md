# Simple solution

**Author:** dpdacosta
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-occurrences-in-text/solutions/5104106/](https://leetcode.com/problems/count-occurrences-in-text/solutions/5104106/)

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

select 'bull' as word, count(*) as count
from Files
where content ilike '% bull %' 
union
select 'bear' as word, count(*) as count
from Files
where content ilike '% bear %' 
```