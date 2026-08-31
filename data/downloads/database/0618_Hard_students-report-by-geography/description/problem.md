# [618. Students Report By Geography](https://leetcode.com/problems/students-report-by-geography/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 191 | 170 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Student`

```

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
+-------------+---------+
This table may contain duplicate rows.
Each row of this table indicates the name of a student and the continent they came from.

```

 

A school has students from Asia, Europe, and America.

Write a solution to pivot the continent column in the `Student` table so that each name is **sorted alphabetically** and displayed underneath its corresponding continent. The output headers should be `America`, `Asia`, and `Europe`, respectively.

The test cases are generated so that the student number from America is not less than either Asia or Europe.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Student table:
+--------+-----------+
| name   | continent |
+--------+-----------+
| Jane   | America   |
| Pascal | Europe    |
| Xi     | Asia      |
| Jack   | America   |
+--------+-----------+
Output: 
+---------+------+--------+
| America | Asia | Europe |
+---------+------+--------+
| Jack    | Xi   | Pascal |
| Jane    | null | null   |
+---------+------+--------+

```

 

**Follow up:** If it is unknown which continent has the most students, could you write a solution to generate the student report?

---

**Links:** [Submissions](https://leetcode.com/problems/students-report-by-geography/) | [Solutions](https://leetcode.com/problems/students-report-by-geography/)
