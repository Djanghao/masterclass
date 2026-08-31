# faster than 100% in memory and time

**Author:** kavitajain09
**Votes:** 1
**Link:** [https://leetcode.com/problems/students-with-invalid-departments/solutions/1826930/](https://leetcode.com/problems/students-with-invalid-departments/solutions/1826930/)

---

select s.id, s.name 
from students s
where department_id not in (select id from departments)