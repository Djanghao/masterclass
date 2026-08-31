# Oracle | Max | Group by

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-salaries/solutions/5347711/](https://leetcode.com/problems/find-latest-salaries/solutions/5347711/)

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
    emp_id,
    firstname,
    lastname,
    max(salary) as salary,
    department_id
from
    salary
group by
    emp_id,
    firstname,
    lastname,
    department_id
order by
    1

```