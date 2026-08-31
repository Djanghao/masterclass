# Official Solution

**Link:** [https://leetcode.com/problems/project-employees-iii/solution/](https://leetcode.com/problems/project-employees-iii/solution/)

---

[TOC]

# Solution

### Overview

This is a typical **“TOP N”** problem, and we need to retrieve the TOP value for each category (`project_id`). Using window functions or not, the underlying logic remains the same: we want to first find the top values for each category, and then join the result to the original table to get only the matched records.

---
​
## pandas

<!-- h3 for approaches -->
### Approach: Using max() and then merge to filter

<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
To get the most years of experience for each project, we need to group by each `project_id` and find the maximum `experience_years` from each of the employees associated with each project. Since these two columns are stored in separate DataFrames, we first need to join the two DataFrames `project` and `employee`: 

```python
project_and_employee = project.merge(employee, on = 'employee_id')
```

Now with the columns `project_id` and `experience_years` stored in the same DataFrame, we try to find the max `experience_years` for each `project_id` using `groupby` and `max()`. Since we want to return a DataFrame that includes both columns `project_id` and `experience_years` instead of a Series with only the maximum of `experience_years`, we pass **'as_index=False'** so the code will return both the group names and aggregated values. Now we have a DataFrame, only_max, with each `project_id` and its maximum of `experience_years`.

```python
only_max = project_and_employee.groupby(['project_id'], as_index = False)['experience_years'].max()
```

The DataFrame only_max looks like this:

| project_id | experience_years |
| ---------- | ---------------- |
| 1          | 3                |
| 2          | 3                |

​Lastly, we join the two DataFrames created in the previous steps,  so only the employees with the most experience in the project will be returned. We also want to make sure the final output includes only the columns `project_id` and `employee_id` as per requested.

```python
df = project_and_employee.merge(only_max, on = ['project_id', 'experience_years'])[['project_id', 'employee_id']]
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/LZm9vv7H/shared" frameBorder="0" width="100%" height="242" name="LZm9vv7H"></iframe>

<br>

--- 


## Database
<!-- h3 for approaches -->
### Approach 1: Using CTE and MAX()
<!-- h4 for sections -->
---
#### Intuition
For this approach, we get the top N for each category using `MAX()`. Since both tables are needed to get the max years of experience for each project, we first create such join in a CTE or subquery. CTE is preferred in this solution because we need to use it twice to get the maximum year of experience for each project using `MAX()` and later join to get only the most experienced employees.

#### Algorithm

1. Create a CTE that combines both tables.
2. In the subquery, filter the results from the CTE using `MAX()`. 
3. In the main query, `JOIN` the CTE to the subquery to return only the most experienced employees for each project.

Step 1
```sql
WITH project_and_employee AS(
  SELECT t0.project_id, t1.employee_id, experience_years
  FROM Project t0
  JOIN Employee t1
  ON t0.employee_id = t1.employee_id
)
```

Step 2
```sql
SELECT project_id, 
       MAX(experience_years) AS max_experience 
FROM project_and_employee
GROUP BY 1
```

#### Implementation

```sql
WITH project_and_employee AS(
  SELECT t0.project_id, t1.employee_id, experience_years
  FROM Project t0
  JOIN Employee t1
  ON t0.employee_id = t1.employee_id
)
SELECT a.project_id, employee_id
FROM project_and_employee a
JOIN 
    (SELECT project_id, 
            MAX(experience_years) AS max_experience 
     FROM project_and_employee
     GROUP BY 1)b
ON a.project_id = b.project_id
AND a.experience_years = b.max_experience
```

-----

### Approach 2: Using Window Functions

#### Intuition

Multiple window functions can be used to get the top/max value from a column: FIRST_VALUE, RANK, ROW_NUMBER, etc., but the underlying logic is the same: We sort the columns in a specific order, for instance in this question, we are interested in the maximum `experience_years`. Thus, we sort that table in reverse order based on `experience_years`, so that the desired maximum value will be placed at rank 1.

#### Algorithm

1. In the subquery, `JOIN` the two tables and give each record a rank by the `experience_years` in descending order for each project.
2. In the main query, `SELECT` only the project and employee from the subquery with the rank equals 1.

step 1
```sql
SELECT p.project_id, 
       p.employee_id, 
       RANK()OVER(PARTITION BY project_id ORDER BY experience_years DESC) AS rnk
FROM Project p
JOIN Employee e
ON p.employee_id = e.employee_id
```

#### Implementation
```sql
SELECT project_id, employee_id
FROM (
    SELECT p.project_id, 
           p.employee_id, 
           RANK()OVER(PARTITION BY project_id ORDER BY experience_years DESC) AS rnk
    FROM Project p
    JOIN Employee e
    ON p.employee_id = e.employee_id
)a
WHERE rnk = 1
```

------