# Simple and Easy Solution

**Author:** saini5259
**Votes:** 2
**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solutions/1592407/](https://leetcode.com/problems/highest-grade-for-each-student/solutions/1592407/)

---

select student_id,course_id,grade
from 
(
select a.*,
rank() over(partition by student_id order by grade desc,course_id) rn
from Enrollments a
) a where rn =1 
order by 1