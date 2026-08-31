# Simple Solution

**Author:** YuB85
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-top-scoring-students/solutions/5291714/](https://leetcode.com/problems/find-top-scoring-students/solutions/5291714/)

---

# Code
```
select   s.student_id   
from students s
    join courses c on s.major = c.major
    left join enrollments e on s.student_id = e.student_id
                           and c.course_id = e.course_id
                           and e.grade = 'A'
group by s.student_id
having count(c.name) = count(e.grade)
```