# not so many lines

**Author:** bat_er
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-top-scoring-students/solutions/5334428/](https://leetcode.com/problems/find-top-scoring-students/solutions/5334428/)

---


# Code
```
-- Write your PostgreSQL query statement below
select s.student_id
from students s
join courses c on s.major=c.major
left join enrollments e on s.student_id=e.student_id and c.course_id=e.course_id
group by 1
having sum(case when e.grade='A' then 1 else 0 end)=count(*)
order by 1
```