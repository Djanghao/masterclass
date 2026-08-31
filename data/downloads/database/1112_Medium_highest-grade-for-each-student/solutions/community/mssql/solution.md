# CTE + window function

**Author:** PeterHontaru
**Votes:** 2
**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solutions/1369943/](https://leetcode.com/problems/highest-grade-for-each-student/solutions/1369943/)

---

```
WITH rank AS (
SELECT student_id, course_id, grade,
    RANK() OVER (PARTITION BY student_id ORDER BY grade desc, course_id) as rank
FROM Enrollments)

SELECT student_id, course_id, grade
FROM rank
WHERE rank = 1
```