# Official Solution

**Link:** [https://leetcode.com/problems/employees-earning-more-than-their-managers/solution/](https://leetcode.com/problems/employees-earning-more-than-their-managers/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

<!-- h3 for approaches -->
### Approach 1: Self-Merge with an Inner Join

<!-- h4 for sections -->
#### Algorithm
We first merge the `employee` table with itself to obtain the salary information of managers for each employee. Note that we set `how=inner` because we only need the rows where there is a match between the `managerId` and `id` columns. An inner join will return only the employees whose manager is not NULL.

```python
df = employee.merge(employee, left_on = 'managerId', right_on = 'id',
            suffixes = ['_e', '_m'], how = 'inner')
```

> Since there will be two columns with the same name after the merge operation, we need to assign suffixes to both tables. By default, the suffixes are `_x` and `_y`. In this problem, the left and right tables can be treated as information for employees and managers, respectively. Therefore, we use `_e` and `_m` for better understanding.

| id_e | name_e | salary_e | managerId_e | id_m | name_m | salary_m | managerId_m |
| ---- | ------ | -------- | ----------- | ---- | ------ | -------- | ----------- |
| 1    | Joe    | 70000    | 3           | 3    | Sam    | 60000    | null        |
| 2    | Henry  | 80000    | 4           | 4    | Max    | 90000    | null        |

<br>


Next, because we have the employee salary `salary_e` and their manager's salary `salary_m`, we can use `loc` to select rows of interest. In addition, we only select one column, which is the name of the employee `name_e`.


```python
df = df.loc[df['salary_e'] > df['salary_m'] , ['name_e']]
```

| name_e |
| ------ |
| Joe    |

Finally, we rename the column to `Employee` and return the result.
```python
return df.rename(columns = {'name_e':'Employee'})
```

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/3gCqJf6m/shared" frameBorder="0" width="100%" height="191" name="3gCqJf6m"></iframe>

---

## Database

<!-- h3 for approaches -->
### Approach 1: Using `WHERE` clause


<!-- h4 for sections -->
#### Algorithm

As this table has the employee's manager information, we probably need to select information from it twice.

```sql
SELECT *
FROM Employee AS a, Employee AS b
;
```
>Note: The keyword 'AS' is optional.

| Id | Name  | Salary | ManagerId | Id | Name  | Salary | ManagerId |
|----|-------|--------|-----------|----|-------|--------|-----------|
| 1  | Joe   | 70000  | 3         | 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         | 1  | Joe   | 70000  | 3         |
| 3  | Sam   | 60000  |           | 1  | Joe   | 70000  | 3         |
| 4  | Max   | 90000  |           | 1  | Joe   | 70000  | 3         |
| 1  | Joe   | 70000  | 3         | 2  | Henry | 80000  | 4         |
| 2  | Henry | 80000  | 4         | 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  |           | 2  | Henry | 80000  | 4         |
| 4  | Max   | 90000  |           | 2  | Henry | 80000  | 4         |
| 1  | Joe   | 70000  | 3         | 3  | Sam   | 60000  |           |
| 2  | Henry | 80000  | 4         | 3  | Sam   | 60000  |           |
| 3  | Sam   | 60000  |           | 3  | Sam   | 60000  |           |
| 4  | Max   | 90000  |           | 3  | Sam   | 60000  |           |
| 1  | Joe   | 70000  | 3         | 4  | Max   | 90000  |           |
| 2  | Henry | 80000  | 4         | 4  | Max   | 90000  |           |
| 3  | Sam   | 60000  |           | 4  | Max   | 90000  |           |
| 4  | Max   | 90000  |           | 4  | Max   | 90000  |           |
> The first 3 columns are from a and the last 3 ones are from b.

Select from two tables will get the [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of these two tables. In this case, the output will be 4*4 = 16 records. However, what we interest is the employee's salary higher than his/her manager. So we should add two conditions in a `WHERE` clause like below.


```sql
SELECT
    *
FROM
    Employee AS a,
    Employee AS b
WHERE
    a.ManagerId = b.Id
        AND a.Salary > b.Salary
;
```

| Id | Name | Salary | ManagerId | Id | Name | Salary | ManagerId |
|----|------|--------|-----------|----|------|--------|-----------|
| 1  | Joe  | 70000  | 3         | 3  | Sam  | 60000  |           |

As we only need to output the employee's name, so we modify the above code a little to get a solution.

<!-- h4 for sections -->
#### Implementation

```sql
SELECT
    a.Name AS 'Employee'
FROM
    Employee AS a,
    Employee AS b
WHERE
    a.ManagerId = b.Id
        AND a.Salary > b.Salary
;
```

<br>


### Approach 2: Using `JOIN` clause

#### Algorithm

Actually, `JOIN` is a more common and efficient way to link tables together, and we can use `ON` to specify some conditions.

#### Implementation

```sql
SELECT
     a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
     ON a.ManagerId = b.Id
     AND a.Salary > b.Salary
;
```