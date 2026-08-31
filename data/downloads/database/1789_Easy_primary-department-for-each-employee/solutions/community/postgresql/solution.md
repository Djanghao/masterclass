# 🐘PostgreSQL ❗ Beats 95.87% ❗ Simple solution with SUBSELECT

**Author:** IliaAvdeev
**Votes:** 17
**Link:** [https://leetcode.com/problems/primary-department-for-each-employee/solutions/5192462/](https://leetcode.com/problems/primary-department-for-each-employee/solutions/5192462/)

---

# Approach
* **Outer Query (Main Query):**
   - `SELECT employee_id, department_id FROM employee`: This part selects the desired columns (`employee_id` and `department_id`) from the `employee` table.
   - `WHERE ...`:  This clause filters the results based on the combined conditions.

* **Condition 1 (Subquery):**
   - `employee_id IN (SELECT employee_id FROM Employee e1 GROUP BY employee_id HAVING COUNT(employee_id) = 1)`
     - *Subquery:* The inner `SELECT` statement is a subquery.
        - `SELECT employee_id FROM Employee e1`: It selects the `employee_id` from the `employee` table (aliased as `e1`).
        - `GROUP BY employee_id`: It groups the rows based on unique `employee_id` values.
        - `HAVING COUNT(employee_id) = 1`: This is the crucial part. It filters the grouped results to only include `employee_id`s that appear exactly once in the table. In essence, it finds employees who are associated with only one record.
     - *`IN` Clause:* The outer query uses the `IN` operator to check if an `employee_id` from the main `employee` table exists in the list of unique `employee_id`s returned by the subquery.

* **Condition 2:**
   - `OR primary_flag = 'Y'`:  This condition selects employees who have their `primary_flag` set to 'Y'. 

**Combined Logic**

The query retrieves employees who satisfy either of these conditions:

1. **Unique Employees:** Employees who have only one entry in the `employee` table (identified by the subquery).
2. **Primary Flag:** Employees who are marked with `primary_flag = 'Y'`.


# Code
```
SELECT employee_id, department_id
FROM employee
WHERE employee_id IN (SELECT employee_id
                      FROM Employee e1
                      GROUP BY employee_id
                      HAVING COUNT(employee_id) = 1)
   OR primary_flag = 'Y'
```