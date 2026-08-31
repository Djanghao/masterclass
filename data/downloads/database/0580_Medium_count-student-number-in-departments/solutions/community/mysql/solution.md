# MYSQL : LEFT JOIN + INFULL() + GROUP BY + ORDER BY. Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solutions/2485652/](https://leetcode.com/problems/count-student-number-in-departments/solutions/2485652/)

---

```
# Write your MySQL query statement below
/**
Two Table: Student/Department

student_id is the primary key column for Student table.
dept_id is a foreign key to dept_id in the Department tables.
Student table indicates the name of a student, their gender, and the id of their department.

dept_id is the primary key column for Department table.
Department table contains the id and the name of a department.

PROBLEM: report the respective department name and number of students majoring in each department for all departments in the Department table (even ones with no current students).

STEPS: IFNULL and LEFT JOIN AND GROUP BY

*/

SELECT
    D.dept_name,
    IFNULL(COUNT(S.student_id),0) AS student_number
FROM Department D
LEFT JOIN Student S
ON D.dept_id = S.dept_id
GROUP BY 1
ORDER BY 2 DESC, 1 ASC
```