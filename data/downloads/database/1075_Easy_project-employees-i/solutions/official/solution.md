# Official Solution

**Link:** [https://leetcode.com/problems/project-employees-i/solution/](https://leetcode.com/problems/project-employees-i/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Merge and Calculate

#### Intuition

Since the project assignment and employee information are stored in two separate DataFrames, this approach starts by merging them on the shared column `employee_id` so we can later calculate the average experience years for each project. 

```python
df = project.merge(employee, on='employee_id')
```

We now have the information we need to to calculate the average experience years saved in the same DataFrame. 

| project_id | employee_id | name   | experience_years |
| ---------- | ----------- | ------ | ---------------- |
| 1          | 1           | Khaled | 3                |
| 2          | 1           | Khaled | 3                |
| 1          | 2           | Ali    | 2                |
| 1          | 3           | John   | 1                |
| 2          | 4           | Doe    | 2                |

We can now calculate the average `experience_years` for each project using `mean()`. Since more than one employee is working on the same project, the aggregate average is grouped at the `project_id` level using `groupby()`.

```python
df = df.groupby('project_id', as_index=False)['experience_years'].mean()
```

Below is the output from this step.

| project_id | experience_years |
| ---------- | ---------------- |
| 1          | 2                |
| 2          | 2.5              |

To get the final output, we need to rename the column from `experience_years` to `average_years` and round the result to 2 decimal places using `round()`.

```python
return df.rename(columns={'experience_years': 'average_years'}).round(2)
```

#### Implementation

<iframe src="https://leetcode.com/playground/ZRfBYgrZ/shared" frameBorder="0" width="100%" height="208" name="ZRfBYgrZ"></iframe>

---

## Database

### Approach: JOIN and Calculate

#### Intuition

Since the project assignment and employee information are stored in two separate tables, we need to join the table `Project` to `Employee` to calculate the average `experience_years` of all the employees associated with each project. Since multiple employees are working on the same project, the aggregate average `experience_years` is grouped at the `project_id` level. The result is rounded to 2 digits using the function `ROUND()` and renamed as `average_years` for the final output. 

#### Implementation

```mysql []
SELECT 
    project_id,
    ROUND(AVG(experience_years), 2) AS average_years
FROM 
    Project p
JOIN 
    Employee e
ON 
    p.employee_id = e.employee_id
GROUP BY 
    project_id
```