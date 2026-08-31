# Very complicated Solution

**Author:** 8asokagowda
**Votes:** 2
**Link:** [https://leetcode.com/problems/project-employees-iii/solutions/307499/](https://leetcode.com/problems/project-employees-iii/solutions/307499/)

---

Select p1.* from Project as p1 join Employee e1 on p1.employee_id=e1.employee_id
and (p1.project_id,e1.experience_years) IN
(Select p.project_id,MAX(e.experience_years) as years from Project as p join
Employee e on p.employee_id=e.employee_id group by p.project_id)