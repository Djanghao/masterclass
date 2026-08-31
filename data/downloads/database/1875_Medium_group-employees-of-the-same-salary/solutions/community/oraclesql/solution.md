# Oracle | Dense Rank | Subquery

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/5535809/](https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/5535809/)

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
    employee_id,
    name,
    salary,
    dense_rank() over (order by salary asc) as team_id
from
    employees
where
    salary not in (select salary from employees having count(salary) = 1 group by salary )
order by
    4 asc ,1 asc

```