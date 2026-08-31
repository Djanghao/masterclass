# BEAT 99%, No CTE/Subquery.

**Author:** AndersenQ
**Votes:** 1
**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solutions/5694658/](https://leetcode.com/problems/highest-grade-for-each-student/solutions/5694658/)

---

# Intuition
using distinct and first value to pick the record instead using rank/dense_rank/row_number


# Code
```postgresql []
select 
distinct 
student_id, 
first_value(course_id)over(partition by student_id order by grade desc, course_id)  as course_id,
first_value(grade)over(partition by student_id order by grade desc) as grade
from Enrollments a
order by 1
```