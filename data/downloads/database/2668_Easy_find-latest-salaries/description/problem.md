# [2668. Find Latest Salaries](https://leetcode.com/problems/find-latest-salaries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 20 | 18 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Salary`

```

+---------------+---------+ 
| Column Name   | Type    | 
+---------------+---------+ 
| emp_id        | int     | 
| firstname     | varchar |
| lastname      | varchar |
| salary        | varchar |
| department_id | varchar |
+---------------+---------+
(emp_id, salary) is the primary key (combination of columns with unique values) for this table.
Each row contains employees details and their yearly salaries, however, some of the records are old and contain outdated salary information. 

```

Write a solution to find the current salary of each employee assuming that salaries increase each year. Output their `emp_id`, `firstname`, `lastname`, `salary`, and `department_id`.

Return the result table ordered by `emp_id` in **ascending** order*.*

The result format is in the following example.

 

**Example 1:**

```

Input:
Salary table:
+--------+-----------+----------+--------+---------------+
| emp_id | firstname | lastname | salary | department_id |
+--------+-----------+----------+--------+---------------+ 
| 1      | Todd      | Wilson   | 110000 | D1006         |
| 1      | Todd      | Wilson   | 106119 | D1006         | 
| 2      | Justin    | Simon    | 128922 | D1005         | 
| 2      | Justin    | Simon    | 130000 | D1005         | 
| 3      | Kelly     | Rosario  | 42689  | D1002         | 
| 4      | Patricia  | Powell   | 162825 | D1004         |
| 4      | Patricia  | Powell   | 170000 | D1004         |
| 5      | Sherry    | Golden   | 44101  | D1002         | 
| 6      | Natasha   | Swanson  | 79632  | D1005         | 
| 6      | Natasha   | Swanson  | 90000  | D1005         |
+--------+-----------+----------+--------+---------------+
Output:
+--------+-----------+----------+--------+---------------+
| emp_id | firstname | lastname | salary | department_id |
+--------+-----------+----------+--------+---------------+ 
| 1      | Todd      | Wilson   | 110000 | D1006         |
| 2      | Justin    | Simon    | 130000 | D1005         | 
| 3      | Kelly     | Rosario  | 42689  | D1002         | 
| 4      | Patricia  | Powell   | 170000 | D1004         |
| 5      | Sherry    | Golden   | 44101  | D1002         | 
| 6      | Natasha   | Swanson  | 90000  | D1005         |
+--------+-----------+----------+--------+---------------+

Explanation:
- emp_id 1 has two records with a salary of&nbsp;110000, 106119 out of these 110000 is an updated salary (Assuming salary is increasing each year)
- emp_id 2 has two records with a salary of&nbsp;128922, 130000&nbsp;out of these 130000 is an updated salary.
- emp_id 3 has only one salary record so that is already an updated salary.
- emp_id 4&nbsp;has two records with a salary of&nbsp;162825, 170000&nbsp;out of these 170000 is an updated salary.
- emp_id 5&nbsp;has only one salary record so that is already an updated salary.
- emp_id 6&nbsp;has two records with a salary of 79632, 90000 out&nbsp;of these 90000 is an updated salary.

```

---

**Links:** [Submissions](https://leetcode.com/problems/find-latest-salaries/) | [Solutions](https://leetcode.com/problems/find-latest-salaries/)
