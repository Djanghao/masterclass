# Simple Solution

**Author:** krex0r
**Votes:** 26
**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solutions/2559224/](https://leetcode.com/problems/highest-grade-for-each-student/solutions/2559224/)

---

First, we want to know the the best grade for each student with

```sql
SELECT student_id, MAX(grade) AS grade
FROM Enrollments
GROUP BY student_id
```

Than we want to select the student, the smallest course ID and the grade **where** the student ID and the grade is in the previous table:

```sql
SELECT student_id, MIN(course_id) AS course_id, grade
FROM Enrollments
WHERE (student_id, grade) IN
(
    # Previous table
)
GROUP BY student_id
```

We need to `[R]eturn the result table ordered by student_id in ascending order`.  
We can do it like this:

```sql
ORDER BY student_id ASC
```

So the final result is:

```sql
SELECT student_id, MIN(course_id) AS course_id, grade
FROM Enrollments
WHERE (student_id, grade) IN
(
    SELECT student_id, MAX(grade)
    FROM Enrollments
    GROUP BY student_id
)
GROUP BY student_id
ORDER BY student_id ASC
```