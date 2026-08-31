# [1350. Students With Invalid Departments](https://leetcode.com/problems/students-with-invalid-departments/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 183 | 9 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `Departments`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
In SQL, id is the primary key of this table.
The table has information about the id of each department of a university.

```

 

Table: `Students`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
| department_id | int     |
+---------------+---------+
In SQL, id is the primary key of this table.
The table has information about the id of each student at a university and the id of the department he/she studies at.

```

 

Find the id and the name of all students who are enrolled in departments that no longer exist.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Departments table:
+------+--------------------------+
| id   | name                     |
+------+--------------------------+
| 1    | Electrical Engineering   |
| 7    | Computer Engineering     |
| 13   | Bussiness Administration |
+------+--------------------------+
Students table:
+------+----------+---------------+
| id   | name     | department_id |
+------+----------+---------------+
| 23   | Alice    | 1             |
| 1    | Bob      | 7             |
| 5    | Jennifer | 13            |
| 2    | John     | 14            |
| 4    | Jasmine  | 77            |
| 3    | Steve    | 74            |
| 6    | Luis     | 1             |
| 8    | Jonathan | 7             |
| 7    | Daiana   | 33            |
| 11   | Madelynn | 1             |
+------+----------+---------------+
Output: 
+------+----------+
| id   | name     |
+------+----------+
| 2    | John     |
| 7    | Daiana   |
| 4    | Jasmine  |
| 3    | Steve    |
+------+----------+
Explanation: 
John, Daiana, Steve, and Jasmine are enrolled in departments 14, 33, 74, and 77 respectively. department 14, 33, 74, and 77 do not exist in the Departments table.

```

---

**Links:** [Submissions](https://leetcode.com/problems/students-with-invalid-departments/) | [Solutions](https://leetcode.com/problems/students-with-invalid-departments/)
