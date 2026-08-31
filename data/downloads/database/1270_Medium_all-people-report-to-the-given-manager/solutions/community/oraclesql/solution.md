# Oracle easy solution using recursive CTE

**Author:** roadytom
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/5880550/](https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/5880550/)

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
```oraclesql []

with emp_cte(employee_id, manager_id) as 
(
    select employee_id, manager_id from employees
    where manager_id=1 and employee_id!=1
    union all
    select employees.employee_id, employees.manager_id from employees
    join emp_cte on emp_cte.employee_id=employees.manager_id
)
select employee_id from emp_cte
```