# Simple MySQL Solution | Using SELF JOIN

**Author:** deb_dutta_
**Votes:** 177
**Link:** [https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/1923203/](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/1923203/)

---

```
select mgr.employee_id, mgr.name, COUNT(emp.employee_id) as reports_count, ROUND(AVG(emp.age)) as average_age
from employees emp join employees mgr
on emp.reports_to = mgr.employee_id
group by employee_id
order by employee_id

# Do upvote if you like the solution
```