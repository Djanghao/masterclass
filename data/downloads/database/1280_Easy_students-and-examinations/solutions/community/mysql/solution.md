# MySQL three solutions

**Author:** BhagyeshAkkar
**Votes:** 946
**Link:** [https://leetcode.com/problems/students-and-examinations/solutions/3511410/](https://leetcode.com/problems/students-and-examinations/solutions/3511410/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The SQL query first performs a cross join between the Students and Subjects tables, to create a result set that includes all possible combinations of students and subjects. It then left joins this result set with the Examinations table, using both the student_id and subject_name columns, to count the number of times each student attended each exam.

The COUNT() function is used to count the number of rows in the Examinations table that match the given student and subject. Because the Examinations table may contain duplicates, we use the DISTINCT keyword inside the COUNT() function to only count distinct rows. The COALESCE() function is used to replace NULL values with 0, so that students who did not attend a particular exam are still included in the result set.

Finally, the result set is ordered by student_id and subject_name.

# Code
```Solution1 []
# Write your MySQL query statement below
SELECT s.student_id, s.student_name, sub.subject_name, COUNT(e.student_id) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN Examinations e ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
GROUP BY s.student_id, s.student_name, sub.subject_name
ORDER BY s.student_id, sub.subject_name;

```

```Solution2 []
SELECT s.student_id, s.student_name, sub.subject_name, COALESCE(e.attended_exams, 0) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN (
    SELECT student_id, subject_name, COUNT(*) AS attended_exams
    FROM Examinations
    GROUP BY student_id, subject_name
) e ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
ORDER BY s.student_id, sub.subject_name;

```

```Solution3 []
SELECT s.student_id, s.student_name, sub.subject_name, COALESCE(e.attended_exams, 0) AS attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN (
    SELECT student_id, subject_name, COUNT(*) AS attended_exams
    FROM Examinations
    GROUP BY student_id, subject_name
) e USING (student_id, subject_name)
ORDER BY s.student_id, sub.subject_name;

```

![th.jpg](./images/0.jpeg)
