# [2853. Highest Salaries Difference](https://leetcode.com/problems/highest-salaries-difference/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 18 | 1 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Salaries`

```

+-------------+---------+ 
| Column Name | Type    | 
+-------------+---------+ 
| emp_name    | varchar | 
| department  | varchar | 
| salary      | int     |
+-------------+---------+
(emp_name, department) is the primary key (combination of unique values) for this table.
Each row of this table contains emp_name, department and salary. There will be at least one entry for the engineering and marketing departments.

```

Write a solution to calculate the difference between the **highest** salaries in the **marketing** and **engineering** `department`. Output the absolute difference in salaries.

Return* the result table.*

The result format is in the following example.

 

**Example 1:**

```

Input: 
Salaries table:
+----------+-------------+--------+
| emp_name | department  | salary |
+----------+-------------+--------+
| Kathy    | Engineering | 50000  |
| Roy      | Marketing   | 30000  |
| Charles  | Engineering | 45000  |
| Jack     | Engineering | 85000  | 
| Benjamin | Marketing   | 34000  |
| Anthony  | Marketing   | 42000  |
| Edward   | Engineering | 102000 |
| Terry    | Engineering | 44000  |
| Evelyn   | Marketing   | 53000  |
| Arthur   | Engineering | 32000  |
+----------+-------------+--------+
Output: 
+-------------------+
| salary_difference | 
+-------------------+
| 49000             | 
+-------------------+
Explanation: 
- The Engineering and Marketing departments have the highest salaries of 102,000 and 53,000, respectively. Resulting in an absolute difference of 49,000.

```

---

**Links:** [Submissions](https://leetcode.com/problems/highest-salaries-difference/) | [Solutions](https://leetcode.com/problems/highest-salaries-difference/)
