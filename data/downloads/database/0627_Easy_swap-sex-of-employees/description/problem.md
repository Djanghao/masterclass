# [627. Swap Sex of Employees](https://leetcode.com/problems/swap-sex-of-employees/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 1847 | 571 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`, `microsoft`

## Description

Table: `Salary`

```

+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| id          | int      |
| name        | varchar  |
| sex         | ENUM     |
| salary      | int      |
+-------------+----------+
id is the primary key (column with unique values) for this table.
The sex column is ENUM (category) value of type (&#39;m&#39;, &#39;f&#39;).
The table contains information about an employee.

```

 

Write a solution to swap all `'f'` and `'m'` values (i.e., change all `'f'` values to `'m'` and vice versa) with a **single update statement** and no intermediate temporary tables.

Note that you must write a single update statement, **do not** write any select statement for this problem.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Salary table:
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
+----+------+-----+--------+
Output: 
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
+----+------+-----+--------+
Explanation: 
(1, A) and (3, C) were changed from &#39;m&#39; to &#39;f&#39;.
(2, B) and (4, D) were changed from &#39;f&#39; to &#39;m&#39;.

```

---

**Links:** [Submissions](https://leetcode.com/problems/swap-sex-of-employees/) | [Solutions](https://leetcode.com/problems/swap-sex-of-employees/)
