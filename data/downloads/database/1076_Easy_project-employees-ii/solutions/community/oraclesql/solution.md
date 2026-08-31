# Oracle - group by and having

**Author:** zhou81
**Votes:** 1
**Link:** [https://leetcode.com/problems/project-employees-ii/solutions/1703203/](https://leetcode.com/problems/project-employees-ii/solutions/1703203/)

---

```
select project_id from project 
group by project_id 
having count(employee_id) = (select max(count(employee_id)) from project group by project_id)```