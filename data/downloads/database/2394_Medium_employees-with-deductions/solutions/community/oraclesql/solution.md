# Oracle | Sum | Ceil | nvl | max | left join

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/employees-with-deductions/solutions/5637239/](https://leetcode.com/problems/employees-with-deductions/solutions/5637239/)

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
    e.employee_id
from
    employees e
left join
    logs l on e.employee_id = l.employee_id
having 
    sum(ceil(nvl((l.out_time - l.in_time),0)*24*60)) < max(e.needed_hours*60)
group by
    e.employee_id
```