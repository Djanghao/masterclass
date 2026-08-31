# Find Employees with Low Salary and Invalid Managers || Easy Approach💯✅

**Author:** jineesh_desai_09
**Votes:** 7
**Link:** [https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/5712086/](https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/5712086/)

---



# Description:

You are given a table employees with the following schema:

***employee_id (INT):*** The **unique ID** of each employee.
***salary (INT):*** The salary of the employee.
***manager_id (INT):*** The ID of the employee's manager.

**Write a query to find all employee IDs where the employee meets the following conditions:**

1. The employee's salary is less than 30,000.
2. The employee's manager_id does not exist in the employee_id column (i.e., the employee does not have a valid manager).

The output should be a list of employee_id values, sorted in ascending order.

# Explanation:

- Employee 1 has a salary less than 30,000 and their manager (ID 3) is valid, but since the problem also considers invalid managers, it does not return this ID.
- Employee 4 has a salary less than 30,000 and their manager (ID 5) does not exist in the employee_id column, so their employee_id is returned.

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT
    employee_id
FROM 
    employees
WHERE
    salary < 30000
    AND manager_id NOT IN (SELECT employee_id FROM employees)
ORDER BY 
    employee_id;

```