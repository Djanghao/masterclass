# [176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 4094 | 1007 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `amazon`, `microsoft`, `facebook`, `bloomberg`, `tcs`, `cognizant`, `oracle`, `accenture`, `zs-associates`, `deloitte`, `infosys`, `adobe`, `apple`, `tiktok`, `maq-software`

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

 

Write a solution to find the second highest **distinct** salary from the `Employee` table. If there is no second highest salary, return `null (return None in Pandas)`.

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
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+

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
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/second-highest-salary/) | [Solutions](https://leetcode.com/problems/second-highest-salary/)
