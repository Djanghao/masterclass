# Count and join

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solutions/6037693/](https://leetcode.com/problems/count-student-number-in-departments/solutions/6037693/)

---

```postgresql []
SELECT dept_name, COALESCE(student_number, 0) AS student_number
FROM department d
LEFT JOIN
(
    SELECT dept_id, COUNT(1) AS student_number
    FROM student
    GROUP BY 1
) s ON s.dept_id = d.dept_id
ORDER BY student_number DESC, d.dept_id
```