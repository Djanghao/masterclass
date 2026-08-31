# Easy Oracle Solution

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/manager-of-the-largest-department/solutions/5953886/](https://leetcode.com/problems/manager-of-the-largest-department/solutions/5953886/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select emp_name as manager_name, emp_dtls.dep_id
from (select dep_id, rank() over(order by count(dep_id) desc) as dep_rank
from Employees
group by dep_id) emp_dtls
join
(select dep_id, emp_name
from Employees
where position = 'Manager') emps
on emp_dtls.dep_id = emps.dep_id
where dep_rank = 1
order by emp_dtls.dep_id
```