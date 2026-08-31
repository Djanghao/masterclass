# Very Easy MS SQL Server Solution using MAX()

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-salaries/solutions/4629591/](https://leetcode.com/problems/find-latest-salaries/solutions/4629591/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
As it is stated in the problem that employee's salary is increasing every year, so always the max(salary) will be his current / latest salary.


# Code
```
select emp_id,firstname,lastname,max(salary) as "salary",department_id 
from Salary
group by emp_id,firstname,lastname,department_id
```