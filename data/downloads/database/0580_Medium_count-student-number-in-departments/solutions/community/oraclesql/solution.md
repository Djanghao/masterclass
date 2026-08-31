# Count student ID in each department

**Author:** Karotka
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solutions/6121002/](https://leetcode.com/problems/count-student-number-in-departments/solutions/6121002/)

---


# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select d.dept_name, coalesce(count(student_id), 0) as student_number
from Department d
left join Student s
on d.dept_id  = s.dept_id 
group by dept_name   
order by student_number desc, dept_name
```