# Official Solution

**Link:** [https://leetcode.com/problems/department-top-three-salaries/solution/](https://leetcode.com/problems/department-top-three-salaries/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
## pandas

<!-- h3 for approaches -->
### Approach 1: Return the First n Rows Using nlargest()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this problem, we can either identify the top earners first using DataFrame `employee` and then join the DataFrame `department` to get the department name, or join the DataFrame `department` first to get the department name before identifying the top earners. In this approach, we use the latter logic. 

In this step, we can also update the column name in the DataFrame `department` from `name` to `Department` as requested by the final output.

```python
Employee_Department = employee.merge(department, left_on='departmentId', right_on='id').rename(columns = {'name_y': 'Department'})
```

Now we have the employee and department information stored in the same DataFrame: 

| id_x | name_x | salary | departmentId | id_y | Department |
| ---- | ------ | ------ | ------------ | ---- | ---------- |
| 1    | Joe    | 85000  | 1            | 1    | IT         |
| 4    | Max    | 90000  | 1            | 1    | IT         |
| 5    | Janet  | 69000  | 1            | 1    | IT         |
| 6    | Randy  | 85000  | 1            | 1    | IT         |
| 7    | Will   | 70000  | 1            | 1    | IT         |
| 2    | Henry  | 80000  | 2            | 2    | Sales      |
| 3    | Sam    | 60000  | 2            | 2    | Sales      |

Since the definition of a **high earner** is an employee who has a salary in the top three **unique** salaries for the department, we want to make sure the salary is unique at the department level for later calculation. To do this, we select only the department and salary from the DataFrame created in the last step and drop any duplicated records if existed. 

```python
Employee_Department = Employee_Department[['Department', 'departmentId', 'salary']].drop_duplicates()
```

Here's the output after this step:

| Department | departmentId | salary |
| ---------- | ------------ | ------ |
| IT         | 1            | 85000  |
| IT         | 1            | 90000  |
| IT         | 1            | 69000  |
| IT         | 1            | 70000  |
| Sales      | 2            | 80000  |
| Sales      | 2            | 60000  |

Now we can identify the top 3 unique salaries for each department. We use the function [`nlargest()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.nlargest.html) to get this value. The parameter '3' is passed to the function as it defines the number of rows to return. 

```python
top_salary = Employee_Department.groupby(['Department', 'departmentId']).salary.nlargest(3).reset_index()
```

| Department | departmentId | level_2 | salary |
| ---------- | ------------ | ------- | ------ |
| IT         | 1            | 1       | 90000  |
| IT         | 1            | 0       | 85000  |
| IT         | 1            | 4       | 70000  |
| Sales      | 2            | 5       | 80000  |
| Sales      | 2            | 6       | 60000  |


Now we only need to identify the employees are in these departments and making the same amount of salary. To do this, we can merge the DataFrame `top_salary`, which contains the top three unique salary for each department, to the DataFrame `employee` on `departmentId` and `salary`, so only the employees that match both criteria will be retained. 

```python
df = top_salary.merge(employee, on=['departmentId', 'salary'])
```

| Department | departmentId | level_2 | salary | id | name  |
| ---------- | ------------ | ------- | ------ | -- | ----- |
| IT         | 1            | 1       | 90000  | 4  | Max   |
| IT         | 1            | 0       | 85000  | 1  | Joe   |
| IT         | 1            | 0       | 85000  | 6  | Randy |
| IT         | 1            | 4       | 70000  | 7  | Will  |
| Sales      | 2            | 5       | 80000  | 2  | Henry |
| Sales      | 2            | 6       | 60000  | 3  | Sam   |

Lastly, we clean the DataFrame as per requested by the final output. We keep only the columns needed and rename the columns accordingly.

```python
df[['Department', 'name', 'salary']].rename(columns = {'name': 'Employee', 'salary': 'Salary'})
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/5nLUgFZZ/shared" frameBorder="0" width="100%" height="276" name="5nLUgFZZ"></iframe>
<!-- an empty line to separate approaches -->


<!-- h3 for approaches -->
### Approach 2: Return the First n Rows Using rank()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we first identify the top earners from the DataFrame `employee` and then join the DataFrame `department` to get the department name. 

To identify the high earners for each department, we use the function [`rank()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rank.html) to apply dense rank on the column `salary` so we can get the top three **unique** salaries. The parameter `ascending=False` is passed so the salary is sorted from the maximum to the minimum. Within the same step, we can also add the filter to keep only the records with a rank smaller than or equal to 3. 

```python
top_salary = employee[employee.groupby('departmentId').salary.rank(method='dense', ascending=False) <= 3]
```

Only employees who are `high earners` retained in the new DataFrame:

| id | name  | salary | departmentId |
| -- | ----- | ------ | ------------ |
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |

Now we want to `merge` to the DataFrame `department` to get the `name` of the department. In the same step, we can also select only the columns needed for the final output. 

```python
employee_department = top_salary.merge(department, left_on='departmentId', right_on='id')[['name_y', 'name_x', 'salary']]
```
| name_y | name_x | salary |
| ------ | ------ | ------ |
| IT     | Joe    | 85000  |
| IT     | Max    | 90000  |
| IT     | Randy  | 85000  |
| IT     | Will   | 70000  |
| Sales  | Henry  | 80000  |
| Sales  | Sam    | 60000  |


We are almost there! To get the final output, we need to update the column name as per requested.

```python
return employee_department.rename(columns = {'name_y': 'Department', 'name_x': 'Employee', 'salary': 'Salary'})
```

<!-- h4 for sections -->
#### Implementation
<iframe src="https://leetcode.com/playground/WbvUZqck/shared" frameBorder="0" width="100%" height="208" name="WbvUZqck"></iframe>
---

## Database

### Approach 1: Return the First n Rows Using Correlated Subquery

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
We can build a [correlated subquery](https://dev.mysql.com/doc/refman/8.0/en/correlated-subqueries.html) to identify the top N records from more than one category. Since the correlated subquery is dependent on the main query, the idea behind this approach is to compare the values between the main query and the subquery, so that in the subquery, at most N-1 salaries can be greater than each selected salary from the main query.

To do this, we first build the main query. In the main query, we can also join the table `Employee` to the table `Department` on `departmentId` to get the `name` of the departments and rename the columns as requested by the final output. 

```sql
SELECT d.name AS 'Department', 
       e1.name AS 'Employee', 
       e1.salary AS 'Salary' 
FROM Employee e1
JOIN Department d
ON e1.departmentId = d.id 
```

In the correlated subquery, we select the number of salaries from the same table `Employee`. To compare the salaries between the main query and the subquery, we make sure the department is the same from both queries, but the salary from the subquery is always bigger than the salary from the main query. 

```sql
(
    SELECT COUNT(DISTINCT e2.salary)
    FROM Employee e2
    WHERE e2.salary > e1.salary AND e1.departmentId = e2.departmentId
)
```

Since we need to identify the top three high earners in the main query, and the subquery always has larger salaries than the salaries from the main query, the maximum count of the larger salaries in the subquery is two. We add this criteria as a filter to the main query.

<!-- h4 for sections -->
#### Implementation

```sql
SELECT d.name AS 'Department', 
       e1.name AS 'Employee', 
       e1.salary AS 'Salary' 
FROM Employee e1
JOIN Department d
ON e1.departmentId = d.id 
WHERE
    3 > (SELECT COUNT(DISTINCT e2.salary)
        FROM Employee e2
        WHERE e2.salary > e1.salary AND e1.departmentId = e2.departmentId);
```
​
<!-- an empty line to separate approaches -->

<!-- h3 for approaches -->
### Approach 2: Return the First n Rows Using DENSE_RANK()

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
Unlike the previous approach that utilized a correlated subquery, in this approach, we sorted the salaries in descending order, ranked employees based on their salaries within the department, and selected only the first 3 employees for the final output.

We first create a subquery or CTE to rank the employees. Since the definition of a high earner is the employee who has a salary in the top three **unique** salaries for the department, we can use the function `DENSE_RANK()` to avoid the scenario that employees from the same department make the same amount of salary. In this step, we can also join the table `Department` on `departmentId` to get the `name` of the departments and rename the columns for the final output. 

```sql
WITH employee_department AS
    (
    SELECT d.id, 
        d.name AS Department, 
        salary AS Salary, 
        e.name AS Employee, 
        DENSE_RANK()OVER(PARTITION BY d.id ORDER BY salary DESC) AS rnk
    FROM Department d
    JOIN Employee e
    ON d.id = e.departmentId
    )
```

Now, each employee has a rank based on the `salary` in a descending order for each department. 

| id | Department | Salary | Employee | rnk |
| -- | ---------- | ------ | -------- | --- |
| 1  | IT         | 90000  | Max      | 1   |
| 1  | IT         | 85000  | Joe      | 2   |
| 1  | IT         | 85000  | Randy    | 2   |
| 1  | IT         | 70000  | Will     | 3   |
| 1  | IT         | 69000  | Janet    | 4   |
| 2  | Sales      | 80000  | Henry    | 1   |
| 2  | Sales      | 60000  | Sam      | 2   |

With the rank, we can select the high earners. We can add the filter to select employees that have a rank smaller than or equal to 3 in the main query. 

```sql
SELECT Department, Employee, Salary
FROM employee_department
WHERE rnk <= 3
```
<!-- h4 for sections -->
#### Implementation

```mysql []
WITH employee_department AS
    (
    SELECT d.id, 
        d.name AS Department, 
        salary AS Salary, 
        e.name AS Employee, 
        DENSE_RANK()OVER(PARTITION BY d.id ORDER BY salary DESC) AS rnk
    FROM Department d
    JOIN Employee e
    ON d.id = e.departmentId
    )
SELECT Department, Employee, Salary
FROM employee_department
WHERE rnk <= 3
```
​
----
<!-- an empty line to separate approaches -->