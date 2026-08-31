# Find Highest Salary Employees by Department (Subquery & Join) in PostgreSQL

**Author:** d_sushkov
**Votes:** 9
**Link:** [https://leetcode.com/problems/department-highest-salary/solutions/5594011/](https://leetcode.com/problems/department-highest-salary/solutions/5594011/)

---

# Intuition
To solve the problem of retrieving the employee with the highest salary within each department, we need to:

- Identify the maximum salary within each department.
- Filter employees to match this maximum salary.
- Combine this information with department names to present the result.

# Approach
1. `Subquery for Maximum Salary`: Use a subquery to compute the maximum salary (MAX(Salary)) for each department by grouping the Employee table by departmentId.

2. `Main Query Join`: Join the Employee and Department tables, filtering the results based on the subquery to ensure only employees with the maximum salary are selected.

3. `Select Columns`: Ensure the final output includes the department name, employee name, and salary.

# Complexity
- Time complexity: $$O(nlogn)$$ 
`Subquery`: The subquery involves a GROUP BY operation which can be 
$$O(nlogn)$$ due to sorting.
`Join and Filter`: The join and filtering operations are generally $$O(n)$$, assuming indexes are in place.

- Space complexity: $$O(n)$$ space required for intermediate result storage and the final join operation grows linearly with the number of rows in the tables.

# Code
```
-- Write your PostgreSQL query statement below
SELECT 
    Department.name AS Department, 
    Employee.name AS Employee, 
    Salary
FROM 
    Employee
JOIN 
    Department 
    ON Department.id = Employee.departmentId
WHERE 
    (Employee.departmentId, Salary) IN (
        SELECT 
            departmentId, 
            MAX(Salary) 
        FROM 
            Employee 
        GROUP BY 
            departmentId
    );
```