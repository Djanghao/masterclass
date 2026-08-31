# CTE join

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/manager-of-the-largest-department/solutions/5762773/](https://leetcode.com/problems/manager-of-the-largest-department/solutions/5762773/)

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
```mssql []
/* Write your T-SQL query statement below */
with CTE as(
select dep_id, rank() over(order by count(*) desc)'r'
from Employees
group by dep_id )
select e.emp_name 'manager_name', c.dep_id
from CTE c
join Employees e on c.dep_id = e.dep_id
where r = 1 and e.position = 'manager'
order by c.dep_id
```