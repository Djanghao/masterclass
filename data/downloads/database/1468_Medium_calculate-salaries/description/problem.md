# [1468. Calculate Salaries](https://leetcode.com/problems/calculate-salaries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 133 | 25 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table `Salaries`:

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| company_id    | int     |
| employee_id   | int     |
| employee_name | varchar |
| salary        | int     |
+---------------+---------+
In SQL,(company_id, employee_id) is the primary key for this table.
This table contains the company id, the id, the name, and the salary for an employee.

```

 

Find the salaries of the employees after applying taxes. Round the salary to **the nearest integer**.

The tax rate is calculated for each company based on the following criteria:

	- `0%` If the max salary of any employee in the company is less than `$1000`.

	- `24%` If the max salary of any employee in the company is in the range `[1000, 10000]` inclusive.

	- `49%` If the max salary of any employee in the company is greater than `$10000`.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Salaries table:
+------------+-------------+---------------+--------+
| company_id | employee_id | employee_name | salary |
+------------+-------------+---------------+--------+
| 1          | 1           | Tony          | 2000   |
| 1          | 2           | Pronub        | 21300  |
| 1          | 3           | Tyrrox        | 10800  |
| 2          | 1           | Pam           | 300    |
| 2          | 7           | Bassem        | 450    |
| 2          | 9           | Hermione      | 700    |
| 3          | 7           | Bocaben       | 100    |
| 3          | 2           | Ognjen        | 2200   |
| 3          | 13          | Nyancat       | 3300   |
| 3          | 15          | Morninngcat   | 7777   |
+------------+-------------+---------------+--------+
Output: 
+------------+-------------+---------------+--------+
| company_id | employee_id | employee_name | salary |
+------------+-------------+---------------+--------+
| 1          | 1           | Tony          | 1020   |
| 1          | 2           | Pronub        | 10863  |
| 1          | 3           | Tyrrox        | 5508   |
| 2          | 1           | Pam           | 300    |
| 2          | 7           | Bassem        | 450    |
| 2          | 9           | Hermione      | 700    |
| 3          | 7           | Bocaben       | 76     |
| 3          | 2           | Ognjen        | 1672   |
| 3          | 13          | Nyancat       | 2508   |
| 3          | 15          | Morninngcat   | 5911   |
+------------+-------------+---------------+--------+
Explanation: 
For company 1, Max salary is 21300. Employees in company 1 have taxes = 49%
For company 2, Max salary is 700. Employees in company 2 have taxes = 0%
For company 3, Max salary is 7777. Employees in company 3 have taxes = 24%
The salary after taxes = salary - (taxes percentage / 100) * salary
For example, Salary for Morninngcat (3, 15) after taxes = 7777 - 7777 * (24 / 100) = 7777 - 1866.48 = 5910.52, which is rounded to 5911.

```

---

**Links:** [Submissions](https://leetcode.com/problems/calculate-salaries/) | [Solutions](https://leetcode.com/problems/calculate-salaries/)
