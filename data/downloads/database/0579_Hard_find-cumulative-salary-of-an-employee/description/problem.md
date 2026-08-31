# [579. Find Cumulative Salary of an Employee](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 247 | 404 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `Employee`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| month       | int  |
| salary      | int  |
+-------------+------+
(id, month) is the primary key (combination of columns with unique values) for this table.
Each row in the table indicates the salary of an employee in one month during the year 2020.

```

 

Write a solution to calculate the **cumulative salary summary** for every employee in a single unified table.

The **cumulative salary summary** for an employee can be calculated as follows:

	- For each month that the employee worked, **sum** up the salaries in **that month** and the **previous two months**. This is their **3-month sum** for that month. If an employee did not work for the company in previous months, their effective salary for those months is `0`.

	- Do **not** include the 3-month sum for the **most recent month** that the employee worked for in the summary.

	- Do **not** include the 3-month sum for any month the employee **did not work**.

Return the result table ordered by `id` in **ascending order**. In case of a tie, order it by `month` in **descending order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Employee table:
+----+-------+--------+
| id | month | salary |
+----+-------+--------+
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 1  | 2     | 30     |
| 2  | 2     | 30     |
| 3  | 2     | 40     |
| 1  | 3     | 40     |
| 3  | 3     | 60     |
| 1  | 4     | 60     |
| 3  | 4     | 70     |
| 1  | 7     | 90     |
| 1  | 8     | 90     |
+----+-------+--------+
Output: 
+----+-------+--------+
| id | month | Salary |
+----+-------+--------+
| 1  | 7     | 90     |
| 1  | 4     | 130    |
| 1  | 3     | 90     |
| 1  | 2     | 50     |
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 3  | 3     | 100    |
| 3  | 2     | 40     |
+----+-------+--------+
Explanation: 
Employee &#39;1&#39; has five salary records excluding their most recent month &#39;8&#39;:
- 90 for month &#39;7&#39;.
- 60 for month &#39;4&#39;.
- 40 for month &#39;3&#39;.
- 30 for month &#39;2&#39;.
- 20 for month &#39;1&#39;.
So the cumulative salary summary for this employee is:
+----+-------+--------+
| id | month | salary |
+----+-------+--------+
| 1  | 7     | 90     |  (90 + 0 + 0)
| 1  | 4     | 130    |  (60 + 40 + 30)
| 1  | 3     | 90     |  (40 + 30 + 20)
| 1  | 2     | 50     |  (30 + 20 + 0)
| 1  | 1     | 20     |  (20 + 0 + 0)
+----+-------+--------+
Note that the 3-month sum for month &#39;7&#39; is 90 because they did not work during month &#39;6&#39; or month &#39;5&#39;.

Employee &#39;2&#39; only has one salary record (month &#39;1&#39;) excluding their most recent month &#39;2&#39;.
+----+-------+--------+
| id | month | salary |
+----+-------+--------+
| 2  | 1     | 20     |  (20 + 0 + 0)
+----+-------+--------+

Employee &#39;3&#39; has two salary records excluding their most recent month &#39;4&#39;:
- 60 for month &#39;3&#39;.
- 40 for month &#39;2&#39;.
So the cumulative salary summary for this employee is:
+----+-------+--------+
| id | month | salary |
+----+-------+--------+
| 3  | 3     | 100    |  (60 + 40 + 0)
| 3  | 2     | 40     |  (40 + 0 + 0)
+----+-------+--------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/) | [Solutions](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/)
