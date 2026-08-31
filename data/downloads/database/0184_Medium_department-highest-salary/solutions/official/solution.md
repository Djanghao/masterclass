# Official Solution

**Link:** [https://leetcode.com/problems/department-highest-salary/solution/](https://leetcode.com/problems/department-highest-salary/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Left Join
#### Algorithm

We start by merging two tables to obtain all the department names, employee names, and salaries. 

```python
df = employee.merge(department, left_on='departmentId', right_on='id', how='left')
```

<table>
  <thead>
    <tr>
      <th>id_x</th>
      <th>name_x</th>
      <th>salary</th>
      <th>departmentId</th>
      <th>id_y</th>
      <th>name_y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Joe</td>
      <td>70000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jim</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Henry</td>
      <td>80000</td>
      <td>2</td>
      <td>2</td>
      <td>Sales</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Sam</td>
      <td>60000</td>
      <td>2</td>
      <td>2</td>
      <td>Sales</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Max</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
  </tbody>
</table>



> Note that after the merge, columns with the same name (for example, `name`) in the original tables will be renamed (as `name_x` and `name_y`), so we need to perform column renaming.

```python
df.rename(columns={'name_x': 'Employee', 'name_y': 'Department', 'salary': 'Salary'}, inplace=True)
```

The resulting `df` will be as follows.

<table>
  <thead>
    <tr>
      <th>id_x</th>
      <th>Employee</th>
      <th>Salary</th>
      <th>departmentId</th>
      <th>id_y</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Joe</td>
      <td>70000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jim</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Henry</td>
      <td>80000</td>
      <td>2</td>
      <td>2</td>
      <td>Sales</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Sam</td>
      <td>60000</td>
      <td>2</td>
      <td>2</td>
      <td>Sales</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Max</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
  </tbody>
</table>


Next, we group `df` based on the `Department` column and apply the function `transform('max')` to the `Salary` column, which calculates the maximum salary for each department and returns a Series of the same length, with each value being the maximum salary for the corresponding department (it may not necessarily be the salary of the corresponding employee.).

```python
max_salary = df.groupby('Department')['Salary'].transform('max')
```


```
0    90000
1    90000
2    80000
3    80000
4    90000
Name: Salary, dtype: int64
```
<br>

Therefore, by using `df[df['salary'] == max_salary]`, we can select all the employees whose salary is equal to the maximum salary within their respective departments.

```python
df = df[df['Salary'] == max_salary]
```


We will obtain the following DataFrame `df`:

<table>
  <thead>
    <tr>
      <th>id_x</th>
      <th>Employee</th>
      <th>Salary</th>
      <th>departmentId</th>
      <th>id_y</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Jim</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Henry</td>
      <td>80000</td>
      <td>2</td>
      <td>2</td>
      <td>Sales</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Max</td>
      <td>90000</td>
      <td>1</td>
      <td>1</td>
      <td>IT</td>
    </tr>
  </tbody>
</table>
<br>

The last step is to return the dataframe that only contains the required columns, the complete code is as follows.

#### Implementation

<iframe src="https://leetcode.com/playground/SixfNL3Q/shared" frameBorder="0" width="100%" height="259" name="SixfNL3Q"></iframe>


<br>

---

## Database

### Approach: `Left Join` and `WHERE` Clause
#### Algorithm

Since the **Employee** table contains the *Salary* and *DepartmentId* information, we can query the highest salary in a department.

```sql
SELECT
    DepartmentId, MAX(Salary)
FROM
    Employee
GROUP BY DepartmentId;
```
>Note: There might be multiple employees having the same highest salary, so it is safe not to include the employee name information in this query.

<table>
  <thead>
    <tr>
      <th>DepartmentId</th>
      <th>MAX(Salary)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>90000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>80000</td>
    </tr>
  </tbody>
</table>


Then, we can join table **Employee** and **Department**, and query the (DepartmentId, Salary) are in the temp table using `IN` statement as below.

#### Implementation

```sql
SELECT
    Department.name AS 'Department',
    Employee.name AS 'Employee',
    Salary
FROM
    Employee
        JOIN
    Department ON Employee.DepartmentId = Department.Id
WHERE
    (Employee.DepartmentId , Salary) IN
    (   SELECT
            DepartmentId, MAX(Salary)
        FROM
            Employee
        GROUP BY DepartmentId
    )
;
```