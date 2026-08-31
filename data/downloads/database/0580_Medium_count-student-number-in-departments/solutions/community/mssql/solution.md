# MSSQL & MySQL query statement

**Author:** feng0615
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solutions/2124544/](https://leetcode.com/problems/count-student-number-in-departments/solutions/2124544/)

---

Runtime: 743 ms, faster than 79.31% of MS SQL Server online submissions for Count Student Number in Departments.
Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Count Student Number in Departments.
```
/* Write your T-SQL query statement below */           # Write your MySQL query statement below
select distinct 
	dept_name, 
	count(student_id) over(partition by s.dept_id) as student_number 
from Department d 
	left join Student s on d.dept_id = s.dept_id
order by 2 desc
```