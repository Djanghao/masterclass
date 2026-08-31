# [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 2235 | 1113 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`, `google`, `bloomberg`, `deloitte`, `capgemini`, `tiktok`, `zs-associates`

## Description

Table: `Employee`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.

```

 

Write a solution to find the `n^th` highest **distinct** salary from the `Employee` table. If there are less than `n` distinct salaries, return `null`.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+

```

**Example 2:**

```

Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/nth-highest-salary/) | [Solutions](https://leetcode.com/problems/nth-highest-salary/)
