# [615. Average Salary: Departments VS Company](https://leetcode.com/problems/average-salary-departments-vs-company/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 241 | 77 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Salary`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| employee_id | int  |
| amount      | int  |
| pay_date    | date |
+-------------+------+
In SQL, id is the primary key column for this table.
Each row of this table indicates the salary of an employee in one month.
employee_id is a foreign key (reference column) from the Employee table.

```

 

Table: `Employee`

```

+---------------+------+
| Column Name   | Type |
+---------------+------+
| employee_id   | int  |
| department_id | int  |
+---------------+------+
In SQL, employee_id is the primary key column for this table.
Each row of this table indicates the department of an employee.

```

 

Find the comparison result **(higher/lower/same)** of the average salary of employees in a department to the company's average salary.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Salary table:
+----+-------------+--------+------------+
| id | employee_id | amount | pay_date   |
+----+-------------+--------+------------+
| 1  | 1           | 9000   | 2017/03/31 |
| 2  | 2           | 6000   | 2017/03/31 |
| 3  | 3           | 10000  | 2017/03/31 |
| 4  | 1           | 7000   | 2017/02/28 |
| 5  | 2           | 6000   | 2017/02/28 |
| 6  | 3           | 8000   | 2017/02/28 |
+----+-------------+--------+------------+
Employee table:
+-------------+---------------+
| employee_id | department_id |
+-------------+---------------+
| 1           | 1             |
| 2           | 2             |
| 3           | 2             |
+-------------+---------------+
Output: 
+-----------+---------------+------------+
| pay_month | department_id | comparison |
+-----------+---------------+------------+
| 2017-02   | 1             | same       |
| 2017-03   | 1             | higher     |
| 2017-02   | 2             | same       |
| 2017-03   | 2             | lower      |
+-----------+---------------+------------+
Explanation: 
In March, the company&#39;s average salary is (9000+6000+10000)/3 = 8333.33...
The average salary for department &#39;1&#39; is 9000, which is the salary of employee_id &#39;1&#39; since there is only one employee in this department. So the comparison result is &#39;higher&#39; since 9000 &gt; 8333.33 obviously.
The average salary of department &#39;2&#39; is (6000 + 10000)/2 = 8000, which is the average of employee_id &#39;2&#39; and &#39;3&#39;. So the comparison result is &#39;lower&#39; since 8000 &lt; 8333.33.

With he same formula for the average salary comparison in February, the result is &#39;same&#39; since both the department &#39;1&#39; and &#39;2&#39; have the same average salary with the company, which is 7000.

```

---

**Links:** [Submissions](https://leetcode.com/problems/average-salary-departments-vs-company/) | [Solutions](https://leetcode.com/problems/average-salary-departments-vs-company/)
