# Official Solution

**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solution/](https://leetcode.com/problems/count-student-number-in-departments/solution/)

---

[TOC]

## Solution
---
### Approach: Using `OUTER JOIN` and `COUNT(expression)` [Accepted]

**Intuition**

Use `GROUP BY` function can measure student number in a department, and then use `COUNT` function to count the number of records of each department.

**Algorithm**

We can use `OUTER JOIN` to query all departments. The problem is to display '0' for departments without no current students. Some people will write the following query using `COUNT(*)`.

```sql
SELECT
    dept_name, COUNT(*) AS student_number
FROM
    department
        LEFT OUTER JOIN
    student ON department.dept_id = student.dept_id
GROUP BY department.dept_name
ORDER BY student_number DESC , department.dept_name
;
```

Unfortunately, it wrongly displays '1' for departments like 'Law' without current students for the sample input.
```
| dept_name   | student_number |
|-------------|----------------|
| Engineering | 2              |
| Law         | 1              |
| Science     | 1              |
```
Instead, `COUNT(expression)` could be used because it does not take account if `expression is null`. You can refer to the [MySQL manual](https://dev.mysql.com/doc/refman/5.7/en/counting-rows.html) for the details.

Thus, here is a right solution after fixing the issue above.

**MySQL**

```sql
SELECT
    dept_name, COUNT(student_id) AS student_number
FROM
    department
        LEFT OUTER JOIN
    student ON department.dept_id = student.dept_id
GROUP BY department.dept_name
ORDER BY student_number DESC , department.dept_name
;
```