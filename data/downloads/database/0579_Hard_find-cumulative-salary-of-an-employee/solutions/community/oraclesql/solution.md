# Simple Oracle Accepted Solution using analytical function

**Author:** NavjotMannan
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/440244/](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/440244/)

---

select id, month,sum(salary) over(partition by id order by month rows between 2 preceding and 0 following) AS "salary"
from
Employee
where (id, month) not in (select id, max(month) from employee group by id)
order  by id, month desc;